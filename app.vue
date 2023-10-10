<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { LoadLocalStorage } from "./types/localStorage";
import { LoadDummyStorage } from "./types/dummy";

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Sapiens Web Builder` : `Sapiens Web Builder`,
});

LoadDummyStorage();
LoadLocalStorage();
</script>
