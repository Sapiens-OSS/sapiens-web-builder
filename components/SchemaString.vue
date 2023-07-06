<template>
  <div class="lg:px-4 px-2">
    <label
      :for="props.schema._key"
      class="block text-sm font-medium leading-6 text-gray-900 text"
      >{{ props.schema.title || props.schema._key || "Error loading schema" }}
      <span
        v-if="props.schema._required"
        class="text-xs bg-red-500/70 p-1 rounded-md text-white select-none"
        >Required</span
      >
    </label>
    <div class="mt-1">
      <input
        type="text"
        :name="props.schema?._key"
        :id="props.schema._key"
        v-model="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6 background-tinted text"
        :placeholder="
          props.schema.examples
            ? `e.g. ${props.schema.examples.join(', ')}`
            : ''
        "
        :aria-describedby="`${props.schema._key}-description`"
      />
    </div>
    <p
      class="mt-1 text-sm text-tinted max-w-full truncate"
      :id="`${props.schema._key}-description`"
    >
      {{ props.schema.description }}
    </p>
  </div>
</template>

<script setup>
import { useMod } from "~/composables/shared";
import dot from "dot-object";

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
if (!text) {
  dot.str(props.target, "", mod.value);
}
</script>
