
import SchemaObject from "~/components/SchemaObject.vue";
import SchemaArray from "~/components/SchemaArray.vue";
import SchemaString from "~/components/SchemaString.vue";
import SchemaNumber from "~/components/SchemaNumber.vue";
import SchemaBoolean from "~/components/SchemaBoolean.vue";
import SchemaTable from "~/components/SchemaTable.vue";

export type SchemaEditor =
    | typeof SchemaObject
    | typeof SchemaArray
    | typeof SchemaString
    | typeof SchemaNumber
    | typeof SchemaBoolean
    | typeof SchemaTable;

export const validSchemaEditors: { [key: string]: SchemaEditor } = {
    object: SchemaObject,
    array: SchemaArray,
    string: SchemaString,
    number: SchemaNumber,
    integer: SchemaNumber,
    boolean: SchemaBoolean,
    remap: SchemaTable,
    table: SchemaTable,
};
