<script setup>
import { randomUUID } from "~/scripts/utils/randomNumber";

// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();

const notifications = useNotifications();

onMounted(() => {
  if ($pwa.offlineReady) {
    notifications.value.push({
      id: randomUUID(),
      type: NotificationType.TEXT,
      title: "App ready to work offline",
      description:
        "Sapiens Web Builder has been downloaded and is ready to work offline.",
    });
  }
});

watch($pwa.needRefresh, (v) => {
  if (v) {
    notifications.value.push({
      id: randomUUID(),
      type: NotificationType.ACTIONS,
      title: "Reload required",
      description: "Sapiens Web Builder has an update, and needs to reload.",
      actions: [
        {
          name: "Reload",
          style: "accent",
          action: () => $pwa.updateServiceWorker(),
        },
      ],
    });
  }
});
</script>

<template></template>
