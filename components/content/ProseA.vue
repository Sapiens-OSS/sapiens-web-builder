<template>
  <NuxtLink class="font-semibold no-underline hover:underline tracking-wide" :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>
