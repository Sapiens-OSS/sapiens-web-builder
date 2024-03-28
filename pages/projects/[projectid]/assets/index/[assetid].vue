<template>
  <img :src="urlCreator.createObjectURL(asset.data)" />
</template>

<script setup lang="ts">
import { type Asset, type FullyLoadedProject } from "~/scripts/project";

const route = useRoute();

const assetID = computed(() => route.params.assetid);
const assets: Ref<Asset[] | undefined> = useState("assets");
const project: Ref<FullyLoadedProject> = useState("project");

const urlCreator = window.URL || window.webkitURL;

if (assets.value == undefined) {
  console.log("lol");
  throw "Could not load assets global";
}

const asset = ref<(Asset & { data: Blob })>(
  await project.value.projectSource.loadAsset(assetID.value.toString())
);
</script>
