import {
  Asset,
  FullyLoadedProject,
  PartiallyLoadedProject,
  ProjectSource,
  ProjectSourceColour,
} from "../project";
import { DEFAULT_SCHEMAS } from "../schemas";
import {
  createOrSetDocument,
  deleteDocument,
  getOrDefaultDocument,
  searchBucket,
} from "./storageHandler";

export const BUCKET_NAME = "projects";

export class LocalStorageSource implements ProjectSource {
  id(): string {
    return "localstorage";
  }
  name(): string {
    return "Local Storage";
  }
  description(): string {
    return "Stores project files using the storage within the browser. Cannot copy between computers, or easily shared.";
  }
  color(): ProjectSourceColour {
    return ProjectSourceColour.ORANGE;
  }
  async fetchProjects() {
    const projectIDs = searchBucket(BUCKET_NAME);
    const projects = await Promise.allSettled(
      projectIDs
        .map((e) => e.split(".").at(-1) ?? "")
        .map((e) => this.loadProject(e))
    );
    // Fetch document ID, without bucket ID
    return projects
      .filter((e): e is PromiseFulfilledResult<PartiallyLoadedProject> => true)
      .map((e) => e.value);
  }
  async newProject(name: string) {
    const projectID = crypto.randomUUID();
    const project: FullyLoadedProject = {
      id: projectID.toString(),
      name: name,
      schemas: DEFAULT_SCHEMAS,
      files: {},
      projectSource: this,
    };
    this.saveProject(project);
    return project.id;
  }
  async saveProject(project: FullyLoadedProject) {
    createOrSetDocument(
      BUCKET_NAME,
      project.id,
      JSON.stringify(project, (k, v) => (k == "projectSource" ? undefined : v))
    );
    return true;
  }
  async loadProject(id: string) {
    const document = getOrDefaultDocument(BUCKET_NAME, id, null);
    if (document == null) {
      return {
        id: "INVALID_ID",
        name: "INVALID PROJECT ID",
        files: {},
        schemas: [],
        projectSource: this,
      };
    }
    const assign: { projectSource: ProjectSource } = { projectSource: this };
    return Object.assign(JSON.parse(document), assign);
  }
  async deleteProject(id: string) {
    deleteDocument(BUCKET_NAME, id);
    return true;
  }

  // This is quick enough that we can auto-save
  autosaveSupported(): boolean {
    return true;
  }

  assetsSupported(): boolean {
    return false;
  }
  fetchAssets(): Promise<Asset[]> {
    throw new Error("Method not implemented.");
  }
  createAsset(asset: Asset): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  loadAsset(id: string): Promise<Asset & { data: Blob }> {
    throw new Error("Method not implemented.");
  }
  updateAsset(id: string, data: Blob): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteAsset(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
