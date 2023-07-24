<script lang="ts">
import { defineComponent } from "#imports";

export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
});
</script>

<template>
  <div class="my-4 not-prose bg-gray-950 text-sm rounded-lg overflow-hidden">
    <div class="bg-orange-600/10 ring-2 ring-orange-600 w-full inline-flex items-center justify-between px-4 lg:px-16 py-3 text-sm text-white font-semibold">
      <span v-if="$props.filename">{{ $props.filename }}</span>
      <span v-if="$props.language">{{ $props.language }}</span>

    </div>
    <div class="py-4 px-4 lg:px-16">
      <slot />
    </div>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
