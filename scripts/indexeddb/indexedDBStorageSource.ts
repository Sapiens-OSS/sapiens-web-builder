import {
  type Asset,
  type FullyLoadedProject,
  type PartiallyLoadedProject,
  ProjectSource,
  ProjectSourceColour,
} from "../project";
import { DEFAULT_SCHEMAS } from "../schemas";
import { randomUUID } from "../utils/randomNumber";

const db = window.indexedDB.open("swb", 1);
const waitDB = new Promise<void>((r, j) => {
  db.onerror = (event) => {
    j();
  };
  db.onsuccess = (event) => {
    r();
  };
});
waitDB.catch(() => {
  const notifications = useNotifications();
  notifications.value.push({
    uuid: randomUUID(),
    type: NotificationType.TEXT,
    title: "Error opening IndexedDB database",
    description: "An error occurred opening the IndexedDB.",
  });
});

db.onupgradeneeded = async (event) => {
  // Create object stores
  const projects = db.result.createObjectStore("projects", { keyPath: "id" });
  const assets = db.result.createObjectStore("assets", { keyPath: "id" });
  const assetsData = db.result.createObjectStore("assets-data", {
    autoIncrement: true,
  });

  // Wait for completion
  await new Promise<void>(
    (r, j) => (projects.transaction.oncomplete = () => r())
  );
  console.log("projects created");
  await new Promise<void>(
    (r, j) => (assets.transaction.oncomplete = () => r())
  );
  console.log("assets created");
  await new Promise<void>(
    (r, j) => (assetsData.transaction.oncomplete = () => r())
  );
  console.log("assets data created");
};

interface AssetMetadata extends Asset {
  dataID: number;
}

export const useProjectObjectStore = async (
  access: IDBTransactionMode | undefined = undefined
) => {
  await waitDB;
  const transaction = db.result.transaction(["projects"], access);
  return transaction.objectStore("projects");
};

export const useAssetObjectStore = async (
  access: IDBTransactionMode | undefined = undefined
) => {
  await waitDB;
  const transaction = db.result.transaction(["assets"], access);
  return transaction.objectStore("assets");
};

export const useAssetDataObjectStore = async (
  access: IDBTransactionMode | undefined = undefined
) => {
  await waitDB;
  const transaction = db.result.transaction(["assets-data"], access);
  return transaction.objectStore("assets-data");
};

export class IndexedDBStorageSource implements ProjectSource {
  id(): string {
    return "indexeddb";
  }
  name(): string {
    return "IndexedDB Storage";
  }
  description(): string {
    return "Stores project files in browser, and supports upload and saving of assets and models.";
  }
  color(): ProjectSourceColour {
    return ProjectSourceColour.BLUE;
  }
  async fetchProjects() {
    const projectStore = await useProjectObjectStore();
    const projects = projectStore.getAll();
    await new Promise<void>((r) => (projects.onsuccess = () => r()));
    const loadedProjects: PartiallyLoadedProject[] = projects.result.map(
      (e) => {
        // Cannot use Object.assign because projectSource cannot be serialized
        e.projectSource = this;
        return e;
      }
    );
    return loadedProjects;
  }
  async saveProject(project: FullyLoadedProject) {
    const projectStore = await useProjectObjectStore("readwrite");
    const saved = JSON.parse(
      JSON.stringify(
        Object.assign({}, project, {
          projectSource: project.projectSource.id(),
        })
      )
    );
    const transaction = projectStore.put(saved);
    await new Promise<void>((r) => (transaction.onsuccess = () => r()));
    return true;
  }
  async loadProject(id: string) {
    const projectStore = await useProjectObjectStore();
    const project = projectStore.get(id);
    await new Promise<void>((r) => (project.onsuccess = () => r()));
    project.result.projectSource = this;
    return project.result;
  }
  newProject(name: string) {
    return new Promise<string>(async (resolve, reject) => {
      const projectStore = await useProjectObjectStore("readwrite");
      const projectID = randomUUID();
      const project: FullyLoadedProject | { projectSource: string } = {
        id: projectID.toString(),
        name: name,
        schemas: DEFAULT_SCHEMAS,
        files: {},
        version: { major: 1, minor: 0, patch: 0 },
        projectSource: this.id(),
        modinfo: {},
      };
      projectStore.add(project).onerror = (e) => reject(e);
      resolve(projectID.toString());
    });
  }
  deleteProject(id: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      const projectStore = await useProjectObjectStore("readwrite");
      projectStore.delete(id).onerror = (e) => reject(false);
      resolve(true);
    });
  }
  autosaveSupported(): boolean {
    return true;
  }

  // Asset handling
  assetsSupported(): boolean {
    return true;
  }
  async fetchAssets(): Promise<Asset[]> {
    const assetStore = await useAssetObjectStore();
    const assets = assetStore.getAll();
    await new Promise<void>((r) => (assets.onsuccess = () => r()));
    const loadedAssets: AssetMetadata[] = assets.result;
    return loadedAssets;
  }
  createAsset(asset: Asset): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      const assetDataStore = await useAssetDataObjectStore("readwrite");

      const assetDataID = await new Promise<number>((resolve, reject) => {
        const transaction = assetDataStore.add(asset.data);
        transaction.onsuccess = (v) => {
          // Gave up on Typescript for this one
          //@ts-ignore
          resolve(v.target.result);
        };
        transaction.onerror = () => {
          reject();
        };
      });

      const metadata: AssetMetadata = {
        id: asset.id,
        name: asset.name,
        filename: asset.filename,
        dataID: assetDataID,
      };

      const assetStore = await useAssetObjectStore("readwrite");
      assetStore.add(metadata).onerror = () => reject(false);
      resolve(true);
    });
  }
  async loadAsset(id: string): Promise<Asset & { data: Blob }> {
    const assetStore = await useAssetObjectStore("readonly");
    const asset: AssetMetadata = await new Promise<AssetMetadata>(
      async (resolve, reject) => {
        const request = assetStore.get(id);
        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onerror = () => reject();
      }
    );

    if (!asset) {
      throw new Error("Asset not found");
    }

    const assetDataStore = await useAssetDataObjectStore("readonly");
    const blob: Blob = await new Promise<Blob>((resolve, reject) => {
      const request = assetDataStore.get(asset.dataID);
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => reject();
    });

    return { ...asset, data: blob };
  }
  updateAsset(id: string, data: Asset): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteAsset(id: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      const assetStore = await useAssetObjectStore("readwrite");
      const asset: AssetMetadata = await new Promise<AssetMetadata>(
        async (resolve, reject) => {
          const request = assetStore.get(id);
          request.onsuccess = () => {
            resolve(request.result);
          };
          request.onerror = () => reject();
        }
      );
      assetStore.delete(id).onerror = () => reject();

      const assetDataStore = await useAssetDataObjectStore("readwrite");
      assetDataStore.delete(asset.dataID).onerror = () => reject();

      resolve(true);
    });
  }
}
