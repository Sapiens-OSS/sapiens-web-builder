<template>
  <component
    :is="component"
    :schema="props.schema"
    :required="props.required"
    v-model="model"
    :element-config="props.elementConfig"
  />
</template>

<script setup lang="ts">
import {
  type ObjectSchema,
  type Schema,
  type UniversalSchemaType,
} from "~/scripts/schemas";
import SchemaNotFound from "./SchemaNotFound.vue";
import { type SchemaEditor, validSchemaEditors } from "~/scripts/schemaEditor";

const props = defineProps<{
  schema: UniversalSchemaType;
  modelValue: any;
  elementConfig?: any;
  required: boolean | undefined;
}>();

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const figureOutComponentType: (schema: any) => SchemaEditor | null = (
  schema: any
) => {
  if (validSchemaEditors[props.schema.type]) return validSchemaEditors[props.schema.type];
  return null;
};

const component = figureOutComponentType(props.schema) ?? SchemaNotFound;
</script>
