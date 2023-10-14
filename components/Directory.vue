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
            v-for="file in directory[letter]"
            :key="file.id"
            @click="() => emit('select', file.id)"
            :class="[
              file.id == props.selectedId
                ? 'bg-zinc-800/40 hover:bg-zinc-800/80'
                : 'hover:bg-zinc-800/60',
              'flex gap-x-4 px-3 py-5 cursor-pointer',
            ]"
          >
            <div class="min-w-0">
              <p class="text-sm font-semibold leading-6 text-zinc-100">
                {{ file.name }}
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-zinc-400">
                {{ file.id }}
              </p>
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
]);

const route = useRoute();
</script>
