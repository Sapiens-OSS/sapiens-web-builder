import type { FullyLoadedProject } from "../project";

export class Exporter {
    project: FullyLoadedProject;
    constructor(project: FullyLoadedProject){
        this.project = project;
    }

    preExport(){
        return []
    }

    export() {

    }
}