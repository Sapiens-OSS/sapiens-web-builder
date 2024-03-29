import type { ObjectSchema, Schema, SchemaProperties, UniversalSchemaType } from "../schemas";
import { validSchemaEditors } from "../schemaEditor";

type NotObjectSchema = Exclude<UniversalSchemaType, ObjectSchema>;
const validSchemaTypes = Object.keys(validSchemaEditors);

function isValid(schema: Partial<NotObjectSchema>): boolean {
    if (schema.type === undefined) {
        return false;
    }
    if (!validSchemaTypes.includes(schema.type)) {
        return false;
    }
    return true;
}

export function validateSchema(schema: Partial<ObjectSchema>, path?: string): [number, number] {
    let successful = 0;
    let max = 0;

    if (schema.properties === undefined) {
        console.log(`${path ?? '.'} is invalid (missing properties)`);
        return [0, 1];
    }

    const entries = Object.entries(schema.properties);
    entries.forEach((entry) => {
        if (entry[1].type == 'object') {
            const [s, m] = validateSchema(entry[1], path ? `${path}.${entry[0]}` : entry[0]);
            successful += s;
            max += m;
            return;
        }
        max++;
        if (isValid(entry[1])) {
            successful++;
        } else {
            console.log(`${path ?? '.'} is invalid`);
        }
    })

    return [successful, max];
}