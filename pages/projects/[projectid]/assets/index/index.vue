<template>
  <div class="flex h-full justify-center items-center">
    <div class="text-center">
      <svg
        class="mx-auto h-12 w-12 text-zinc-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>

      <h3 class="mt-2 text-sm font-semibold text-zinc-100">
        No asset selected
      </h3>
      <p class="mt-1 text-sm text-zinc-400">
        Get started selecting a config or creating a new one.
      </p>
      <div class="mt-6">
        <button
          @click="() => emit('create')"
          type="button"
          class="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Asset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["create"]);
</script>
