<template>
  <button @click="() => printAsset()">Select Asset</button>
</template>

<script setup lang="ts">
import { type FullyLoadedProject } from "~/scripts/project";

const project = useState<FullyLoadedProject>("project");

async function printAsset() {
  console.log(await selectAsset());
}
</script>
