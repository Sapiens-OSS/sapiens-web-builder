<template>
  <div class="rounded-md bg-red-600/5 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-600" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-600">
          Unknown schema type: {{ props.schema.type }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["schema"]);
</script>
