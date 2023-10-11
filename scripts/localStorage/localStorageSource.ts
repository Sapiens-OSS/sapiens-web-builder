import {
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
  name(): string {
    return "Local Storage";
  }
  description(): string {
    return "Stores project files using the storage within the browser. Cannot copy between computers, or easily shared.";
  }
  color(): ProjectSourceColour {
    return ProjectSourceColour.ORANGE;
  }
  fetchProjects(): PartiallyLoadedProject[] {
    const projectIDs = searchBucket(BUCKET_NAME);
    const projects = projectIDs
      .map((e) => e.split(".").at(-1) ?? "")
      .map((e) => this.loadProject(e));
    // Fetch document ID, without bucket ID
    return projects;
  }
  newProject(name: string): string {
    const projectID = crypto.randomUUID();
    const project: FullyLoadedProject = {
      id: projectID.toString(),
      name: name,
      schemas: DEFAULT_SCHEMAS,
      files: [],
      projectSource: this,
    };
    this.saveProject(project);
    return project.id;
  }
  saveProject(project: FullyLoadedProject): void {
    createOrSetDocument(
      BUCKET_NAME,
      project.id,
      JSON.stringify(project, (k, v) => (k == "projectSource" ? undefined : v))
    );
  }
  loadProject(id: string): FullyLoadedProject {
    const document = getOrDefaultDocument(BUCKET_NAME, id, null);
    if (document == null) {
      return {
        id: "INVALID_ID",
        name: "INVALID PROJECT ID",
        files: [],
        schemas: [],
        projectSource: this,
      };
    }
    const assign: { projectSource: ProjectSource } = { projectSource: this };
    return Object.assign(JSON.parse(document), assign);
  }
  deleteProject(id: string): void {
    deleteDocument(BUCKET_NAME, id);
  }

  // This is quick enough that we can auto-save
  autosaveSupported(): boolean {
    return true;
  }
}
