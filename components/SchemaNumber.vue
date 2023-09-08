<template>
  <div class="">
    <label
      :for="props.schema._key"
      class="block text-sm font-medium leading-6 text-gray-900 text-white"
      >{{ props.schema.title || props.schema._key || "Error loading schema" }}
      <span
        v-if="props.schema._required"
        class="text-xs bg-orange-600 p-1 rounded-md text-white select-none"
        >Required</span
      >
    </label>
    <div class="mt-1">
      <input
        v-if="minLength != null && maxLength != null"
        type="range"
        :name="props.schema?._key"
        :id="props.schema._key"
        :min="minLength"
        :max="maxLength"
        :step="(maxLength - minLength) / 1000"
        v-model="number"
        class="block w-full appearance-none rounded-full cursor-pointer bg-gray-800 h-2 my-2 text-orange-600 focus:bg-gray-700"
        :placeholder="
          props.schema.examples
            ? `e.g. ${props.schema.examples.join(', ')}`
            : ''
        "
        :aria-describedby="`${props.schema._key}-description`"
      />
      <input
        v-else
        type="number"
        :name="props.schema?._key"
        :id="props.schema._key"
        v-model="number"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 bg-gray-800 text-white"
        :placeholder="
          props.schema.examples
            ? `e.g. ${props.schema.examples.join(', ')}`
            : ''
        "
        :aria-describedby="`${props.schema._key}-description`"
      />
      <span
        v-if="minLength != null && maxLength != null"
        class="inline-flex items-center rounded-md bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-500 ring-1 ring-inset ring-orange-400/20"
        >Value: {{ number }}</span
      >
    </div>
    <p
      class="mt-1 text-sm text-gray-400 max-w-sm truncated"
      :id="`${props.schema._key}-description`"
    >
      {{ props.schema.description }}
    </p>
  </div>
</template>

<script setup>
import { useMod } from "~/composables/mod";
import dot from "dot-object";

const mod = useMod();
const props = defineProps(["schema", "target"]);
const number = computed({
  get() {
    return dot.pick(props.target, mod.value);
  },
  set(e) {
    dot.str(props.target, e, mod.value);
  },
});
if (!number.value) {
  dot.str(props.target, props.schema?.default ?? 0, mod.value);
}

const minLength = props.schema?.minimum ?? props.schema?.minLength;
const maxLength = props.schema?.maximum ?? props.schema?.maxLength;
</script>
