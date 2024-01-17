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
  | typeof SchemaBoolean;

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

// Not sure for what type to use, so we disable type checking with 'any'
const objects: { [key: string]: any } = {
  object: SchemaObject,
  array: SchemaArray,
  string: SchemaString,
  number: SchemaNumber,
  integer: SchemaNumber,
  boolean: SchemaBoolean,

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
