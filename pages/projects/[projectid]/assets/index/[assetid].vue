<template>
  <div class="p-6 sm:p-12 w-full">
    <div class="flex flex-col xl:flex-row justify-stretch sm:gap-16">
      <form @submit.prevent="() => saveAsset()" class="max-w-lg grow w-full">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-full">
              <label
                for="name"
                class="block text-sm font-semibold leading-6 text-zinc-100"
                >Asset name</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-zinc-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="asset.name"
                    class="block flex-1 border-0 bg-transparent py-1.5 text-zinc-100 placeholder:text-zinc-500 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="My project"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-full">
              <SchemaString
                :schema="{
                  type: 'string',
                  name: 'Asset type',
                  description: 'Control what your asset can be used for.',
                  enum: AssetTypeOptions,
                }"
                v-model="asset.type"
              />
            </div>

            <div class="mt-6 inline-flex gap-x-4">
              <button
                type="button"
                class="h-9 inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <span
                  class="inline-flex gap-x-1 items-center justify-center"
                  v-if="saving"
                >
                  Saving
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-3 h-3 text-transparent animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </span>
                <span v-else> Save </span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div class="grow">
        <div
          class="w-full flex flex-col border border-zinc-800 rounded-xl overflow-hidden"
          v-if="asset.data.type.startsWith('image')"
        >
          <img class="w-full rounded-xl" :src="objectUrl" />
          <button
            @click="() => saveAs(asset.data, asset.filename)"
            class="my-1 mx-auto inline-flex items-center text-sm text-zinc-400 flex flex-row gap-x-1 w-min"
          >
            <ArrowDownTrayIcon class="w-4 h-4" />
            Download
          </button>
        </div>
        <div
          v-else
          class="w-full flex flex-col justify-center text-center border border-zinc-800 p-8 rounded-xl flex justify-center"
        >
          <p class="text-zinc-300">No preview available.</p>
          <button
            @click="() => saveAs(asset.data, asset.filename)"
            class="my-2 mx-auto inline-flex items-center text-sm text-zinc-400 flex flex-row gap-x-1 w-min"
          >
            <ArrowDownTrayIcon class="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AssetTypeOptions,
  type Asset,
  type FullyLoadedProject,
} from "~/scripts/project";
import { fetchObjectUrl } from "~/scripts/objectUrlManager";
import { saveAs } from "file-saver";
import { ArrowDownTrayIcon, TrashIcon } from "@heroicons/vue/24/outline";
import type { AssetType } from "@nuxt/devtools/dist/types";

const emit = defineEmits(["regenerate"]);

const route = useRoute();

const assetID = computed(() => route.params.assetid);
const assets: Ref<Asset[] | undefined> = useState("assets");
const project: Ref<FullyLoadedProject> = useState("project");

const saving = ref(false);

if (assets.value == undefined) {
  throw "Could not load assets global";
}

const asset = ref<Asset & { data: Blob }>(
  await project.value.projectSource.loadAsset(assetID.value.toString())
);

const objectUrl = computed(() =>
  fetchObjectUrl(asset.value.id, asset.value.data)
);

async function saveAsset() {
  saving.value = true;
  await project.value.projectSource.updateAsset(asset.value.id, asset.value);
  emit("regenerate");
  saving.value = false;
}
</script>
