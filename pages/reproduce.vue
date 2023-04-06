<template>
  <div
    v-for="(item, itemIndex) in Array(5)
      .fill(0)
      .map((e, i) => Object.assign(externalData, { _index: i }))"
  >
    <component :is="`div-${itemIndex}`" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const externalData = ref({ _foo: "bar" });
</script>
