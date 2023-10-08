// Interface describing a project
export interface Project {
  // Project ID (global)
  id: string;
  // Loaded schemas (for modded schemas)
  schemas: string[];
  // Dictionary of JSON objects that are the actual project files
  files: { [key: string]: any };
  // Project source to save/load from
  projectSource: ProjectSource;
}

// Class defining a source for projects (eg GitHub, local storage)
export abstract class ProjectSource {
  // Name of project source (eg "Local", "GitHub")
  abstract name(): string;
  // Fetch array of project IDs
  abstract fetchProjects(): string[];
  // Save project
  abstract saveProject(project: Project): void;
  // Load project from ID
  abstract loadProject(id: string): Project;
  // Supports autosave
  abstract autosaveSupported(): boolean;
}

export const useProjectSources = () => useState<ProjectSource[]>('projectSources', () => []);