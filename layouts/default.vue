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
    <footer>
      <div
        class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"
      >
        <div class="mt-10 flex justify-center space-x-10">
          <a
            v-for="item in socials"
            :key="item.name"
            :href="item.href"
            target="_blank"
            class="transition text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-4 text-center text-xs leading-5 text-gray-500">
          &copy; {{ new Date().getFullYear() }} Sapiens Modding Community. All
          rights reserved.
        </p>
      </div>
    </footer>
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
  { name: "Community", href: "/community" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Sapiens-OSS",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
  {
    name: "Discord",
    href: "https://discord.gg/WnN8hj2Fyg",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 -28.5 256 256" }, [
          h("path", {
            "fill-rule": "nonzero",
            d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",
          }),
        ]),
    }),
  },
];

const mobileMenuOpen = ref(false);

const router = useRouter();

router.afterEach(() => {
  mobileMenuOpen.value = false;
});
</script>
