import {
  FullyLoadedProject,
  PartiallyLoadedProject,
  ProjectSource,
  ProjectSourceColour,
} from "../project";
import { DEFAULT_SCHEMAS } from "../schemas";

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
    uuid: crypto.randomUUID(),
    type: NotificationType.TEXT,
    title: "Error opening IndexedDB database",
    description: "An error occurred opening the IndexedDB.",
  });
});

db.onupgradeneeded = async (event) => {
  // Create object stores
  const projects = db.result.createObjectStore("projects", { keyPath: "id" });
  const assets = db.result.createObjectStore("assets", { autoIncrement: true });

  // Wait for completion
  await new Promise<void>(
    (r, j) => (projects.transaction.oncomplete = () => r())
  );
  console.log("projects created");
  await new Promise<void>(
    (r, j) => (assets.transaction.oncomplete = () => r())
  );
  console.log("assets created");
};

export const useProjectObjectStore = async (
  access: IDBTransactionMode | undefined = undefined
) => {
  await waitDB;
  const transaction = db.result.transaction(["projects"], access);
  return transaction.objectStore("projects");
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
      const projectID = crypto.randomUUID();
      const project = {
        id: projectID.toString(),
        name: name,
        schemas: DEFAULT_SCHEMAS,
        files: {},
        projectSource: this.id(),
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
}
