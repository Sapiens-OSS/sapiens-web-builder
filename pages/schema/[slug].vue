<template>
  <SearchableLayout
    :values="mod[slug].files"
    :structure="{ name: 'filename', icon: '_', tag: '_' }"
    :new="newFile"
    :edit="editFile"
    :delete="deleteFile"
    v-slot="{ selected }"
  >
    <div v-if="selected != -1" class="max-h-full overflow-y-scroll p-4">
      <SchemaGroup
        :schema="schema"
        :target="`${slug}.files[${selected}]`"
        :level="0"
      />
    </div>
    <div class="flex h-full w-full justify-center" v-else>
      <div class="flex flex-col self-center h-min text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
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
        <h3 class="mt-2 text-sm font-semibold text-white">No file selected</h3>
        <p class="mt-1 text-sm text-gray-400">
          Get started by creating a new file or selecting one.
        </p>
        <div class="mt-6">
          <button
            type="button"
            @click="newFile"
            class="hidden md:inline-flex items-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New File
          </button>
        </div>
      </div>
    </div>
  </SearchableLayout>
  <TransitionRoot as="template" :show="editObj?.index != null">
    <Dialog as="div" class="relative z-10" @close="editObj = null">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-950 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-base font-semibold leading-6 text-white"
                      >Change file name</DialogTitle
                    >
                    <div class="mt-2">
                      <div class="mt-2">
                        <input v-if="editObj?.name != null"
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full bg-gray-800 text-white rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                          placeholder="new_file"
                          aria-describedby="name-description"
                          v-model="editObj.name"
                        />
                      </div>
                      <p
                        class="mt-2 text-sm text-gray-500"
                        id="name-description"
                      >
                        Use a valid file name (no spaces or special characters).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-900 border-t border-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                  @click="applyEdit"
                >
                  Apply
                </button>
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500/20 sm:ml-3 sm:w-auto"
                  @click="editObj = null"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { useMod } from "~/composables/mod";
import { PlusIcon } from "@heroicons/vue/20/solid";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import * as randomWords from 'random-words';


const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const mod = useMod();
const tab = tabs.filter((e) => e.id == slug)[0];
if(!(tab && tab.filled)){
  router.push('/modinfo');
}
const schema = tab.schema;
mod.value[slug] ??= {};
mod.value[slug].files ??= [];

const editObj = ref(null);

function generateFilename(){
  return randomWords.generate(2).join('_');
}

function newFile() {
  let filename = generateFilename();
  mod.value[slug].files.forEach((e) => {
    if (e.filename == filename) {
      filename = generateFilename();
    }
  });
  
  mod.value[slug].files.push({
    filename,
  });
}

function editFile(index) {
  editObj.value = { index, name: mod.value[slug].files[index].filename };
}

function applyEdit() {
  mod.value[slug].files[editObj.value.index].filename = editObj.value.name;
  editObj.value = null;
}

function deleteFile(index) {
  mod.value[slug].files.splice(index, 1);
}
</script>
