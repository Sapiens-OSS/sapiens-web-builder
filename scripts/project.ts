import { LocalStorageSource } from "./localStorage/localStorageSource";
import type { Version } from "./versionController";

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
  // Version
  version: Version;
  // Icon asset ID
  icon?: string;
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
  // Project modinfo
  modinfo: ProjectModInfo;
}

export interface ProjectModInfo {
  description?: string;
  developer?: string;
  website?: string;
}

export enum ProjectSourceColour {
  ORANGE = "orange",
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

export enum AssetType {
  Model,
  Texture,
  Shader,
  Image,
  Other,
}

export const AssetTypeOptions = Object.values(AssetType).slice(0, Object.values(AssetType).length / 2) as string[];

export interface Asset {
  id: string;
  name: string;
  filename: string;
  type: AssetType;
  data?: Blob;
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

  // Assets
  abstract assetsSupported(): boolean;
  abstract fetchAssets(): Promise<Asset[]>;
  abstract createAsset(asset: Asset): Promise<boolean>;
  abstract loadAsset(id: string): Promise<Asset & { data: Blob }>;
  abstract updateAsset(id: string, data: Asset): Promise<boolean>;
  abstract deleteAsset(id: string): Promise<boolean>;
}

export const PROJECT_SOURCES: ProjectSource[] = [];

export function fetchProjects(): Promise<PartiallyLoadedProject[]>[] {
  return PROJECT_SOURCES.map((e) => e.fetchProjects());
}
