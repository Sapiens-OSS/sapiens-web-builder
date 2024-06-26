import type { AssetType } from "@nuxt/devtools/dist/types";

export const DEFAULT_SCHEMAS = [
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/shared.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/object.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/storage.schema.json",
];

export interface Schema extends ObjectSchema {
  __url: string;
  $id: string;
  title: string;
  description: string;
  exportDir?: string;
}

type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>

export type SchemaProperties = { [key: string]: UniversalSchemaType };
export type UniversalSchemaType = ObjectSchema | ArraySchema | NumberSchema | StringSchema | RemapSchema;

export interface BaseSchemaProperties {
  description?: string,
  title?: string,
  name?: string,
  examples?: string[],
}

export interface ObjectSchema extends BaseSchemaProperties {
  type: "object",
  properties: SchemaProperties,
  required?: string[],
}

export type ArraySchema = RequireField<ArraySchemaNoRequire, "properties" | "items">;

export interface ArraySchemaNoRequire extends BaseSchemaProperties {
  type: "array",
  items?: UniversalSchemaType,
  properties?: UniversalSchemaType,
  min?: number,
  max?: number,
  minimum?: number,
  maximum?: number,
}

export interface NumberSchema extends BaseSchemaProperties {
  type: "number" | "integer",
  default?: number,
  min?: number,
  max?: number,
  minimum?: number,
  maximum?: number,
}

export interface StringSchema extends BaseSchemaProperties {
  type: "string",
  enum?: string[],
  default?: string,
  _swb_asset_type?: string;
}

export interface RemapSchema extends BaseSchemaProperties {
  type: "remap",
}

export interface BooleanSchema extends BaseSchemaProperties {
  type: "boolean",
  default?: boolean,
}