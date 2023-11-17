<template>
  <div class="w-full flex flex-row">
    <nav aria-label="Directory" class="w-80 border-r border-zinc-700">
      <div class="border-b border-zinc-800 px-4 py-4 sm:px-6">
        <div class="flex flex-wrap items-center sm:flex-nowrap">
          <button
            @click="assetModal = true"
            type="button"
            class="group relative block w-full rounded-lg border-2 border-dashed border-zinc-600 px-12 py-4 text-center hover:border-zinc-400"
          >
            <FolderPlusIcon
              class="mx-auto h-12 w-12 text-zinc-600 group-hover:text-zinc-400"
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
              v-for="asset in directory[letter]"
              :key="asset.id"
              :class="[
                asset.id == selectedID
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
    <div class="grow">
      <NuxtErrorBoundary>
        <template #default>
          <NuxtPage />
        </template>
        <template #error="{ error }">
          <main
            class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
          >
            <div class="text-center">
              <p class="text-base font-semibold text-orange-600">Oh no!</p>
              <h1
                class="mt-4 text-3xl font-bold tracking-tight text-zinc-200 sm:text-5xl"
              >
                Asset not found
              </h1>
              <p class="mt-6 text-base leading-7 text-zinc-400">
                Unfortunately the asset you're looking for couldn't be loaded.
              </p>
              <p class="mt-2 text-xs text-zinc-500">
                {{ error }}
              </p>
              <div class="mt-8 flex items-center justify-center gap-x-6">
                <button
                  @click="assetModal = true"
                  class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >Create new asset</button
                >
              </div>
            </div>
          </main>
        </template>
      </NuxtErrorBoundary>
    </div>
    <UploadAssetModal
      v-model="assetModal"
      @create="() => generateDirectory()"
    />
  </div>
</template>

<script setup lang="ts">
import {
  CircleStackIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";
import { Asset, FullyLoadedProject } from "~/scripts/project";

const project = useState<FullyLoadedProject>("project");

const router = useRouter();
const route = useRoute();

const assetModal = ref(false);
const selectedID = ref("");

async function deleteAsset(id: string) {
  await project.value.projectSource.deleteAsset(id);
  await generateDirectory();
}

async function assetSelect(id: string) {
  router.push({
    name: "projects-projectid-assets-index-assetid",
    params: Object.assign({}, route.params, { assetid: id }),
  });
  selectedID.value = id;
}

const assets: Ref<Asset[] | undefined> = useState("assets");
const directory: Ref<{ [key: string]: Asset[] }> = ref({});

async function generateDirectory() {
  directory.value = {};
  assets.value = await project.value?.projectSource.fetchAssets();
  assets.value.forEach((asset) => {
    directory.value[asset.name[0].toUpperCase()] ??= [];
    directory.value[asset.name[0].toUpperCase()].push(asset);
  });
}

await generateDirectory();
</script>
