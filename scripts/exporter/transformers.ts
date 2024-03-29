import type JSZip from "jszip";
import type { Schema, UniversalSchemaType } from "../schemas";

export abstract class ExportTransformer {
    abstract preHook(zip: JSZip): Promise<void>;
    abstract transform<T>(rootSchema: Schema, schema: UniversalSchemaType, data?: T): T | undefined;
    abstract postHook(zip: JSZip): Promise<void>;
}