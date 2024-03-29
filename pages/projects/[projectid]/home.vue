<template>
  <div class="p-6 sm:p-12 w-full">
    <div class="flex flex-col xl:flex-row justify-stretch gap-16">
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-2xl font-semibold leading-7 text-zinc-100">
              Mod Info
            </h2>
            <p class="mt-1 text-sm leading-6 text-zinc-400">
              Configure how your mod appears to your users when they download
              and install it.
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
                <p class="mt-1 text-sm leading-6 text-zinc-400">
                  You can put your own name here, or a chosen nickname.
                </p>
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
                <p class="mt-1 text-sm leading-6 text-zinc-400">
                  A link to your portfolio or documentation for your mod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="grow">
        <h2 class="text-xl font-semibold leading-7 text-zinc-200">Schemas</h2>
        <p class="mt-1 text-sm leading-6 text-zinc-400">
          Add external schemas to create content for mods that support it.
        </p>
        <ul role="list" class="divide-y divide-zinc-700">
          <li v-for="schema in project.schemas" :key="schema">
            <div
              v-if="schemas[schema] != undefined"
              class="flex justify-between gap-x-6 py-5"
            >
              <div class="flex min-w-0 gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-zinc-100">
                    {{ schemas[schema].title ?? schema }}
                  </p>
                  <p class="mt-1 truncate text-xs leading-5 text-zinc-400">
                    {{
                      schemas[schema].description ?? "No description provided."
                    }}
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <p
                  class="text-sm leading-6 text-zinc-300 font-mono bg-zinc-800 px-1.5 rounded-lg"
                >
                  {{ schemas[schema].$id }}
                </p>
                <div class="flex flex-row gap-x-3">
                  <div
                    v-if="DEFAULT_SCHEMAS.includes(schema)"
                    class="mt-1 flex items-center gap-x-1.5"
                  >
                    <div class="flex-none rounded-full bg-orange-500/20 p-1">
                      <div class="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    </div>
                    <p class="text-xs leading-5 text-zinc-400">Default</p>
                  </div>
                  <div
                    v-if="schemaValidation[schema][1] == 0"
                    class="mt-1 flex items-center gap-x-1.5"
                  >
                    <div class="flex-none rounded-full bg-orange-500/20 p-1">
                      <div class="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    </div>
                    <p class="text-xs leading-5 text-zinc-400">Validating...</p>
                  </div>
                  <div
                    v-if="
                      schemaValidation[schema][0] /
                        schemaValidation[schema][1] <
                      1
                    "
                    class="mt-1 flex items-center gap-x-1.5"
                  >
                    <div class="flex-none rounded-full bg-red-500/20 p-1">
                      <div class="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </div>
                    <p class="text-xs leading-5 text-zinc-400">
                      Invalid ({{
                        Math.floor(
                          (schemaValidation[schema][0] /
                            schemaValidation[schema][1]) *
                            100
                        )
                      }}% correct)
                    </p>
                  </div>
                  <div v-else class="mt-1 flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p class="text-xs leading-5 text-zinc-400">Valid</p>
                  </div>
                  <button
                    @click="() => deleteSchema(schema)"
                    class="transition mt-1 flex items-center gap-x-1.5 text-red-500 text-sm font-semibold hover:text-red-600"
                    v-if="!DEFAULT_SCHEMAS.includes(schema)"
                  >
                    <TrashIcon class="w-4 h-4" />
                    <span class="-mb-0.5">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="flex justify-between gap-x-6 py-5">
              <div class="flex min-w-0 w-fit gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p
                    class="h-3 w-[5rem] sm:w-[15rem] text-sm font-semibold leading-6 bg-zinc-500 animate-pulse rounded-xl"
                  />
                  <p
                    class="h-2 w-[7rem] sm:w-[20rem] mt-1 truncate text-xs leading-5 bg-zinc-700 animate-pulse rounded-xl"
                  />
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div
                  class="h-3 w-[8rem] sm:w-[15rem] text-sm leading-6 text-zinc-300 font-mono bg-zinc-800 px-1.5 rounded-lg animate-pulse"
                />
                <p
                  class="h-2 w-[7rem] mt-1 truncate text-xs leading-5 bg-zinc-700 animate-pulse rounded-xl"
                />
              </div>
            </div>
          </li>
        </ul>

        <div class="mt-2 flex flex-row gap-x-2">
          <div
            class="flex grow rounded-md shadow-sm ring-1 ring-inset ring-zinc-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600"
          >
            <input
              type="text"
              v-model="importSchemaUrl"
              class="block flex-1 border-0 bg-transparent py-1.5 text-zinc-100 placeholder:text-zinc-500 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="https://..."
            />
          </div>
          <button
            @click="() => importSchema()"
            type="button"
            class="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            <ArrowDownTrayIcon
              class="-ml-0.5 mr-1.5 h-5 w-5"
              aria-hidden="true"
            />
            Import
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownTrayIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { type FullyLoadedProject } from "~/scripts/project";
import { DEFAULT_SCHEMAS, type Schema } from "~/scripts/schemas";
import { validateSchema } from "~/scripts/utils/schemaValidator";

const project = useState<FullyLoadedProject>("project");

const schemas: Ref<{ [key: string]: Schema | null }> = useState("schemas");
const schemaValidation = computed(() =>
  Object.fromEntries(
    Object.entries(schemas.value).map((schema) => [
      schema[0],
      schema[1] ? validateSchema(schema[1]) : [0, 0],
    ])
  )
);

const importSchemaUrl = ref();

function importSchema() {
  if (project.value.schemas.includes(importSchemaUrl.value)) {
    importSchemaUrl.value = "";
    return;
  }
  project.value.schemas.push(importSchemaUrl.value);
  importSchemaUrl.value = "";
}

function deleteSchema(schema: string) {
  const index = project.value.schemas.findIndex((e) => e == schema);
  if (index == -1) {
    return;
  }
  project.value.schemas.splice(index, 1);
}
</script>
