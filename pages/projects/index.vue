<template>
  <div
    v-if="completedValues.length > 0"
    class="mx-auto grow max-w-5xl px-4 sm:px-6 lg:px-8"
  >
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="mx-auto max-w-7xl">
      <div class="border-b border-zinc-700 py-5">
        <div
          class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
        >
          <div class="ml-4 mt-4">
            <h3 class="text-base text-xl font-semibold leading-6 text-zinc-100">
              Projects
            </h3>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0">
            <button
              type="button"
              @click="createProjectModalOpen = true"
              class="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              New Project
              <PlusIcon class="-mr-0.5 ml-1.5 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <ul role="list" class="w-full divide-y divide-zinc-700">
        <li
          v-for="project in completedValues"
          :key="project.id"
          class="flex items-center justify-between gap-x-6 py-5"
        >
          <div class="min-w-0">
            <div class="flex items-start gap-x-3">
              <p class="text-sm font-semibold leading-6 text-zinc-100">
                {{ project.name }}
              </p>
              <p
                :class="[
                  `text-${project.projectSource.color()}-300`,
                  `bg-${project.projectSource.color()}-500/20`,
                  `ring-${project.projectSource.color()}-500/20`,
                  'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                ]"
              >
                {{ project.projectSource.name() }}
              </p>
            </div>
            <div
              class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
            >
              {{ project.id }}
            </div>
          </div>
          <div class="flex flex-none items-center gap-x-4">
            <NuxtLink
              :href="`/projects/${project.id}/`"
              class="rounded-md bg-zinc-800 px-2.5 py-1.5 text-sm font-semibold text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 hover:bg-zinc-700"
              >Open project<span class="sr-only"
                >, {{ project.name }}</span
              ></NuxtLink
            >
            <Menu as="div" class="relative flex-none">
              <MenuButton
                class="-m-2.5 block p-2.5 text-zinc-400 hover:text-zinc-100"
              >
                <span class="sr-only">Open options</span>
                <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
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
                  class="absolute right-0 z-10 mt-3 w-32 origin-top-right rounded-md bg-zinc-800 shadow-lg ring-1 ring-zinc-700 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="project.projectSource.deleteProject(project.id)"
                      :class="[
                        active ? 'bg-zinc-700' : '',
                        'inline-flex items-center justify-between w-full px-3 py-1 text-sm leading-6 text-zinc-100',
                      ]"
                    >
                      Delete<span class="sr-only">, {{ project.name }}</span>
                      <TrashIcon class="w-4 h-4" />
                    </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="place-self-center mx-auto text-center py-12" v-else>
    <svg
      class="mx-auto h-12 w-12 text-zinc-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        vector-effect="non-scaling-stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      />
    </svg>
    <h3 class="mt-2 text-sm font-semibold text-zinc-100">No projects</h3>
    <p class="mt-1 text-sm text-zinc-400">
      Get started by creating a new project.
    </p>
    <div class="mt-6">
      <button
        type="button"
        @click="createProjectModalOpen = true"
        class="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        New Project
        <PlusIcon class="-mr-0.5 ml-1.5 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
  <CreateProjectModal v-model="createProjectModalOpen" />
</template>

<script setup lang="ts">
import { PartiallyLoadedProject, fetchProjects } from "~/scripts/project";
import { PromiseLoader } from "~/scripts/promiseLoader";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { PlusIcon, EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { TrashIcon } from "@heroicons/vue/24/outline";
const loader = new PromiseLoader<PartiallyLoadedProject>(
  fetchProjects(),
  (e) => {},
  (e) => {}
);

// Typescript shenanigans
const completedValues: Ref<PartiallyLoadedProject[]> = loader.completedValues;

const createProjectModalOpen = ref(false);
</script>
