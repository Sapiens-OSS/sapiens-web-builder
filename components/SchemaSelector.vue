<template>
  <component :is="component" :schema="props.schema" />
</template>

<script setup lang="ts">
import { DefineComponent } from "vue";
import { Schema } from "~/scripts/schemas";
import SchemaObject from "./SchemaObject.vue";
import SchemaNotFound from "./SchemaNotFound.vue";

const props = defineProps<{
  schema: Schema;
}>();
const objects: { [key: string]: DefineComponent<{}, {}, any> } = {
  object: SchemaObject,
};
const component = objects[props.schema.type] ?? SchemaNotFound;
</script>
