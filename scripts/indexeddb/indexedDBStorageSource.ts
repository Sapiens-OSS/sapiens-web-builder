import {
  FullyLoadedProject,
  PartiallyLoadedProject,
  ProjectSource,
  ProjectSourceColour,
} from "../project";

export class IndexedDBStorageSource implements ProjectSource {
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
    return [];
  }
  async saveProject(project: FullyLoadedProject) {
    return false;
  }
  loadProject(id: string) {
    return new Promise<FullyLoadedProject>((resolve, reject) => {
      reject();
    });
  }
  newProject(name: string) {
    return new Promise<string>((resolve, reject) => {
      reject();
    });
  }
  deleteProject(id: string) {
    return new Promise<boolean>((resolve, reject) => {
      reject();
    });
  }
  autosaveSupported(): boolean {
    return true;
  }
}
