<template>
  <div class="flex flex-col w-full">
    <div class="w-full flex flex-row items-center px-2 py-1">
      <NuxtLink
        href="../."
        class="transition text-gray-400 p-2 rounded-lg hover:bg-gray-600 hover:text-gray-100"
        ><ArrowLeftIcon class="w-5 h-5"
      /></NuxtLink>

      <div class="ml-4 flex items-center gap-x-2">
        <PuzzlePieceIcon class="text-zinc-300 w-5 h-5" />
        <div class="flex flex-col">
          <p class="text-zinc-300 font-mono">{{ plugin.name }}</p>
          <p class="text-xs text-zinc-400 -mt-2">{{ plugin.type }}</p>
        </div>
        <p class="text-sm text-zinc-400 mt-1">({{ plugin.filename }})</p>
      </div>
    </div>
    <MonacoEditor
      class="hidden sm:flex bg-transparent grow h-screen z-[0] py-2"
      lang="typescript"
      v-model="value"
      :options="{ theme: 'vs-dark' }"
    />
    <div class="block sm:hidden my-12 lg:place-self-center mx-auto w-11/12">
      <h1
        class="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
      >
        Plugin editing not supported on mobile.
      </h1>
      <p class="mt-6 text-base leading-7 text-zinc-400">
        Unfortunately, you cannot edit plugins while on a mobile device.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon, PuzzlePieceIcon } from "@heroicons/vue/24/outline";
import * as monaco from "monaco-editor";
import { compileJavascript } from "~/scripts/plugin/compile";

import { imports } from "~/scripts/plugin/strings";
monaco.languages.typescript.typescriptDefaults.addExtraLib(
  imports,
  "index.d.ts"
);

import type { FullyLoadedProject } from "~/scripts/project";
const value = ref("");

const route = useRoute();
const pluginId = route.params.id.toString();

const project = useState<FullyLoadedProject>("project");
const pluginKey = Object.entries(project.value.plugins).find(
  (e) => e[1].id === pluginId
)?.[0];
if (pluginKey === undefined) throw new Error("Cannot find plugin with ID");
const plugin = computed({
  get() {
    return project.value.plugins[pluginKey];
  },
  set(v) {
    project.value.plugins[pluginKey] = v;
  },
});

value.value = plugin.value.code;

watch(value, (v) => {
  plugin.value.code = v;
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    project.value.projectSource.saveProject(project.value);
  }
});
</script>
