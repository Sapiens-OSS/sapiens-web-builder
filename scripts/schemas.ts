export const DEFAULT_SCHEMAS = [
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/shared.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/object.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/storage.schema.json",
];

export interface Schema {
  __url: string;
  $id: string;
  title: string;
  description: string;
  properties: any;
  type: string;
}
