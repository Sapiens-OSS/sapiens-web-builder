<template>
  <div class="px-4 sm:px-6 lg:px-8 py-10 w-full">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1
          class="text-base font-semibold leading-6 text-zinc-100 flex items-center gap-x-1"
        >
          <PuzzlePieceIcon class="w-5 h-5" /> Plugins
        </h1>
        <p class="mt-2 text-sm text-zinc-400">
          Plugins allow you to extend your mod's functionality with JavaScript.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          @click="() => (createPluginModal = true)"
          class="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          New plugin
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <ul
            role="list"
            class="divide-y divide-gray-700 overflow-hidden bg-zinc-800 shadow-sm ring-1 ring-gray-100/5 sm:rounded-xl"
          >
            <li
              v-for="plugin in project.plugins"
              :key="plugin.id"
              class="transition relative flex justify-between gap-x-6 px-4 py-5 hover:bg-zinc-900/40 sm:px-6"
            >
              <div class="flex min-w-0 gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-zinc-100">
                    <button
                      class="flex items-center gap-x-1"
                      @click="() => select(plugin.id)"
                    >
                      <span class="absolute inset-x-0 -top-px bottom-0" />
                      {{ plugin.name }}
                    </button>
                  </p>
                  <nav class="flex mt-1" aria-label="Breadcrumb">
                    <ol role="list" class="flex items-center">
                      <li>
                        <div>
                          <NuxtLink
                            href="../."
                            class="text-gray-400 hover:text-gray-500"
                          >
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
                        ]"
                        :key="page"
                      >
                        <div class="flex items-center">
                          <svg
                            class="h-4 w-4 flex-shrink-0 text-zinc-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
                            />
                          </svg>
                          <p class="text-sm font-medium text-zinc-400">
                            {{ page }}
                          </p>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-x-4">
                <ChevronRightIcon
                  class="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CreatePluginModal v-model="createPluginModal" />
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon, PuzzlePieceIcon } from "@heroicons/vue/24/outline";
import { pluginPrettyNames } from "~/scripts/plugins/strings";
import type { FullyLoadedProject } from "~/scripts/project";

const router = useRouter();
const route = useRoute();

const createPluginModal = ref(false);

function select(id: string) {
  router.push({
    name: "projects-projectid-plugins-editor-id",
    params: Object.assign({}, route.params, { id }),
  });
}

const project = useState<FullyLoadedProject>("project");
</script>
