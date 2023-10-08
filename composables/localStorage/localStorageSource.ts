import { Project, ProjectSource } from "../project";
import { createOrSetDocument, getOrDefaultDocument, searchBucket } from "./storageHandler";

export const BUCKET_NAME = "projects";

export class LocalStorageSource implements ProjectSource {
  name(): string {
    return "local-storage";
  }
  fetchProjects(): string[] {
    const projects = searchBucket(BUCKET_NAME);
    // Fetch document ID, without bucket ID
    return projects.map((e) => `LS${e.split(".").at(-1)}`);
  }
  saveProject(project: Project): void {
    createOrSetDocument(BUCKET_NAME, project.id, JSON.stringify(project));
  }
  loadProject(id: string): Project {
    const document = getOrDefaultDocument(BUCKET_NAME, id, null);
    if(document == null){
        return {
            id: "INVALID_ID",
            files: [],
            schemas: [],
            projectSource: this,
        }
    }
    return JSON.parse(document);
  }

  // This is quick enough that we can auto-save
  autosaveSupported(): boolean {
    return true;
  }
}
