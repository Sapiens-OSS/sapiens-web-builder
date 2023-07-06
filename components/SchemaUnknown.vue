<template>
<div class="rounded-md background-tinted px-4 py-2 mx-4">
    <div class="flex">
      <div class="flex">
        <ExclamationTriangleIcon class="flex self-center h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-base text">Unknown type '{{props.schema.type}}' (key: {{props.schema._key}})</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'
const props = defineProps(['schema'])
</script>