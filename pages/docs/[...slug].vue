<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="bg-zinc-900 min-h-screen w-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-700/20 backdrop-blur-xl px-6 pb-4"
              >
                <NuxtLink href="/" class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-12 w-auto"
                    src="@/assets/icon.png"
                    alt="Sapiens Web Builder"
                  />
                </NuxtLink>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <NuxtLink
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-zinc-700/40 text-white'
                                : 'text-zinc-200 hover:text-white hover:bg-zinc-700/40',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-white'
                                  : 'text-zinc-200 group-hover:text-white',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-zinc-200"
                      >
                        Tutorials
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in tutorials" :key="team.name">
                          <NuxtLink
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-zinc-700/40 text-white'
                                : 'text-zinc-200 hover:text-white hover:bg-zinc-700/40',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            ]"
                          >
                            <AcademicCapIcon
                              class="flex h-6 w-6 p-.5 shrink-0 items-center justify-center rounded-lg backdrop-blur-xl text-[0.625rem] font-medium text-zinc-200"
                            />
                            <span class="truncate">{{ team.name }}</span>
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-800 px-6 pb-4"
      >
        <NuxtLink href="/" class="flex h-16 shrink-0 items-center">
          <img
            class="h-12 w-auto"
            src="@/assets/icon.png"
            alt="Sapiens Web Builder"
          />
        </NuxtLink>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <NuxtLink
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-zinc-700/80 text-white'
                        : 'text-zinc-200 hover:text-white hover:bg-zinc-700/80',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-white'
                          : 'text-zinc-200 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-zinc-200">
                Tutorials
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in tutorials" :key="team.name">
                  <NuxtLink
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-zinc-700/80 text-white'
                        : 'text-zinc-200 hover:text-white hover:bg-zinc-700/80',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    ]"
                  >
                    <AcademicCapIcon
                      class="flex h-6 w-6 p-.5 shrink-0 items-center justify-center rounded-lg backdrop-blur-xl text-[0.625rem] font-medium text-zinc-200"
                    />
                    <span class="truncate">{{ team.name }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-700 bg-zinc-800/10 backdrop-blur-xl px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              class="block h-full w-full border-0 py-0 pl-8 pr-0 bg-transparent text-zinc-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>
        </div>
      </div>

      <main class="py-8 grow">
        <div class="px-4 sm:px-8 lg:px-16 text-white">
          <article class="prose prose-invert prose-orange">
            <ContentDoc> </ContentDoc>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const sidebarOpen = ref(false);

const router = useRouter();
router.afterEach(() => {
  sidebarOpen.value = false;
});

const route = useRoute();

const { data: pageNavigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const navigationRoot: Ref<NavItem[]> = computed(
  () => pageNavigation.value?.at(0)?.children ?? new Array<NavItem>()
);

const navigation = computed(() =>
  navigationRoot.value
    .filter((e) => !e._path.startsWith("/docs/tutorials"))
    .map((e) => {
      return {
        name: e.title,
        href: e._path,
        icon: AcademicCapIcon,
        current: route.path == e._path,
      };
    })
);

const tutorials = computed(() =>
  navigationRoot.value
    .find((e) => e._path.startsWith("/docs/tutorials"))
    ?.children?.map((e, i) => {
      return {
        id: i,
        name: e.title,
        href: e._path,
        current: route.path == e._path,
      };
    })
);

definePageMeta({
  layout: false,
});
</script>
