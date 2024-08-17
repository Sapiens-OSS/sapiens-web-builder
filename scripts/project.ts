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

export enum PluginType {
  Generator = "generator",
  Script = "script",
}

export interface Plugin {
  id: string;
  type: PluginType;
  name: string;
  filename: string;
  code: string;
}

// Interface describing a project
export interface FullyLoadedProject extends PartiallyLoadedProject {
  // Loaded schemas (for modded schemas)
  schemas: string[];
  // Dictionary of JSON objects that are the actual project files
  // Stored by schemaID
  files: { [key: string]: Array<File> };
  // Dictionary of plugins
  // Stored by id
  plugins: { [key: string]: Plugin };
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
  Model = "model",
  Texture = "texture",
  VertexShader = "vertex",
  FragmentShader = "fragment",
  Image = "image",
  Other = "other",
}

export const AssetTypePrettyToID = Object.fromEntries(
  Object.entries(AssetType)
);
export const AssetTypeIDToPretty = Object.fromEntries(
  Object.entries(AssetType).map((e) => e.reverse())
);

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
