<template>
  <Listbox
    as="div"
    :modelValue="props.modelValue"
    @update:modelValue="(v: AssetType) => emit('update:modelValue', v)"
  >
    <ListboxLabel class="block text-sm font-medium leading-6 text-zinc-100"
      >Asset type</ListboxLabel
    >
    <div class="relative mt-2">
      <div
        class="relative inline-flex overflow-hidden w-full cursor-default rounded-md bg-zinc-800/40 text-left text-zinc-200 shadow-sm ring-1 ring-inset ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
      >
        <ListboxButton class="py-1.5 pl-3 inline-flex justify-between grow">
          <span class="text-zinc-200 block truncate">{{
            AssetTypeIDToPretty[props.modelValue]
          }}</span>
          <span class="pointer-events-none flex items-center pr-2">
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
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
            v-for="entry in Object.entries(AssetTypePrettyToID)"
            :value="entry[1]"
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
                >{{ entry[0] }}</span
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
    <!--
    <p class="mt-2 text-sm text-zinc-400" :id="`${componentID}-desc`">
      {{ props.schema.description ?? "No description provided." }}
    </p>
    -->
  </Listbox>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/24/outline";

import {
  AssetType,
  AssetTypeIDToPretty,
  AssetTypePrettyToID,
} from "~/scripts/project";

const props = defineProps<{
  modelValue: AssetType;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: AssetType): void;
}>();
</script>
