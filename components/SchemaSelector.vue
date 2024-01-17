<template>
  <component
    :is="component"
    :schema="props.schema"
    v-model="model"
    :element-config="props.elementConfig"
  />
</template>

<script setup lang="ts">
import { type Schema } from "~/scripts/schemas";
import SchemaObject from "./SchemaObject.vue";
import SchemaNotFound from "./SchemaNotFound.vue";
import SchemaArray from "./SchemaArray.vue";
import SchemaString from "./SchemaString.vue";
import SchemaNumber from "./SchemaNumber.vue";
import SchemaBoolean from "./SchemaBoolean.vue";
import SchemaTable from "./SchemaTable.vue";

const props = defineProps<{
  schema: Schema;
  modelValue: any;
  elementConfig?: any;
}>();

const emit = defineEmits(["update:modelValue"]);

type SchemaEditor =
  | typeof SchemaObject
  | typeof SchemaArray
  | typeof SchemaString
  | typeof SchemaNumber
  | typeof SchemaBoolean
  | typeof SchemaTable;

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const objects: { [key: string]: SchemaEditor } = {
  object: SchemaObject,
  array: SchemaArray,
  string: SchemaString,
  number: SchemaNumber,
  integer: SchemaNumber,
  boolean: SchemaBoolean,
  remap: SchemaTable,
  table: SchemaTable,
};

const figureOutComponentType: (schema: any) => SchemaEditor | null = (
  schema: any
) => {
  if (objects[props.schema.type]) return objects[props.schema.type];
  if (props.schema.properties) return objects.object;
  return null;
};

const component = figureOutComponentType(props.schema) ?? SchemaNotFound;
</script>
