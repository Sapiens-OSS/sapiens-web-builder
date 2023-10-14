<template>
  <div class="flex grow flex-row">
    <aside
      class="hidden lg:block h-screen overflow-y-scroll border-r border-zinc-700 w-96"
    >
      <Directory
        :navigation="props.navigation"
        :directory="directory"
        @select=""
      />
    </aside>
    <ClientOnly>
      <Teleport to="#mobile-nav">
        <button
          @click="drawerOpen = true"
          type="button"
          class="text-gray-400"
        >
          <span class="sr-only">Open sidebar</span>
          <RectangleStackIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </Teleport>
    </ClientOnly>
    <main class="grow max-w-screen overflow-x-hidden">
      <NuxtPage />
    </main>
  </div>

  <TransitionRoot as="template" :show="drawerOpen">
    <Dialog as="div" class="relative z-10" @close="drawerOpen = false">
      <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="translate-y-full"
          enter-to="translate-y-0"
          leave="ease-in duration-200"
          leave-from="translate-y-0"
          leave-to="translate-y-full"
        >
          <DialogPanel
            class="relative w-full h-full transform h-screen overflow-y-scroll bg-zinc-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
          >
            <ClientOnly>
              <Teleport to="#mobile-directory-id">
                <button
                  type="button"
                  class="rounded-md ml-3 text-zinc-100 hover:text-zinc-200"
                  @click="drawerOpen = false"
                >
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </Teleport>
            </ClientOnly>
            <div>
              <Directory
                :navigation="props.navigation"
                :directory="directory"
                :directory-nav-id="'mobile-directory-id'"
                @select=""
              />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { RectangleStackIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const props = defineProps(["navigation"]);
console.log(props.navigation);

const drawerOpen = ref(false);

const directory: any = {};
</script>
