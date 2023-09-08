<template>
  <div class="py-4 lg:px-4 px-2">
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
        class="flex hidden lg:block justify-between items-center"
        v-for="entry in Object.entries(values)"
      >
        <div class="flex text-white gap-x-2 items-center">
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
        <div class="flex flex-row justify-end">
          <button
            type="button"
            @click="() => removeValue(entry[0])"
            class="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Delete
            <TrashIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMod } from "~/composables/mod";
import dot from "dot-object";
import { TrashIcon } from "@heroicons/vue/24/outline";

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
}

function modifyValue(k, v){
  values.value[k] = v;
}

function removeValue(k){
  delete values.value[k];
}
</script>
