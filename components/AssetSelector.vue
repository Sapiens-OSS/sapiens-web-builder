<template>
  <TransitionRoot as="template" :show="assetPromises != undefined">
    <Dialog as="div" class="relative z-50" @close="assetPromises?.reject()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-xl bg-zinc-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6"
            >
              <div class="flex flex-col sm:flex-row gap-7">
                <div class="flex flex-col justify-between">
                  <ul
                    role="list"
                    class="divide-y divide-zinc-700 overflow-hidden rounded-xl min-w-[12rem]"
                  >
                    <li
                      v-for="asset in assets"
                      :key="asset.id"
                      @mouseenter="() => (currentAsset = asset)"
                      class="relative transition flex justify-between gap-x-6 px-2 py-2 hover:bg-zinc-900 sm:px-4 sm:py-4"
                    >
                      <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                          <p
                            class="text-sm font-semibold leading-6 text-zinc-100"
                          >
                            <span class="absolute inset-x-0 -top-px bottom-0" />
                            {{ asset.name }}
                          </p>
                        </div>
                      </div>
                      <div class="flex shrink-0 items-center gap-x-4">
                        <ChevronRightIcon
                          class="h-5 w-5 flex-none text-zinc-500"
                          aria-hidden="true"
                        />
                      </div>
                    </li>
                  </ul>
                  <div class="mt-5 sm:mt-6">
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
                      @click="assetPromises?.reject()"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div
                  v-if="currentAsset"
                  class="flex flex-col justify-between grow min-w-[15rem]"
                >
                  <div class="mt-3 text-center sm:mt-5">
                    <h3 class="text-base font-semibold leading-6 text-zinc-100">
                      {{ currentAsset.name }}
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        {{ currentAsset.filename }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-6">
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      @click="assetPromises?.resolve(currentAsset)"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { type Asset, type FullyLoadedProject } from "~/scripts/project";
import { assetPromises } from "~/scripts/assetSelector";

const project = useState<FullyLoadedProject>("project");
const assets = ref<Asset[]>([]);
const currentAsset = ref<Asset | undefined>();

async function generateAssetLists() {
  assets.value = [];
  const rawAssets = await project.value.projectSource.fetchAssets();
  assets.value = rawAssets;
}

await generateAssetLists();

watch(assetPromises, (v) => {
  if (v != undefined) {
    generateAssetLists();
  }
});
</script>
