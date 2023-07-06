<template>
  <div class="lg:px-4 px-2">
    <label
      :for="props.schema._key"
      class="block text-sm font-medium leading-6 text-gray-900 text-white"
      >{{ props.schema.title || props.schema._key || "Error loading schema" }}
      <span
        v-if="props.schema._required"
        class="text-xs bg-red-500/70 p-1 rounded-md text-white select-none"
        >Required</span
      >
    </label>
    <div class="mt-1">
      <Listbox v-if="schema?.enum" as="div" v-model="text">
        <div class="relative mt-2">
          <ListboxButton
            class="relative w-full cursor-default rounded-md bg-gray-800 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
          >
            <span class="block truncate">{{ text }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                as="template"
                v-for="option in schema.enum"
                :value="option"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'bg-orange-600 text-white' : 'text-white',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ option }}</span
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
      </Listbox>
      <input
        v-else
        type="text"
        :name="props.schema?._key"
        :id="props.schema._key"
        v-model="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 bg-gray-800 text-white"
        :placeholder="
          props.schema.examples
            ? `e.g. ${props.schema.examples.join(', ')}`
            : ''
        "
        :aria-describedby="`${props.schema._key}-description`"
      />
    </div>
    <p
      class="mt-1 text-sm text-gray-400 max-w-full truncate"
      :id="`${props.schema._key}-description`"
    >
      {{ props.schema.description }}
    </p>
  </div>
</template>

<script setup>
import { useMod } from "~/composables/shared";
import dot from "dot-object";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const mod = useMod();
const props = defineProps(["schema", "target"]);
const text = computed({
  get() {
    return dot.pick(props.target, mod.value);
  },
  set(e) {
    dot.str(props.target, e, mod.value);
  },
});
if (!text.value) {
  dot.str(
    props.target,
    props.schema?.default ?? props.schema?.enum?.[0] ?? "",
    mod.value
  );
}
</script>
