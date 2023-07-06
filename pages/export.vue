<template>
  <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Ready?<br />Download your mod.
      </h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
        Click the Download button and we'll package your mod up, all nice and
        neat. You'll have to extract it into your mods directory to play.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
        @click="downloadZip"
          type="button"
          class="inline-flex items-center gap-x-2 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Download ZIP
          <ArrowDownTrayIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ArrowDownTrayIcon } from "@heroicons/vue/20/solid";
const mod = useMod();

const files = computed(() => {
  return [
    {
      name: "modInfo.lua",
      content: `-- Made with the Sapiens Web Builder
local modInfo = {
	name = "${mod.value.index.name}",
	description = "This mod requires the Hammerstone Framework in order to function. ${mod.value.index.description}",
	version = "${mod.value.index.version}",
	type = "world",
	developer = "${mod.value.index.developer}",
}

return modInfo`,
    },
    ...Object.entries(mod.value)
      .map((e) => {
        if (e[0] == "index" || !e[1].files) return;
        return e[1].files.map((y) => {
          return {
            name: `hammerstone/${e[0]}/${y.filename}.json`,
            content: JSON.stringify(y),
          };
        });
      })
      .filter((e) => e)
      .flat(),
  ];
});

function downloadZip() {
  console.log(mod.value);
  const zip = new JSZip();
  files.value.forEach((file) => {
    zip.file(file.name, file.content);
  });
  zip
    .generateAsync({
      type: "blob",
    })
    .then(function (content) {
      saveAs(content, "mod.zip");
    });
}
</script>
