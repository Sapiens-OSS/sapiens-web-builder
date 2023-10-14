<template>
  <h1>{{ config }}</h1>
</template>

<script setup lang="ts">
import { WritableComputedRef } from "vue";
import { FullyLoadedProject, File } from "~/scripts/project";

const project: Ref<FullyLoadedProject> = useState("project");
const route = useRoute();

console.log(project.value);

// Hook this config up
const config: WritableComputedRef<File | null> = computed({
  get() {
    const files = project.value.files[route.params.schemaid.toString()];
    if (!files) {
      console.log("files invalid");
      return null;
    }
    const configIndex =
      files.findIndex((e) => e.id == route.params.configid.toString()) ?? -1;
    if (configIndex == -1) {
      console.log("config index invalid");
      return null;
    }
    return files[configIndex];
  },
  set(v) {
    // Skip checks because we shouldn't be here if we need them
    const configIndex =
      project.value.files[route.params.schemaid.toString()].findIndex(
        (e) => e.id == route.params.configid.toString()
      ) ?? -1;
    if (v == null) {
      // Delete entry
      project.value.files[route.params.schemaid.toString()].splice(
        configIndex,
        1
      );
    } else {
      project.value.files[route.params.schemaid.toString()][configIndex] = v;
    }
  },
});

if (config.value == null) {
  navigateTo({
    name: "projects-projectid-editor-schemaid",
    params: route.params,
  });
}

console.log(config.value);
</script>
