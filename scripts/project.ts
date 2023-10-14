import { LocalStorageSource } from "./localStorage/localStorageSource";

export interface File {
  id: string;
  name: string;
  value: any;
}

export interface PartiallyLoadedProject {
  // Project ID (global)
  id: string;
  // Project Name
  name: string;
  // Project source to save/load from
  projectSource: ProjectSource;
}

// Interface describing a project
export interface FullyLoadedProject extends PartiallyLoadedProject {
  // Loaded schemas (for modded schemas)
  schemas: string[];
  // Dictionary of JSON objects that are the actual project files
  // Stored by schemaID
  files: { [key: string]: File[] };
}

export enum ProjectSourceColour {
  ORANGE = "orange",
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

// Class defining a source for projects (eg GitHub, local storage)
export abstract class ProjectSource {
  // Name of project source (eg "Local", "GitHub")
  abstract name(): string;
  // Description of project source
  abstract description(): string;
  // Tag styles
  abstract color(): ProjectSourceColour;
  // Fetch array of project IDs
  abstract fetchProjects(): PartiallyLoadedProject[];
  // Save project
  abstract saveProject(project: FullyLoadedProject): void;
  // Load project from ID
  abstract loadProject(id: string): FullyLoadedProject;
  // Creates new projet
  abstract newProject(name: string): string;
  // Deletes project
  abstract deleteProject(id: string): void;
  // Supports autosave
  abstract autosaveSupported(): boolean;
}

export const PROJECT_SOURCES: ProjectSource[] = [];

export function fetchProjects(): PartiallyLoadedProject[] {
  return PROJECT_SOURCES.map((e) => e.fetchProjects()).flat();
}