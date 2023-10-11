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
        <NuxtLink href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Sapiens Web Builder</span>
          <img class="h-5 w-auto" src="@/assets/logo.png" alt="" />
        </NuxtLink>
        <div class="flex flex-1 justify-end">
          <NuxtLink
            href="/projects"
            class="text-sm font-semibold leading-6 text-zinc-100"
            >Builder <span aria-hidden="true">&rarr;</span></NuxtLink
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-1">
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-zinc-100"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Sapiens Web Builder</span>
              <img class="h-8 w-auto" src="@/assets/logo.png" alt="" />
            </a>
            <div class="flex flex-1 justify-end">
              <NuxtLink
                to="/projects"
                class="text-sm font-semibold leading-6 text-zinc-100"
                >Builder <span aria-hidden="true">&rarr;</span></NuxtLink
              >
            </div>
          </div>
          <div class="mt-6 space-y-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-800"
              >{{ item.name }}</NuxtLink
            >
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="grow">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  // I'm too lazy to make an about page
  // { name: "About", href: "/about" },
  { name: "Docs", href: "/docs" },
  { name: "Community", href: "/community" },
];

const mobileMenuOpen = ref(false);

const router = useRouter();

router.afterEach(() => {
  mobileMenuOpen.value = false;
});
</script>
