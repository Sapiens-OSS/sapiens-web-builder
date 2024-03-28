<template>
  <div class="p-12">
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-2xl font-semibold leading-7 text-zinc-100">
            Mod Info
          </h2>
          <p class="mt-1 text-sm leading-6 text-zinc-400">
            Configure how your mod appears to your users when they download and
            install it.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="name"
                class="block text-sm font-semibold leading-6 text-zinc-100"
                >Mod name</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-zinc-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="project.name"
                    class="block flex-1 border-0 bg-transparent py-1.5 text-zinc-100 placeholder:text-zinc-500 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="My project"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="about"
                class="block text-sm font-semibold leading-6 text-zinc-100"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  v-model="project.modinfo.description"
                  placeholder="My project does..."
                  class="block w-full rounded-md border-0 py-1.5 bg-zinc-900 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p class="mt-1 text-sm leading-6 text-zinc-400">
                What does your project add? What does it do?
              </p>
            </div>

            <div class="sm:col-span-4">
              <label
                for="developer"
                class="block text-sm font-semibold leading-6 text-zinc-100"
                >Developer</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-zinc-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    name="developer"
                    id="developer"
                    v-model="project.modinfo.developer"
                    class="block flex-1 border-0 bg-transparent py-1.5 text-zinc-100 placeholder:text-zinc-500 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Me"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="website"
                class="block text-sm font-semibold leading-6 text-zinc-100"
                >Website</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-zinc-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    name="website"
                    id="website"
                    v-model="project.modinfo.website"
                    class="block flex-1 border-0 bg-transparent py-1.5 text-zinc-100 placeholder:text-zinc-500 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://my-awesome-mod.github.io/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { type FullyLoadedProject } from "~/scripts/project";

const project = useState<FullyLoadedProject>("project");


</script>
