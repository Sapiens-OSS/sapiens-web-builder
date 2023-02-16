<template>
  <SearchableBar :values="materials" :structure="structure" v-slot="slotProps">
    <h1>{{ slotProps.selected }}</h1>
  </SearchableBar>
</template>

<script setup>
import { useMod, modStructure } from "~~/composables/shared";

const mod = await useMod();
const materials = mod.value[1];
const structure = {
  name: "name",
  tag: "tag",
  icon: "icon",
};
</script>
