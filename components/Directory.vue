<template>
  <nav aria-label="Directory">
    <div class="border-b border-zinc-800 px-4 py-4 sm:px-6">
      <div
        class="flex flex-wrap items-center sm:flex-nowrap"
        :id="props.directoryNavId ?? 'directory-nav'"
      >
        <div class="grow">
          <h3 class="text-base font-semibold leading-6 text-zinc-100">
            {{ props.navigation?.name ?? "Configs" }}
          </h3>
        </div>
        <div class="flex-shrink-0">
          <NuxtLink
            :to="{
              name: 'projects-projectid-editor-schemaid',
              params: route.params,
            }"
            type="button"
            @click="() => emit('createConfig')"
            class="relative inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            New Config
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="Object.keys(directory).length > 0">
      <div
        v-for="letter in Object.keys(directory)"
        :key="letter"
        class="relative"
      >
        <div
          class="z-10 bg-zinc-800 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-100"
        >
          <h3>{{ letter }}</h3>
        </div>
        <ul role="list" class="divide-y divide-zinc-700">
          <li
            v-for="config in directory[letter]"
            :key="config.id"
            :class="[
              config.id == props.selectedId
                ? 'bg-zinc-800/40'
                : 'hover:bg-zinc-800/60',
              'flex justify-between cursor-pointer',
            ]"
          >
            <div
              class="grow pl-3 py-5 hover:bg-zinc-800/80"
              @click="() => emit('select', config.id)"
            >
              <p class="text-sm font-semibold leading-6 text-zinc-100">
                {{ config.name }}
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-zinc-400">
                {{ config.id }}
              </p>
            </div>
            <div
              @click="() => emit('deleteConfig', config.id)"
              class="bg-zinc-900 ring-1 ring-inset ring-red-600 hover:ring-red-700 px-3 py-5 text-red-600 hover:text-red-700 flex justify-center items-center"
            >
              <TrashIcon class="h-5 w-5" aria-hidden="true" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-3 text-center" v-else>
      <span class="text-zinc-400 text-sm">No configs (yet!)</span>
    </div>
  </nav>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";

const props = defineProps([
  "directory",

  // Optional(ish)
  "selectedId",

  // Optional (for title bar)
  "navigation",

  // Optional (for teleportation)
  "directoryNavId",
]);
const emit = defineEmits([
  "select", // Happens on select
  "createConfig", // Creates config
  "deleteConfig", // Deletes config
]);

const route = useRoute();
</script>
