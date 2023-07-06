<template>
  <div class="bg-gray-900">
    <main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <img
        class="mx-auto h-10 w-auto sm:h-12"
        src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=500"
        alt="Your Company"
      />
      <div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        <p class="text-base font-semibold leading-8 text-orange-500">404</p>
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          This page does not exist
        </h1>
        <p
          class="mt-4 text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8"
        >
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 class="sr-only">Popular pages</h2>
        <ul
          role="list"
          class="-mt-6 divide-y divide-gray-200/5"
        >
          <li
            v-for="(link, linkIdx) in links"
            :key="linkIdx"
            class="relative flex gap-x-6 py-6"
          >
            <div
              class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-800"
            >
              <component
                :is="link.icon"
                class="h-6 w-6 text-orange-500"
                aria-hidden="true"
              />
            </div>
            <div class="flex-auto">
              <h3 class="text-sm font-semibold leading-6 text-white">
                <NuxtLink :href="link.href">
                  <span class="absolute inset-0" aria-hidden="true" />
                  {{ link.name }}
                </NuxtLink>
              </h3>
              <p class="mt-2 text-sm leading-6 text-gray-400">
                {{ link.description }}
              </p>
            </div>
            <div class="flex-none self-center">
              <ChevronRightIcon
                class="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </div>
          </li>
        </ul>
        <div class="mt-10 flex justify-center">
          <a href="#" class="text-sm font-semibold leading-6 text-orange-500">
            <span aria-hidden="true">&larr;</span>
            Back to home
          </a>
        </div>
      </div>
    </main>
    <footer class="border-t border-gray-800 py-6 sm:py-10">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8"
      >
        <p class="text-sm leading-7 text-gray-500">
          Created and supported with &#10084;&#65039; by the Sapiens Modding
          Community.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { BookmarkSquareIcon, QueueListIcon, RssIcon } from '@heroicons/vue/24/solid'

const links = [
  {
    name: 'Home',
    href: '/',
    description: 'Get back to making awesome mods with our tools.',
    icon: HomeIcon,
  },
  { name: 'API Reference', href: '#', description: 'A complete API reference for our libraries.', icon: QueueListIcon },
  {
    name: 'Guides',
    href: '#',
    description: 'Installation guides that cover popular setups.',
    icon: BookmarkSquareIcon,
  },
  { name: 'Blog', href: '#', description: 'Read our latest news and articles.', icon: RssIcon },
]
</script>
