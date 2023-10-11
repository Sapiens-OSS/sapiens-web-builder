export const DEFAULT_SCHEMAS = [
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/updating-schemas/schemas/shared.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/updating-schemas/schemas/object.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/updating-schemas/schemas/storage.schema.json",
];

export interface Schema {
  __url: string;
  $id: string;
  title: string;
  description: string;
  properties: any;
}