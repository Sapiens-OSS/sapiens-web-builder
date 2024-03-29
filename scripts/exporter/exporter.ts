import type { File, FullyLoadedProject } from "../project";
import type { Schema, UniversalSchemaType } from "../schemas";
import { VersionController, type Version } from "../versionController";
import JSZip from "jszip";
import { type ExportTransformer } from "./transformers";

export class Exporter {
  project: Ref<FullyLoadedProject>;
  vc: Ref<VersionController>;
  schemas: Ref<{ [key: string]: Schema }>;
  transformers: ExportTransformer[] = [];

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
    description = [[${this.project.value.modinfo.description?.replace('"', '\\"') ?? ""
      }]],
    version = "${VersionController.export(v)}",
    type = "world",
    developer = "${this.project.value.modinfo.developer ?? ""}",
    website = "${this.project.value.modinfo.website ?? ""}",
}

return modInfo`.trim();
  }

  exportGraphics() {
    return [
      this.modinfo(this.vc.value.ephemeralApply()),
      Object.values(this.project.value.files).flat(),
    ];
  }

  private recursiveTransformData<T>(rootSchema: Schema, schema: UniversalSchemaType, data?: T): T | undefined {
    if (schema.type === 'object') {
      const typedData = data as { [key: string]: any };
      Object.entries(schema.properties).forEach((([key, localSchema]) => {
        typedData[key] = this.recursiveTransformData(rootSchema, localSchema, typedData[key]);
      }));
      return typedData as T;
    }
    if (schema.type === 'array') {
      const typedData = data as any[];
      typedData.forEach((_, index) => {
        typedData[index] = this.recursiveTransformData(rootSchema, schema.items ?? schema.properties, typedData[index]);
      });
      return typedData as T;
    }
    this.transformers.forEach((transformer) => {
      data = transformer.transform(rootSchema, schema, data);
    });

    return data;
  }

  private exportSchemas(): Array<{ filename: string; data: string }> {
    const output = [];
    const schemaIDLookupCache: { [key: string]: Schema } = {};
    const schemas = Object.entries(this.project.value.files)
      .map((m) => {
        return m[1].map((file) => {
          // Get schema
          let schema = schemaIDLookupCache[m[0]]
          if (!schema) {
            // Find schema
            const foundSchemas = Object.entries(this.schemas.value).filter(
              (sch) => sch[1].$id == m[0]
            );
            if (foundSchemas.length > 0) {
              schema = foundSchemas[0][1];
            }
          }

          let outputDir = schema?.exportDir ?? m[0];
          let data = file.value;

          if (schema) {
            data = this.recursiveTransformData(schema, schema, data);
          }

          console.log(data);

          return {
            filename: `hammerstone/${outputDir}/${file.id}.json`,
            data: JSON.stringify(data),
          };
        });
      })
      .flat();
    output.push(...schemas);
    return output;
  }

  async generateExportZip() {
    const files: { [key: string]: Blob } = {};
    this.project.value.projectSource.saveProject(this.project.value);
    files["modinfo.lua"] = new Blob([this.modinfo(this.project.value.version)]);
    this.exportSchemas().forEach((file) => {
      files[file.filename] = new Blob([file.data]);
    });

    const zip = new JSZip();
    Object.entries(files).forEach((([filename, blob]) => {
      zip.file(filename, blob);
    }))

    this.transformers.forEach((transformer) => {
      transformer.postHook(zip);
    })


    return await zip.generateAsync({ type: "blob" });
  }
}
