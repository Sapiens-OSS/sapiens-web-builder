<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LoadingIndictator />
</template>

<script setup>

fillOutTabs();

const token = getOrDefaultDocument("github", "pat", null);

if (token) {
  try {
    await updateGitHubUser(token);
  } catch (e) {}
}
</script>
