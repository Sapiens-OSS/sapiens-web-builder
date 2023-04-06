<template>
  <SearchableLayout
    :values="mod[slug].files"
    :structure="{ name: 'filename', icon: '_', tag: '_' }"
    v-slot="{ selected }"
  >
    <div v-if="selected != -1" class="max-h-full overflow-y-scroll p-4">
      <SchemaGroup :schema="JSON.parse(schema)" :target="`${slug}.files[${selected}]`" :level="0" />
    </div>
    <div class="flex h-full w-full justify-center" v-else>
      <div class="flex flex-col self-center h-min text-center">
        <svg
          class="mx-auto h-12 w-12 text-tinted"
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
        <h3 class="mt-2 text-sm font-semibold text">No files</h3>
        <p class="mt-1 text-sm text-tinted">
          Get started by creating a new file.
        </p>
        <div class="mt-6">
          <button
            type="button"
            @click="newFile"
            class="inline-flex items-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New File
          </button>
        </div>
      </div>
    </div>
  </SearchableLayout>
</template>

<script setup>
import { useMod } from "~/composables/shared";
import { PlusIcon } from '@heroicons/vue/20/solid'

const route = useRoute();
const slug = route.params.slug;
const mod = useMod();
const { data: schema } = await useFetch(mod.value[slug]._schema);
mod.value[slug].files = [];

function newFile(){
    mod.value[slug].files.push({
        filename: "myfile.json"
    })
}
</script>
