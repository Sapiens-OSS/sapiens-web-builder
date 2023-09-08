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
          Add Item
        </button>
      </div>
    </div>
    <div class="space-y-3 py-4">
      <div
        class="flex flex-col lg:flex-row"
        v-for="(entry, entryIndex) in arr.map((_, i) => {
          return {
            ...(Array.isArray(props.schema.items)
              ? props.schema.items[0]
              : props.schema.items),
            _target: `${props.target}[${i}]`,
            title: `${props.schema._key} #${i + 1}`,
          };
        })"
      >
        <div
          class="grow flex flex-col lg:ml-2 ring-1 ring-gray-800 shadow-md rounded-lg p-2 space-y-2"
        >
          <!-- Handle edge cases -->
          <SchemaGroup
            v-if="
              props.schema.items?.properties ||
              props.schema.items?.[0]?.properties
            "
            :schema="entry"
            :target="entry._target"
            :level="1"
          />
          <SchemaGeneric v-else :element="entry" />
          <div class="w-full flex flex-row justify-end">
            <button
              type="button"
              @click="() => remove(entryIndex)"
              class="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Delete
              <TrashIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMod } from "~/composables/mod";
import { computed } from "vue";
import dot from "dot-object";
import { TrashIcon } from "@heroicons/vue/24/outline";

const mod = useMod();
const props = defineProps(["schema", "target"]);

const minLength =
  props.schema?.minimum ??
  props.schema?.minLength ??
  props.schema?.items?.minimum;
const maxLength =
  props.schema?.maximum ??
  props.schema?.maxLength ??
  props.schema?.items?.maximum;

if (!dot.pick(props.target, mod.value)) {
  dot.str(props.target, Array(minLength || 0).fill(null), mod.value);
}
// TODO: Watch only target prop
watch(props, (n) => {
  if (!dot.pick(n.target, mod.value)) {
    dot.str(n.target, Array(minLength || 0), mod.value);
  }
});
const arr = computed(() => dot.pick(props.target, mod.value));

function add(e) {
  if (maxLength && arr.value.length + 1 > maxLength) return;
  arr.value.push(null);
}

function remove(i) {
  if (minLength && arr.value.length - 1 < minLength) return;
  dot.delete(`${props.target}[${i}]`, mod.value);
}
</script>
