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
              class="relative w-full transform overflow-hidden rounded-lg bg-zinc-900 px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <form @submit.prevent="createConfig">
                <div
                  class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/5"
                >
                  <FolderPlusIcon
                    class="h-6 w-6 text-orange-500"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-base text-center font-semibold leading-6 text-zinc-100"
                    >New Config</DialogTitle
                  >
                  <p class="text-center text-zinc-400 text-sm mt-1">
                    {{ props.schemaid }}
                  </p>
                  <div class="mt-2">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-zinc-100"
                        >Config Name</label
                      >
                      <div class="mt-2">
                        <input
                          v-model="configName"
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full rounded-md border-0 py-1.5 bg-zinc-800 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                          placeholder="A Brand New Config"
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
                    class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:col-start-2"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-zinc-600 hover:bg-zinc-600 sm:col-start-1 sm:mt-0"
                    @click="open = false"
                  >
                    Cancel
                  </button>
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
import { FolderPlusIcon } from "@heroicons/vue/24/outline";
import { type File, type FullyLoadedProject } from "~/scripts/project";
import { VersionController } from "~/scripts/versionController";
import { randomUUID } from "~/scripts/utils/randomNumber";

const props = defineProps(["modelValue", "schemaid"]);
const emits = defineEmits(["update:modelValue"]);

const router = useRouter();
const route = useRoute();

const project: Ref<FullyLoadedProject> = useState("project");
const versionController = useState<VersionController>("vc");

const open = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("update:modelValue", v);
  },
});
const configName = ref("");

function createConfig() {
  if (!project.value) return;
  const newFile: File = {
    id: randomUUID().split("-").join("").substring(0, 12),
    name: configName.value,
    value: {},
  };
  project.value.files[props.schemaid] ??= [];
  project.value.files[props.schemaid].push(newFile);
  versionController.value.CDConfig();
  open.value = false;
  router.push({
    name: "projects-projectid-editor-schemaid-configid",
    params: Object.assign({}, route.params, { configid: newFile.id }),
  });
}

watch(
  () => props.modelValue,
  (v, o) => {
    if (v) {
      configName.value = "";
    }
  }
);
</script>
