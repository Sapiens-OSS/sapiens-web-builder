<template>
  <LoadingIndictator />
  <div class="flex h-screen background">
    <!-- Narrow sidebar -->
    <div
      class="hidden w-28 overflow-y-auto bg-slate-700 dark:bg-slate-900 dark:border-r dark:border-gray-700 md:block"
    >
      <div class="flex w-full flex-col items-center py-6">
        <div class="flex flex-shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="@/assets/img/logo.png"
            alt="Sapiens Web Builder"
          />
        </div>
        <div class="mt-6 w-full flex-1 space-y-1 px-2">
          <NuxtLink
            v-for="(item, i) in sidebarNavigation"
            :key="item.name"
            :to="{ name: item.href }"
            :class="[
              selectedTab == i
                ? 'bg-slate-800 text-white'
                : 'text-slate-100 hover:bg-slate-800 hover:text-white',
              'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium',
            ]"
            :aria-current="selectedTab == i ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              :class="[
                selectedTab == i
                  ? 'text-white'
                  : 'text-slate-300 group-hover:text-white',
                'h-6 w-6',
              ]"
              aria-hidden="true"
            />
            <span class="mt-2">{{ item.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog
        as="div"
        class="relative z-20 md:hidden"
        @close="mobileMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-600 dark:bg-gray-900 bg-opacity-75"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-slate-700 dark:bg-slate-800 pt-5 pb-4"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                    @click="mobileMenuOpen = false"
                  >
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="@/assets/img/logo.png"
                  alt="Sapiens Web Builder"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto px-2">
                <nav class="flex h-full flex-col">
                  <div class="space-y-1">
                    <NuxtLink
                      v-for="(item, i) in sidebarNavigation"
                      :key="item.name"
                      :to="{ name: item.href }"
                      :class="[
                        selectedTab == i
                          ? 'bg-slate-800 dark:bg-slate-900 text-white'
                          : 'text-slate-100 hover:bg-slate-800 hover:text-white',
                        'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
                      ]"
                      :aria-current="selectedTab == i ? 'page' : undefined"
                      @click="mobileMenuOpen = false"
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          selectedTab == i
                            ? 'text-white'
                            : 'text-slate-300 group-hover:text-white',
                          'mr-3 h-6 w-6',
                        ]"
                        aria-hidden="true"
                      />
                      <span>{{ item.name }}</span>
                    </NuxtLink>
                  </div>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Content area -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <header class="w-full">
        <div
          class="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 dark:border-gray-600 background-tinted shadow-sm"
        >
          <button
            type="button"
            class="border-r border-gray-200 dark:border-gray-600 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 md:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <div class="mx-auto flex items-center">
            <h3 class="text-lg font-medium leading-6 text">
              {{ sidebarNavigation[selectedTab].name }}
            </h3>
          </div>
        </div>
      </header>

      <!-- Main content -->
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3BottomLeftIcon,
  ArrowDownTrayIcon,
  AdjustmentsHorizontalIcon,
  CubeTransparentIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  QueueListIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { useMod, modStructure } from "~/composables/shared";

const sidebarNavigation = [
  { name: "General", href: "index", icon: AdjustmentsHorizontalIcon },
  { name: "Materials", href: "materials", icon: Squares2X2Icon },
  { name: "Objects", href: "objects", icon: CubeTransparentIcon },
  { name: "Recipes", href: "recipes", icon: QueueListIcon },
  { name: "Storages", href: "storages", icon: RectangleStackIcon },
  { name: "Export", href: "export", icon: ArrowDownTrayIcon },
];

const selectedTab = computed(() => {
  for (let i = 0; i < sidebarNavigation.length; i++) {
    if (useRoute().name == sidebarNavigation[i].href) {
      return i;
    }
  }
  return -1;
});

const schemas = [
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/material.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/object.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/recipe.schema.json",
  "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/storage.schema.json",
];

for (let i = 0; i < schemas.length; i++) {
  modStructure[i + 1] = JSON.parse(await useFetch(schemas[i]).data.value);
}

const mobileMenuOpen = ref(false);
</script>
