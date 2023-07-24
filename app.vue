<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LoadingIndictator />
</template>

<script setup>
const mod = useMod();
Object.entries(mod.value).forEach(async (e) => {
  if (e[1]._schema && !e[1]._schemaCache) {
    mod.value[e[0]]._schemaCache = await useFetch(e[1]._schema).data;
  }
});

async function loadElementFromGitHub(slug) {
  const hammerstoneDir = await $fetch(`https://api.github.com/repos/${slug}/contents/hammerstone`);
  await Promise.all(hammerstoneDir.map((e) => (async() => {
    
  })()));
}
</script>
