import { FullyLoadedProject } from "./project";

export class Autosaver {
  private project: FullyLoadedProject;
  private timeout: NodeJS.Timeout | null = null;
  private autosavingRef: Ref<boolean> = ref(false);

  constructor(project: FullyLoadedProject) {
    this.project = project;
  }

  autosaveEnabled() {
    this.project.projectSource.autosaveSupported();
  }

  autosaving() {
    return this.autosavingRef;
  }

  change() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    console.log(this.autosavingRef);
    // These refs are unwrapped for some reason so we have to assign them directly and ignore TS
    //@ts-ignore
    this.autosavingRef = true;
    this.timeout = setTimeout(() => {
      this.timeout = null;
      //@ts-ignore
      this.autosavingRef = false;
      this.project.projectSource.saveProject(this.project);
    }, 500);
  }
}
