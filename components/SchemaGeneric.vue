<template>
  <SchemaGroup
    v-if="element.properties"
    :schema="element"
    :level="props.level + 1"
    :target="element._target"
  />
  <SchemaArray
    v-else-if="element.type == 'array'"
    :schema="element"
    :target="element._target"
  />
  <SchemaBoolean
    v-else-if="element.type == 'boolean'"
    :schema="element"
    :target="element._target"
  />
  <SchemaString
    v-else-if="element.type == 'string'"
    :schema="element"
    :target="element._target"
  />
  <SchemaNumber
    v-else-if="element.type == 'number' || element.type == 'integer'"
    :schema="element"
    :target="element._target"
  />
  <SchemaRemap
    v-else-if="element.type == 'remap'"
    :schema="element"
    :target="element._target"
  />
  <SchemaUnknown v-else :schema="element" />
</template>

<script setup>
const props = defineProps(["element", "level"]);
const element = computed(() => props.element);
</script>
