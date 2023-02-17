<template>
  <SearchableLayout
    :values="materials"
    :structure="structure"
    v-slot="slotProps"
  >
    <h1>{{ slotProps.selected }}</h1>
  </SearchableLayout>
</template>

<script setup>
import { useMod, modStructure } from "~~/composables/shared";

const mod = await useMod();
const materials = mod.value[4];
const structure = {
  name: "name",
  tag: "tag",
  icon: "icon",
};
</script>
