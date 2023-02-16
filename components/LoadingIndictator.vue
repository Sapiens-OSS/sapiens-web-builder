<template>
    <div v-if="show"
        class="absolute bottom-4 right-8 animate-bounce inline-flex items-center rounded-full border border-transparent bg-orange-600 p-3 text-white shadow-sm">
        <CubeTransparentIcon class="h-6 w-6" aria-hidden="true" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { CubeTransparentIcon } from '@heroicons/vue/24/outline'
const nuxtApp = useNuxtApp()
const show = ref(false);
nuxtApp.hook('page:start', () => {
    show.value = true;
});
nuxtApp.hook('page:finish', () => {
    show.value = false;
});
</script>