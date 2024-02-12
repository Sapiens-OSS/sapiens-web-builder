<template>
  <div class="grow relative isolate overflow-hidden">
    <div
      class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40"
    >
      <div class="px-6 lg:px-0 lg:pt-4">
        <div class="mx-auto max-w-2xl">
          <div class="max-w-lg">
            <img class="h-16" src="@/assets/icon.png" />
            <h1
              class="mt-10 text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl"
            >
              Ready. Set. Export!
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-400">
              Export to turn your project into an actual mod. Then, share with
              your new mod with the world!
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <button
                @click="zip"
                class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Export project
              </button>
              <NuxtLink
                href="#"
                class="text-sm font-semibold leading-6 text-zinc-100"
                >Documentation <span aria-hidden="true">→</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
      >
        <div
          class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-zinc-600/10 ring-1 ring-zinc-800 md:-mr-20 lg:-mr-36"
          aria-hidden="true"
        />
        <div class="shadow-lg md:rounded-3xl">
          <div
            class="bg-orange-200 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]"
          >
            <div
              class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-orange-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
              aria-hidden="true"
            />
            <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
              <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                  <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div
                      class="-mb-px flex text-sm font-medium leading-6 text-gray-400"
                    >
                      <div
                        class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
                      >
                        modinfo.lua
                      </div>
                      <div
                        v-for="file in preExport[1]"
                        class="border-r border-gray-600/10 px-4 py-2"
                      >
                        {{ file.id }}.json
                      </div>
                    </div>
                  </div>
                  <div class="pr-6 pb-14 text-zinc-100">
                    <highlightjs autodetect :code="preExport[0]" />
                  </div>
                </div>
              </div>
              <div
                class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { File, FullyLoadedProject } from "~/scripts/project";
import { Exporter } from "~/scripts/exporter/exporter";
import type { VersionController } from "~/scripts/versionController";
import JSZip from "jszip";
import FileSaver from "file-saver";
import type { Schema } from "~/scripts/schemas";

const project: Ref<FullyLoadedProject> = useState("project");
const versionController = useState<VersionController>("vc");
const schemas: Ref<{ [key: string]: Schema }> = useState("schemas");

const exporter: Exporter = new Exporter(project, versionController, schemas);

const preExport = computed(() => exporter.preExport() as [string, File[]]);

function zip() {
  const zip = new JSZip();
  const files = exporter.export();
  files.forEach((file) => {
    zip.file(file.filename, file.data);
  });
  zip.generateAsync({ type: "blob" }).then((data) => {
    FileSaver.saveAs(
      data,
      `${project.value.name.replace(" ", "-").toLowerCase()}.zip`
    );
  });
}
</script>

<style>
.hljs {
  background-color: transparent !important;
}
</style>
