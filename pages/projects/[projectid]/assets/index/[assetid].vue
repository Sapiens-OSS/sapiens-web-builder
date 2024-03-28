<template>
  <div v-if="asset.data.type.startsWith('image')">
    <img :src="objectUrl" />
  </div>
  <button
    v-else
    @click="() => saveAs(asset.data, asset.filename)"
    class="text-zinc-100"
  >
    Download
  </button>
</template>

<script setup lang="ts">
import { type Asset, type FullyLoadedProject } from "~/scripts/project";
import { fetchObjectUrl } from "~/scripts/objectUrlManager";
import { saveAs } from "file-saver";

const route = useRoute();

const assetID = computed(() => route.params.assetid);
const assets: Ref<Asset[] | undefined> = useState("assets");
const project: Ref<FullyLoadedProject> = useState("project");

if (assets.value == undefined) {
  throw "Could not load assets global";
}

const asset = ref<Asset & { data: Blob }>(
  await project.value.projectSource.loadAsset(assetID.value.toString())
);

const objectUrl = computed(() =>
  fetchObjectUrl(asset.value.id, asset.value.data)
);
</script>
