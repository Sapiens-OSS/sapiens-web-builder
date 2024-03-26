<template>
  <!--  
    <NuxtPwaManifest />
    <PWASetup />
  -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <NotificationStack />
</template>

<script setup>
import { LoadLocalStorage } from "./scripts/localStorage";
import { LoadDummyStorage } from "./scripts/dummy";
import { LoadIndexedDBSource } from "./scripts/indexeddb";

const runtimeConfig = useRuntimeConfig();

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Sapiens Web Builder` : `Sapiens Web Builder`,
  link: [{ rel: "icon", href: `${runtimeConfig.app.baseURL}favicon.ico` }],
});

// LoadDummyStorage();
// LoadLocalStorage();
LoadIndexedDBSource();
</script>
