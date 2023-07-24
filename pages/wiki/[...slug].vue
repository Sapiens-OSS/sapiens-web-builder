<template>
  <div
    class="px-4 sm:px-6 lg:px-8"
  >
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="mx-auto text-base leading-7 text-gray-700 lg:py-10">
          <div
            class="flex mt-5 prose prose-md prose-invert text-gray-400 prose-orange prose-headings:not-prose"
          >
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </template>
      <template #empty>
        <main
          class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-8 sm:py-32 lg:px-8"
        >
          <p class="text-base font-semibold leading-8 text-orange-600">
            Oh no...
          </p>
          <h1
            class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl"
          >
            Page coming soon!
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-400">
            Unfortunately, this page is empty. Please check back later.
          </p>
        </main>
      </template>
      <template #not-found>
        <main
          class="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-8 sm:py-32 lg:px-8"
        >
          <p class="text-base font-semibold leading-8 text-orange-600">404</p>
          <h1
            class="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl"
          >
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the article you’re looking for.
          </p>
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
