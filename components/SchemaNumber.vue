<template>
  <div v-if="schema.max && schema.min">
    <h1>BOIS WE GOT A WIZZER</h1>
  </div>
  <div v-else>
    <label
      :for="componentID"
      class="inline-flex items-center gap-x-2 text-sm font-medium leading-6 text-zinc-100"
      >{{ calculateSchemaTitle(props.schema) }}

      <button
        v-if="
          props.elementConfig?.deleteAction &&
          props.elementConfig?.allowedDelete()
        "
        @click="props.elementConfig?.deleteAction"
        type="button"
        class="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Delete
        <TrashIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
    </label>
    <div class="mt-2">
      <input
        type="number"
        :name="componentID"
        :id="componentID"
        class="block w-full rounded-md bg-zinc-800/40 border-0 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        :placeholder="'0'"
        :aria-describedby="`${componentID}-desc`"
        :max="maximum"
        :min="minimum"
        :step="bump"
        v-model="model"
      />
    </div>
    <p class="mt-2 text-sm text-zinc-400" :id="`${componentID}-desc`">
      {{ props.schema.description ?? "No description provided." }}
    </p>
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { TrashIcon } from "@heroicons/vue/24/outline";
import calculateSchemaTitle from "~/scripts/utils/calculateSchemaTitle";
import { randomUUID } from "~/scripts/utils/randomNumber";

const props = defineProps<{
  schema: any;
  modelValue: any;
  elementConfig?: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value == null) {
      emit("update:modelValue", undefined);
    } else {
      emit("update:modelValue", value);
    }
  },
});

const minimum = computed(() => props.schema.min ?? props.schema.minimum);
const maximum = computed(() => props.schema.max ?? props.schema.maximum);

// '?? undefined' is for readable clarity
model.value ??= props.schema.default ?? minimum.value ?? undefined;

const bump = computed(() => {
  if (minimum.value != null && maximum.value != null) {
    return (maximum.value - minimum.value) / 100;
  }
  return 1;
});

if (!model.value && minimum.value) {
  model.value = minimum.value;
}

const componentID = randomUUID();
</script>
