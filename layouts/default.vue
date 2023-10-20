<template>
  <div class="min-h-screen w-full bg-zinc-900 flex flex-col">
    <header class="border-b border-zinc-800">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex flex-1">
          <div class="hidden lg:flex lg:gap-x-12">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm font-semibold leading-6 text-zinc-100"
              >{{ item.name }}</NuxtLink
            >
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <NuxtLink href="/" class="p-1.5">
          <span class="sr-only">Sapiens Web Builder</span>
          <img class="h-5 w-auto" src="@/assets/logo.png" alt="" />
        </NuxtLink>
        <div class="flex flex-1 justify-end">
          <NuxtLink
            href="/projects"
            class="hidden lg:block text-sm font-semibold leading-6 text-zinc-100"
            >Builder <span aria-hidden="true">&rarr;</span></NuxtLink
          >
        </div>
      </nav>
      <TransitionRoot as="template" :show="mobileMenuOpen">
        <Dialog
          as="div"
          class="relative z-50 lg:hidden"
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
            <div class="fixed inset-0 bg-zinc-900/80" />
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
                      @click="mobileMenuOpen = false"
                    >
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon
                        class="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div
                  class="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 border-r-2 border-orange-500 px-8 pb-4"
                >
                  <div class="flex h-16 shrink-0 items-center">
                    <img
                      class="h-6 w-auto"
                      src="@/assets/logo.png"
                      alt="Web Builder"
                    />
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li v-for="item in navigation" :key="item.name">
                            <NuxtLink
                              :href="item.href"
                              class="group text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/40 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              {{ item.name }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </li>

                      <li class="mt-auto">
                        <NuxtLink
                          to="/projects"
                          class="group -mx-2 flex gap-x-1 rounded-md items-center p-2 text-sm font-semibold leading-6 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                        >
                          Open Builder
                          <ArrowRightIcon
                            class="h-4 w-4 shrink-0"
                            aria-hidden="true"
                          />
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </header>
    <div class="grow">
      <slot />
    </div>
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
import { ArrowRightIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Docs", href: "/docs" },
  { name: "Community", href: "/community" },
];

const mobileMenuOpen = ref(false);

const router = useRouter();

router.afterEach(() => {
  mobileMenuOpen.value = false;
});
</script>
