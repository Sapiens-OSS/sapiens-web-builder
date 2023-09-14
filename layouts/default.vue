<template>
  <div class="flex h-screen bg-zinc-900">
    <!-- Narrow sidebar -->
    <div
      class="hidden w-28 overflow-y-auto bg-zinc-900 border-r-2 border-zinc-800 md:block"
    >
      <div class="flex w-full grow flex-col items-center py-2">
        <div class="w-full flex-1 space-y-1 px-2">
          <NuxtLink
            v-for="(item, i) in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              selectedTab == i
                ? 'bg-orange-600/10 text-orange-400'
                : 'text-zinc-100 hover:bg-zinc-800 hover:text-white',
              'group transition w-full p-3 rounded-md flex flex-col items-center text-xs font-medium',
            ]"
            :aria-current="selectedTab == i ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              :key="item.name"
              :class="[
                selectedTab == i
                  ? 'text-orange-400'
                  : 'text-zinc-300 group-hover:text-white',
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
          <div class="fixed inset-0 bg-zinc-900 bg-opacity-75" />
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
              class="relative flex w-full max-w-xs flex-1 flex-col bg-zinc-900 border-r border-zinc-800 pt-5 pb-4"
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
                  alt="Hammerstone Web Builder"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto px-2">
                <nav class="flex h-full flex-col">
                  <div class="space-y-1">
                    <NuxtLink
                      v-for="(item, i) in navigation"
                      :key="item.name"
                      :to="item.href"
                      :class="[
                        selectedTab == i
                          ? 'bg-orange-600/10 text-orange-400'
                          : 'text-zinc-100 hover:bg-zinc-800 hover:text-white',
                        'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
                      ]"
                      :aria-current="selectedTab == i ? 'page' : undefined"
                      @click="mobileMenuOpen = false"
                    >
                      <component
                        :is="item.icon"
                        :key="item.name"
                        :class="[
                          selectedTab == i
                            ? 'text-orange-400'
                            : 'text-zinc-300 group-hover:text-white',
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
          class="items-center justify-between flex h-16 flex-shrink-0 border-b-2 border-zinc-800 bg-zinc-900 shadow-sm"
        >
          <button
            type="button"
            class="border-r z-10 h-full border-zinc-600 px-4 text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 md:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <h3 class="text-2xl z-10 font-medium leading-6 text-white px-4">
            {{ navigation[selectedTab]?.name || "Unknown Page" }}
          </h3>

          <Menu v-if="githubUser" as="div" class="relative px-4">
            <MenuButton class="-m-1.5 flex items-center p-1.5">
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full bg-zinc-50"
                :src="githubUser['avatar_url']"
                alt=""
              />
              <span class="hidden lg:flex lg:items-center">
                <span
                  class="ml-4 text-sm font-semibold leading-6 text-white"
                  aria-hidden="true"
                  >{{ githubUser.login }}</span
                >
                <ChevronDownIcon
                  class="ml-2 h-5 w-5 text-zinc-400"
                  aria-hidden="true"
                />
              </span>
            </MenuButton>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute my-2 mx-1 right-0 z-10 origin-top-right rounded-md overflow-hidden bg-zinc-800 shadow-lg focus:outline-none"
              >
                <MenuItem v-for="item in userNavigation" v-slot="{ active }">
                  <button
                    @click="item.action"
                    :class="[
                      active ? 'bg-zinc-700' : '',
                      'block whitespace-nowrap w-full px-5 py-3 text-sm leading-6 text-white',
                    ]"
                  >
                    {{ item.name }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </header>

      <!-- Main content -->
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const selectedTab = computed(() => {
  const route = useRoute();
  for (let i = 0; i < navigation.value.length; i++) {
    if (route.fullPath == navigation.value[i].href) {
      return i;
    }
  }
  return -1;
});

const githubUser = useGitHubUser();

const userNavigation = [
  {
    name: "Remove Account",
    action: () => {
      deleteDocument("github", "pat");
      githubUser.value = null;
    },
  },
];

const mobileMenuOpen = ref(false);
</script>
