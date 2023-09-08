<template>
  <div class="py-4">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-white">
          {{
            props.schema.title || props.schema._key || "Unable to load schema"
          }}
          <span
            v-if="props.schema._required"
            class="text-xs bg-orange-600 p-1 rounded-md text-white select-none"
            >Required</span
          >
        </h1>
        <p class="mt-2 text-sm text-gray-400">
          {{ props.schema.description || "No description provided." }}
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          @click="add"
          type="button"
          class="block rounded-md bg-amber-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Add Remap
        </button>
      </div>
    </div>
    <div class="space-y-3 py-4">
      <div
        class="flex justify-between items-center"
        v-for="entry in Object.entries(values)"
      >
        <div class="flex hidden lg:flex text-white gap-x-2 items-center">
          <input
            :value="entry[0]"
            @change="(e) => modifyKey(entry[0], e.target.value)"
            type="text"
            class="block rounded-md font-normal border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 bg-gray-800 text-white"
          />
          ->
          <input
            :value="entry[1]"
            @change="(e) => modifyValue(entry[0], e.target.value)"
            type="text"
            class="block rounded-md font-normal border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 bg-gray-800 text-white"
          />
        </div>
        <span class="block lg:hidden text-gray-200">
          {{ entry[0] }} -> {{ entry[1] }}
        </span>
        <div class="flex flex-row justify-end gap-x-1">
          <button
            @click="() => editRemapMobile(entry[0])"
            type="button"
            class="lg:hidden inline-flex gap-x-1.5 rounded-md bg-amber-600 px-2 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <PencilIcon class="h-5 w-5" />
          </button>
          <button
            type="button"
            @click="() => removeValue(entry[0])"
            class="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2 lg:px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <span class="hidden lg:block">Delete</span>
            <TrashIcon class="lg:-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="mobileEditTableTarget != null">
    <Dialog
      as="div"
      class="relative z-10"
      @close="mobileEditTableTarget = null"
    >
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
          class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full justify-center p-4 text-center items-start sm:p-0"
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
              class="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div class="text-white">
                <input
                  :value="mobileEditTableTarget"
                  @change="
                    (e) => {
                      mobileEditTableTarget = modifyKey(
                        mobileEditTableTarget,
                        e.target.value
                      );
                    }
                  "
                  type="text"
                  class="block rounded-md font-normal border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 bg-gray-900 text-white"
                />
                <div class="flex my-2 justify-center">
                  <ArrowDownIcon class="w-5 h-5" />
                </div>
                <input
                  :value="values[mobileEditTableTarget]"
                  @change="
                    (e) => modifyValue(mobileEditTableTarget, e.target.value)
                  "
                  type="text"
                  class="block rounded-md font-normal border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 bg-gray-900 text-white"
                />
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="mobileEditTableTarget = null"
                >
                  Finish
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
import dot from "dot-object";
import { TrashIcon, CheckIcon } from "@heroicons/vue/24/outline";
import { ArrowDownIcon, PencilIcon } from "@heroicons/vue/20/solid";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const mobileEditTableTarget = ref(null);

const props = defineProps(["schema", "target"]);
const mod = useMod();

console.log(props);

const values = computed({
  get() {
    return dot.pick(props.target, mod.value);
  },
  set(e) {
    dot.str(props.target, e, mod.value);
  },
});

if (!values.value) {
  values.value = {};
}

function add(e) {
  values.value["key"] = "value";
}

function modifyKey(exV, v) {
  values.value[v] = values.value[exV];
  delete values.value[exV];
  return v;
}

function modifyValue(k, v) {
  values.value[k] = v;
}

function removeValue(k) {
  delete values.value[k];
}

function editRemapMobile(k) {
  mobileEditTableTarget.value = k;
}
</script>
