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
  files: { [key: string]: Array<File> };
}

export enum ProjectSourceColour {
  ORANGE = "orange",
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

// Class defining a source for projects (eg GitHub, local storage)
export abstract class ProjectSource {
  // Lookup project source by id
  abstract id(): string;
  // Name of project source (eg "Local", "GitHub")
  abstract name(): string;
  // Description of project source
  abstract description(): string;
  // Tag styles
  abstract color(): ProjectSourceColour;
  // Fetch array of project IDs
  abstract fetchProjects(): Promise<PartiallyLoadedProject[]>;
  // Save project
  abstract saveProject(project: FullyLoadedProject): Promise<boolean>;
  // Load project from ID
  abstract loadProject(id: string): Promise<FullyLoadedProject>;
  // Creates new projet
  abstract newProject(name: string): Promise<string>;
  // Deletes project
  abstract deleteProject(id: string): Promise<boolean>;
  // Supports autosave
  abstract autosaveSupported(): boolean;
}

export const PROJECT_SOURCES: ProjectSource[] = [];

export function fetchProjects(): Promise<PartiallyLoadedProject[]>[] {
  return PROJECT_SOURCES.map((e) => e.fetchProjects());
}