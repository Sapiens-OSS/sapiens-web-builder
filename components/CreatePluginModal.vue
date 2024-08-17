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
              class="relative w-full transform rounded-lg bg-zinc-900 px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <form @submit.prevent="createPlugin">
                <div class="flex flex-row items-center justify-between">
                  <div>
                    <DialogTitle
                      as="h3"
                      class="text-base text-left font-semibold leading-6 text-zinc-100"
                      >New Plugin</DialogTitle
                    >
                  </div>
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/5"
                  >
                    <PuzzlePieceIcon
                      class="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div class="mt-3 sm:mt-5">
                  <div class="mt-2">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-zinc-100"
                        >Plugin Name</label
                      >
                      <div class="mt-2">
                        <input
                          v-model="pluginName"
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full rounded-md border-0 py-1.5 bg-zinc-800 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                          placeholder="myPlugin"
                        />
                      </div>
                    </div>
                  </div>

                  <Listbox class="mt-2" as="div" v-model="pluginType">
                    <ListboxLabel
                      class="block text-sm font-medium leading-6 text-zinc-100"
                      >Script Type</ListboxLabel
                    >
                    <div class="relative mt-2">
                      <div
                        class="relative inline-flex overflow-hidden w-full cursor-default rounded-md bg-zinc-800/40 text-left text-zinc-200 shadow-sm ring-1 ring-inset ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
                      >
                        <ListboxButton
                          class="py-1.5 pl-3 inline-flex justify-between grow"
                        >
                          <span
                            :class="[
                              pluginType ? '' : 'text-zinc-400',
                              'block truncate',
                            ]"
                            >{{
                              pluginPrettyNames[pluginType] ||
                              "No value selected."
                            }}</span
                          >
                          <span
                            class="pointer-events-none flex items-center pr-2"
                          >
                            <ChevronUpDownIcon
                              class="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>
                      </div>

                      <transition
                        leave-active-class="transition ease-in duration-100"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <ListboxOptions
                          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-800/80 backdrop-blur py-1 text-base shadow-lg ring-1 ring-zinc-700 ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <ListboxOption
                            as="template"
                            v-for="[id, name] in Object.entries(
                              pluginPrettyNames
                            )"
                            :value="id"
                            v-slot="{ active, selected }"
                          >
                            <li
                              :class="[
                                active
                                  ? 'bg-orange-600 text-white'
                                  : 'text-zinc-200',
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-bold' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ name }}</span
                              >

                              <span
                                v-if="selected"
                                :class="[
                                  active ? 'text-white' : 'text-orange-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                ]"
                              >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                              </span>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                  <div v-if="pluginType === 'script'" class="mt-2">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-zinc-100"
                        >{{ nameMap[pluginType] }}</label
                      >
                      <div class="mt-2">
                        <input
                          v-model="pluginFilename"
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full rounded-md border-0 py-1.5 bg-zinc-800 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div
                      v-if="existingKeys.includes(pluginFilename)"
                      class="rounded-md bg-red-600/20 p-4 mt-4"
                    >
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <XCircleIcon
                            class="h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        </div>
                        <div class="ml-3">
                          <h3 class="text-sm font-medium text-red-500">
                            Creating this plugin will overwrite the existing
                            plugin with the same name.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Listbox
                    v-else-if="pluginType === 'generator'"
                    class="mt-2"
                    as="div"
                    v-model="pluginFilename"
                  >
                    <ListboxLabel
                      class="block text-sm font-medium leading-6 text-zinc-100"
                      >Generator Type</ListboxLabel
                    >
                    <div class="relative mt-2">
                      <div
                        class="relative inline-flex overflow-hidden w-full cursor-default rounded-md bg-zinc-800/40 text-left text-zinc-200 shadow-sm ring-1 ring-inset ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
                      >
                        <ListboxButton
                          class="py-1.5 pl-3 inline-flex justify-between grow"
                        >
                          <span
                            :class="[
                              pluginType ? '' : 'text-zinc-400',
                              'block truncate',
                            ]"
                            >{{ pluginFilename || "No value selected." }}</span
                          >
                          <span
                            class="pointer-events-none flex items-center pr-2"
                          >
                            <ChevronUpDownIcon
                              class="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>
                      </div>

                      <transition
                        leave-active-class="transition ease-in duration-100"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <ListboxOptions
                          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-800/80 backdrop-blur py-1 text-base shadow-lg ring-1 ring-zinc-700 ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <ListboxOption
                            as="template"
                            v-for="[url, schema] in validSchemas"
                            :value="schema?.exportDir"
                            v-slot="{ active, selected }"
                          >
                            <li
                              :class="[
                                active
                                  ? 'bg-orange-600 text-white'
                                  : 'text-zinc-200',
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-bold' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ schema?.title }}</span
                              >

                              <span
                                v-if="selected"
                                :class="[
                                  active ? 'text-white' : 'text-orange-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                ]"
                              >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                              </span>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
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
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  ChevronUpDownIcon,
  FolderPlusIcon,
  PuzzlePieceIcon,
} from "@heroicons/vue/24/outline";
import {
  PluginType,
  type FullyLoadedProject,
  type Plugin,
} from "~/scripts/project";
import { VersionController } from "~/scripts/versionController";
import { randomUUID } from "~/scripts/utils/randomNumber";
import { pluginPrettyNames, startingCode } from "~/scripts/plugins/strings";
import { XCircleIcon } from "@heroicons/vue/20/solid";
import type { Schema } from "~/scripts/schemas";
import plugin from "@tailwindcss/forms";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const router = useRouter();
const route = useRoute();

const project: Ref<FullyLoadedProject> = useState("project");
const schemas: Ref<{ [key: string]: Schema | null }> = useState("schemas");
const validSchemas = Object.entries(schemas.value).filter((e) => e[1] != null);

const open = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("update:modelValue", v);
  },
});
const pluginName = ref("");
const pluginFilename = ref("");
const pluginType = ref<PluginType>(PluginType.Script);

const nameMap: { [key: string]: string } = {
  [PluginType.Script]: "Script Filename",
  [PluginType.Generator]: "Generator Type",
};

const existingKeys = Object.entries(project.value.plugins)
  .filter((e) => e[1].type === "script")
  .map((e) => e[1].filename);

function createPlugin() {
  if (!project.value) return;
  const plugin: Plugin = {
    id: randomUUID(),
    type: pluginType.value,
    name: pluginName.value,
    filename: pluginFilename.value,
    code: startingCode,
  };
  if (plugin.type === "script") {
    // THERE CAN ONLY BE ONE
    const existing = Object.entries(project.value.plugins).find(
      (e) => e[1].filename === plugin.filename
    );
    if (existing) {
      delete project.value.plugins[existing[0]];
    }
  }
  project.value.plugins[plugin.id] = plugin;
  router.push({
    name: "projects-projectid-plugins-editor-id",
    params: Object.assign({}, route.params, { id: plugin.id }),
  });
}

watch(
  () => props.modelValue,
  (v, o) => {
    if (v) {
      pluginName.value = "";
    }
  }
);
</script>
