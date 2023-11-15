<template>
  <div class="w-full">
    <nav aria-label="Directory" class="w-80 border-r border-zinc-700">
      <div class="border-b border-zinc-800 px-4 py-4 sm:px-6">
        <div class="flex flex-wrap items-center sm:flex-nowrap">
          <button
            type="button"
            class="relative block w-full rounded-lg border-2 border-dashed border-zinc-600 px-12 py-4 text-center hover:border-zinc-400"
          >
            <FolderPlusIcon
              class="mx-auto h-12 w-12 text-gray-400"
            />
            <span class="mt-2 block text-sm font-semibold text-zinc-200"
              >Upload asset</span
            >
          </button>
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
                config.id == 0 ? 'bg-zinc-800/40' : 'hover:bg-zinc-800/60',
                'flex justify-between cursor-pointer',
              ]"
            >
              <div class="grow pl-3 py-5 hover:bg-zinc-800/80">
                <p class="text-sm font-semibold leading-6 text-zinc-100">
                  {{ config.name }}
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-zinc-400">
                  {{ config.id }}
                </p>
              </div>
              <div
                class="bg-red-600 hover:bg-red-500 px-3 py-5 text-white flex justify-center items-center"
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
    <UploadAssetModal />
  </div>
</template>

<script setup>
import { FolderPlusIcon, TrashIcon } from "@heroicons/vue/24/outline";

const directory = {
  A: [
    {
      id: "83912832193",
      name: "lmaoooo",
    },
  ],
};
</script>
