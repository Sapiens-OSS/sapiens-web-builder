import type { FullyLoadedProject } from "../project";
import { VersionController, type Version } from "../versionController";

export class Exporter {
  project: Ref<FullyLoadedProject>;
  vc: Ref<VersionController>;
  constructor(project: Ref<FullyLoadedProject>, vc: Ref<VersionController>) {
    this.project = project;
    this.vc = vc;
  }

  private modinfo(v: Version) {
    return `
-- Made with the Sapiens Web Builder
local modInfo = {
    name = "${this.project.value.name}",
    description = "${
      this.project.value.modinfo.description?.replace('"', '\\"') ?? ""
    }",
    version = "${VersionController.export(v)}",
    type = "world",
    developer = "${this.project.value.modinfo.developer ?? ""}",
    website = "${this.project.value.modinfo.website ?? ""}",
}

return modInfo`.trim();
  }

  preExport() {
    console.log(Object.values(this.project.value.files).flat()[0]);
    return [
      this.modinfo(this.vc.value.ephemeralApply()),
      Object.values(this.project.value.files).flat(),
    ];
  }

  export(): Array<{ filename: string; data: string }> {
    const output = [];
    this.vc.value.apply();
    output.push({
      filename: "modinfo.lua",
      data: this.modinfo(this.project.value.version),
    });
    const schemas = Object.values(this.project.value.files)
      .flat()
      .map((e) => ({
        filename: `hammerstone/${e.id}.json`,
        data: JSON.stringify(e.value),
      }));
    output.push(...schemas);
    return output;
  }
}
