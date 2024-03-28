import type { File, FullyLoadedProject } from "../project";
import type { Schema } from "../schemas";
import { VersionController, type Version } from "../versionController";

export class Exporter {
  project: Ref<FullyLoadedProject>;
  vc: Ref<VersionController>;
  schemas: Ref<{ [key: string]: Schema }>;
  constructor(
    project: Ref<FullyLoadedProject>,
    vc: Ref<VersionController>,
    schemas: Ref<{ [key: string]: Schema }>
  ) {
    this.project = project;
    this.vc = vc;
    this.schemas = schemas;
  }

  private modinfo(v: Version) {
    return `
-- Made with the Sapiens Web Builder
local modInfo = {
    name = "${this.project.value.name}",
    description = [[${
      this.project.value.modinfo.description?.replace('"', '\\"') ?? ""
    }]],
    version = "${VersionController.export(v)}",
    type = "world",
    developer = "${this.project.value.modinfo.developer ?? ""}",
    website = "${this.project.value.modinfo.website ?? ""}",
}

return modInfo`.trim();
  }

  preExport() {
    return [
      this.modinfo(this.vc.value.ephemeralApply()),
      Object.values(this.project.value.files).flat(),
    ];
  }

  export(): Array<{ filename: string; data: string }> {
    const output = [];
    this.vc.value.apply();
    this.project.value.projectSource.saveProject(this.project.value);
    output.push({
      filename: "modinfo.lua",
      data: this.modinfo(this.project.value.version),
    });
    const schemaIDLookupCache: { [key: string]: Schema } = {};
    const schemas = Object.entries(this.project.value.files)
      .map((m) => {
        return m[1].map((file) => {
          // Get schema
          let outputDir = schemaIDLookupCache[m[0]]?.exportDir;
          if (!outputDir) {
            // Find schema
            const foundSchemas = Object.entries(this.schemas.value).filter(
              (sch) => sch[1].$id == m[0]
            );
            console.log(foundSchemas[0][1]);
            if (foundSchemas.length > 0) {
              outputDir = foundSchemas[0][1].exportDir ?? m[0];
            } else {
              outputDir = m[0];
            }
          }

          this.project.value.schemas;
          return {
            filename: `hammerstone/${outputDir}/${file.id}.json`,
            data: JSON.stringify(file.value),
          };
        });
      })
      .flat();
    output.push(...schemas);
    return output;
  }
}
