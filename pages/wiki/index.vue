<template>
  <div class="relative h-screen bg-gray-900">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div
        class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"
      >
        <div class="mx-auto max-w-2xl lg:mx-0">
          <img
            class="h-11"
            src="@/assets/img/logo.png"
            alt="Hammerstone Web Builder Logo"
          />
          <h1
            class="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl"
          >
            Let's get you started...
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-400">
            Documentation on how to make Sapiens mods, the simple way. The Hammerstone Web Builder is by far the easiest way to add your content into Sapiens.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >Get started <span aria-hidden="true">→</span></a
            >
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
              >Learn more <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
      <div
        class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
      >
        <img
          class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs",
});
</script>
