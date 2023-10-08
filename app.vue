<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { LoadLocalStorage } from "./composables/localStorage";

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Sapiens Web Builder` : `Sapiens Web Builder`,
});

LoadLocalStorage();
</script>
