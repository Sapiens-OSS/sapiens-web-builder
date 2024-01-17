<template>
  <div class="p-4">
    <SchemaSelector
      v-if="schema && config"
      :schema="schema"
      :required="true"
      v-model="config.value"
    />
  </div>
</template>

<script setup lang="ts">
import { type WritableComputedRef } from "vue";
import { type FullyLoadedProject, type File } from "~/scripts/project";
import { type Schema } from "~/scripts/schemas";
import type { VersionController } from "~/scripts/versionController";

const project: Ref<FullyLoadedProject> = useState("project");
const schemas: Ref<{ [key: string]: Schema }> = useState("schemas");
const notifications = useNotifications();
const route = useRoute();
const versionController = useState<VersionController>("vc");

// Hook this config up
const config: WritableComputedRef<File | null> = computed({
  get() {
    if (!project.value) return null;
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
      versionController.value.CDConfig();
    } else {
      project.value.files[route.params.schemaid.toString()][configIndex] = v;
      versionController.value.UConfig();
    }
  },
});

if (config.value == null) {
  navigateTo({
    name: "projects-projectid-editor-schemaid",
    params: route.params,
  });
}

const schemaID = route.params.schemaid.toString();
// Doesn't have to be computed
const schema = Object.entries(schemas.value)
  .filter((e) => e[1].$id == schemaID)
  ?.at(0)
  ?.at(1) as Schema | null;
</script>
