<template>
  <div class="bg-gray-900 min-h-screen">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
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
          <div class="fixed inset-0 bg-gray-800/80" />
        </TransitionChild>

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
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="@/assets/img/logo.png"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-4">
                        <li v-for="item in navigation" :key="item.name">
                          <NuxtLink
                            :href="item._path"
                            @click="() => (sidebarOpen = false)"
                            :class="[
                              route.path.startsWith(item._path)
                                ? 'bg-orange-600/10 ring-2 ring-orange-500 text-orange-500'
                                : 'text-white hover:text-gray-200 hover:bg-gray-800',
                              'group flex gap-x-3 rounded-md p-3 text-md leading-6 font-semibold',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                item.current
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.title }} <span aria-hidden="true">→</span>
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
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-700 bg-gray-900 px-6"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="@/assets/img/logo.png"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-4">
                <li v-for="item in navigation" :key="item.name">
                  <NuxtLink
                    :href="item._path"
                    :class="[
                      route.path.startsWith(item._path)
                        ? 'bg-orange-600/10 ring-2 ring-orange-500 text-orange-500'
                        : 'text-white hover:text-gray-200 hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-3 text-md leading-6 font-semibold',
                    ]"
                  >
                    {{ item.title }} <span aria-hidden="true">→</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">
        Dashboard
      </div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-800"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>

    <main :class="side ? 'lg:pl-72' : ''">
      <div :class="side ? 'xl:pl-96' : ''">
        <div>
          <slot />
        </div>
      </div>
    </main>

    <aside
      v-if="side"
      class="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-700 xl:block"
    >
    <h1 class="text-2xl text-white font-semibold px-6 py-4">Pages</h1>
      <nav class="flex flex-1 flex-col" aria-label="Sidebar">
        <ul role="list" class="-mx-2 space-y-1 px-6 py-2">
          <li v-for="item in sideBarNavigation" :key="item._path">
            <NuxtLink
              :href="item._path"
              :class="[
                item.current
                  ? 'bg-orange-600/10 ring-2 ring-orange-500 text-orange-500'
                  : 'text-white hover:text-gray-200 hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold',
              ]"
              >{{ item.title }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = (await fetchContentNavigation())[0].children;

const route = useRoute();

const sidebarOpen = ref(false);
const side = ref(true);

const sideBarNavigation = computed(() => {
  const index = navigation.findIndex((e) => route.path.startsWith(e._path));
  if (index == -1) {
    side.value = false;
    return {};
  }
  side.value = true;
  return navigation[index].children.map((e) => ({
    ...e,
    current: route.path.startsWith(e._path),
  }));
});
</script>
