<template>
  <nav aria-label="Directory">
    <div class="border-b border-zinc-800 px-4 py-4 sm:px-6">
      <div class="flex flex-wrap items-center sm:flex-nowrap">
        <div
          v-if="props.directoryNavId"
          class="w-full mb-3 flex items-center justify-between"
          :id="props.directoryNavId ?? 'directory-nav'"
        >
          <h1 class="font-semibold text-zinc-200">Asset Manager</h1>
        </div>
        <button
          @click="() => emit('openCreateModal')"
          type="button"
          class="group transition relative block w-full rounded-lg border-2 border-dashed border-zinc-600 px-12 py-4 text-center hover:border-zinc-500"
        >
          <FolderPlusIcon
            class="transition mx-auto h-12 w-12 text-zinc-600 group-hover:text-zinc-500"
          />
          <span class="transition mt-2 block text-sm font-semibold text-zinc-200 group-hover:text-zinc-100"
            >Upload asset</span
          >
        </button>
      </div>
    </div>
    <div v-if="Object.keys(props.directory).length > 0">
      <div
        v-for="letter in Object.keys(props.directory)"
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
            v-for="asset in directory[letter]"
            :key="asset.id"
            :class="[
              asset.id == props.selectedID
                ? 'bg-zinc-800/40'
                : 'hover:bg-zinc-800/60',
              'flex justify-between cursor-pointer',
            ]"
          >
            <div
              @click="() => assetSelect(asset.id)"
              class="grow pl-3 py-5 hover:bg-zinc-800/80"
            >
              <p
                class="text-sm truncate max-w-[16rem] font-semibold leading-6 text-zinc-100"
              >
                {{ asset.name }}
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-zinc-400">
                {{ asset.id }}
              </p>
            </div>
            <div
              @click="() => deleteAsset(asset.id)"
              class="bg-red-600 hover:bg-red-500 px-3 py-5 text-white flex justify-center items-center"
            >
              <TrashIcon class="h-5 w-5" aria-hidden="true" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-3 text-center" v-else>
      <span class="text-zinc-400 text-sm">No assets (yet!)</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { FolderPlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { type FullyLoadedProject } from "~/scripts/project";

const props = defineProps(["directory", "directoryNavId", "selectedID"]);
const emit = defineEmits(["generateDirectory", "openCreateModal", "select"]);

const project: Ref<FullyLoadedProject> = useState("project");

async function deleteAsset(id: string) {
  await project.value.projectSource.deleteAsset(id);
  emit("generateDirectory");
}

async function assetSelect(id: string) {
  emit("select", id);
}
</script>
