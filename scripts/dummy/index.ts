import {
  FullyLoadedProject,
  PROJECT_SOURCES,
  PartiallyLoadedProject,
  ProjectSource,
  ProjectSourceColour,
} from "../project";

export class DummyStorage implements ProjectSource {
  name(): string {
    return "Dummy Storage";
  }
  description(): string {
    return "Dummy storage. Not implemented.";
  }
  color(): ProjectSourceColour {
    return ProjectSourceColour.ORANGE;
  }
  fetchProjects(): PartiallyLoadedProject[] {
    return [];
  }
  saveProject(project: FullyLoadedProject): void {}
  loadProject(id: string): FullyLoadedProject {
    throw new Error("Cannot load project from dummy storage");
  }
  newProject(name: string): string {
    throw new Error("Cannot create dummy project.");
  }
  deleteProject(id: string): void {
    throw new Error("Cannot delete dummy project.");
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
