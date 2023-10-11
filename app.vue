<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <NotificationStack />
</template>

<script setup>
import { LoadLocalStorage } from "./scripts/localStorage";
import { LoadDummyStorage } from "./scripts/dummy";

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Sapiens Web Builder` : `Sapiens Web Builder`,
});

LoadDummyStorage();
LoadLocalStorage();
</script>
