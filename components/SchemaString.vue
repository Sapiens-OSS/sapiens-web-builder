<template>
  <div v-if="schema.enum">
    <Listbox as="div" v-model="model">
      <ListboxLabel class="block text-sm font-medium leading-6 text-zinc-100">{{
        calculateSchemaTitle(props.schema)
      }}</ListboxLabel>
      <div class="relative mt-2">
        <div
          class="relative inline-flex overflow-hidden w-full cursor-default rounded-md bg-zinc-800/40 text-left text-zinc-200 shadow-sm ring-1 ring-inset ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
        >
          <ListboxButton class="py-1.5 pl-3 inline-flex justify-between grow">
            <span :class="[model ? '' : 'text-zinc-400', 'block truncate']">{{
              model || "No value selected."
            }}</span>
            <span class="pointer-events-none flex items-center pr-2">
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <span>
            <TrashIcon
              v-if="
                props.elementConfig?.deleteAction &&
                props.elementConfig?.allowedDelete()
              "
              @click="props.elementConfig?.deleteAction"
              class="aspect-square cursor-pointer h-9 p-2 bg-red-600"
            />
          </span>
        </div>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-800/80 backdrop-blur py-1 text-base shadow-lg ring-1 ring-zinc-700 ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="entry in schema.enum"
              :value="entry"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'bg-orange-600 text-white' : 'text-zinc-200',
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-bold' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ entry }}</span
                >

                <span
                  v-if="selected"
                  :class="[
                    active ? 'text-white' : 'text-orange-600',
                    'absolute inset-y-0 right-0 flex items-center pr-4',
                  ]"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
      <p class="mt-2 text-sm text-zinc-400" :id="`${componentID}-desc`">
        {{ props.schema.description ?? "No description provided." }}
      </p>
    </Listbox>
  </div>
  <div v-else>
    <label
      :for="componentID"
      class="inline-flex items-center gap-x-2 text-sm font-medium leading-6 text-zinc-100"
      >{{ calculateSchemaTitle(props.schema) }}

      <button
        v-if="props.elementConfig?.deleteAction"
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
        type="text"
        :name="componentID"
        :id="componentID"
        class="block w-full rounded-md bg-zinc-800/40 border-0 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        :placeholder="props.schema.examples?.join(', ') ?? 'An example value'"
        :aria-describedby="`${componentID}-desc`"
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
    emit("update:modelValue", value);
  },
});

model.value ??= props.schema.default ?? "";

const componentID = crypto.randomUUID();
</script>
