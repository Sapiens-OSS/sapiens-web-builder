<template>
    <div
    class="mx-auto flex flex-col justify-items-center max-w-7xl px-4 sm:px-6 lg:px-8 mt-10"
  >
    <ContentDoc>
      <template v-slot="{ doc }">
        <div>
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-500">
              {{ doc.tag || "News" }}
            </p>
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
            >
              {{ doc.title }}
            </h1>
            <div class="max-w-2xl">
              <div
                class="flex mt-5 prose prose-md prose-invert prose-indigo prose-headings:not-prose"
              >
                <ContentRenderer :value="doc" />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #not-found>
        <main
          class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-8 sm:py-32 lg:px-8"
        >
          <p class="text-base font-semibold leading-8 text-indigo-600">404</p>
          <h1
            class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl"
          >
            Article not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the article you’re looking for.
          </p>
          <div class="mt-6">
            <NuxtLink
              to="/news"
              class="text-sm font-semibold leading-7 text-indigo-500"
              ><span aria-hidden="true">&larr;</span> Back to News</NuxtLink
            >
          </div>
        </main>
      </template>
    </ContentDoc>
  </div>

</template>

<script setup>
definePageMeta({
  layout: "docs",
});
</script>
