<template>
  <div class="min-h-screen h-full w-full bg-zinc-900 flex flex-row items-stretch overflow-hidden">
    <nav class="backdrop-blur-xl flex flex-col gap-y-4 p-3">
        <img src="@/assets/icon.png" class="w-12 h-12" />
    </nav>
    <main class="grow">
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
      {{ navigation }}
    </main>
  </div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

definePageMeta({
  layout: false,
});
</script>
