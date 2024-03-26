<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-50" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform w-full overflow-hidden rounded-lg bg-zinc-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <form @submit.prevent="upload">
                <div class="flex flex-col gap-y-4">
                  <div>
                    <button
                      type="button"
                      @click="() => fileOpener.click()"
                      class="transition group relative block w-full rounded-lg border-2 border-dashed border-gray-500 p-12 text-center hover:border-gray-400"
                    >
                      <FolderPlusIcon class="transition mx-auto h-12 w-12 text-gray-500 group-hover:text-gray-400" />
                      <span
                        class="transition mt-2 block text-sm font-semibold text-zinc-400 group-hover:text-zinc-300"
                        >Click here to upload file...</span
                      >
                      <span
                        v-if="selectedFile"
                        class="mt-1 block text-xs text-zinc-200 font-bold"
                      >
                        {{ selectedFile.split("\\").at(-1) }}
                      </span>
                    </button>
                    <input
                      v-on:change="onSelect"
                      ref="fileOpener"
                      accept="image/*,audio/*,.glb"
                      class="absolute -top-full"
                      type="file"
                      id="file-input"
                    />
                  </div>
                  <div class="mt-2">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-zinc-100"
                        >Filename</label
                      >
                      <div class="mt-2">
                        <input
                          v-model="filename"
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full rounded-md border-0 py-1.5 bg-zinc-700 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                          placeholder="my-asset.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
                >
                  <button
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-zinc-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-zinc-600 hover:bg-zinc-600 sm:col-start-1 sm:mt-0"
                    @click="open = false"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
                <div
                  v-if="loadingProgress != undefined"
                  class="w-full mt-4 h-2 bg-zinc-700 rounded-full overflow-hidden"
                >
                  <div
                    :style="{
                      width: `${loadingProgress}%`,
                    }"
                    class="transition-transform h-full bg-orange-600"
                  />
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, FolderPlusIcon } from "@heroicons/vue/24/outline";
import { type Asset, type FullyLoadedProject } from "~/scripts/project";
import { randomUUID } from "~/scripts/utils/randomNumber";

const props = defineProps(["modelValue"]);

const emits = defineEmits(["update:modelValue", "create"]);

const open = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("update:modelValue", v);
  },
});

const project = useState<FullyLoadedProject>("project");

const fileOpener = ref();
const selectedFile = ref();
const filename = ref("");

const loadingProgress: Ref<number | undefined> = ref(undefined);

function onSelect(v: Event) {
  selectedFile.value = (v.target as HTMLInputElement)?.value;
  filename.value = selectedFile.value.split("\\").at(-1);
}

async function upload() {
  if (!project.value) return;
  const fr = new FileReader();
  const file: File = fileOpener.value.files[0];
  const ab = await new Promise<ArrayBuffer>((r, j) => {
    fr.onload = (e) => {
      r(e.target?.result as ArrayBuffer);
    };
    fr.onprogress = (v) => {
      const progress = parseInt(`${(v.loaded / v.total) * 100}`, 10);
      loadingProgress.value = progress;
    };
    fr.readAsArrayBuffer(file);
  });
  const asset: Asset = {
    id: randomUUID(),
    name: filename.value,
    filename: selectedFile.value.split("\\").at(-1),
    data: new Blob([ab], { type: file.type }),
  };
  await project.value.projectSource.createAsset(asset);
  open.value = false;
  selectedFile.value = undefined;
  filename.value = "";
  loadingProgress.value = undefined;

  emits("create", asset.id);
}
</script>
