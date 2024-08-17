<template>
  <div class="flex flex-col w-full">
    <div class="w-full flex flex-row items-center justify-between px-4 py-3">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-1">
          <li>
            <div>
              <NuxtLink href="../." class="text-gray-400 hover:text-gray-500">
                <PuzzlePieceIcon
                  class="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span class="sr-only">Home</span>
              </NuxtLink>
            </div>
          </li>
          <li
            v-for="page in [
              pluginPrettyNames[plugin.type],
              plugin.filename,
              plugin.name,
            ]"
            :key="page"
          >
            <div class="flex items-center">
              <svg
                class="h-5 w-5 flex-shrink-0 text-zinc-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <p class="ml-1 text-sm font-medium text-zinc-400">
                {{ page }}
              </p>
            </div>
          </li>
        </ol>
      </nav>
      <button
        @click="() => deleteMe()"
        type="button"
        class="transition inline-flex items-center gap-x-1.5 rounded-md ring-1 ring-red-600 text-red-600 px-1.5 py-1.5 text-sm font-semibold shadow-sm hover:bg-red-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <TrashIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
    <MonacoEditor
      class="code-editor hidden sm:flex bg-transparent grow h-screen z-[0] py-2"
      lang="typescript"
      v-model="value"
      :options="{ theme: 'swb' }"
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
import {
  ArrowLeftIcon,
  PuzzlePieceIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";
import * as monaco from "monaco-editor";
import { compileJavascript } from "~/scripts/plugins/compile";

import { imports, pluginPrettyNames } from "~/scripts/plugins/strings";
monaco.languages.typescript.typescriptDefaults.addExtraLib(
  imports,
  "index.d.ts"
);
monaco.editor.defineTheme("swb", {
  base: "vs-dark",
  inherit: true,
  colors: {
    "editor.background": "#18181b",
  },
  rules: [],
});

import type { FullyLoadedProject } from "~/scripts/project";
const value = ref("");

const route = useRoute();
const router = useRouter();
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

function deleteMe() {
  delete project.value.plugins[plugin.value.id];
  router.push("../.");
}
</script>
