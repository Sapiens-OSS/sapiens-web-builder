import {
  FullyLoadedProject,
  PROJECT_SOURCES,
  PartiallyLoadedProject,
  ProjectSource,
  ProjectSourceColour,
} from "../project";

export class DummyStorage implements ProjectSource {
  id(): string {
    return "dummy";
  }
  name(): string {
    return "Dummy Storage";
  }
  description(): string {
    return "Dummy storage. Not implemented.";
  }
  color(): ProjectSourceColour {
    return ProjectSourceColour.ORANGE;
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
    return false;
  }
}

export const dummyStorage: DummyStorage = new DummyStorage();

export function LoadDummyStorage() {
  if (!PROJECT_SOURCES.includes(dummyStorage))
    PROJECT_SOURCES.push(dummyStorage);
}
