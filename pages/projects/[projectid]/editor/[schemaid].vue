<template>
  <div class="flex grow flex-row">
    <aside
      class="hidden lg:block h-screen overflow-y-scroll border-r border-zinc-700 w-96"
    >
      <Directory
        :navigation="props.navigation"
        :directory="directory"
        :selected-id="route.params.configid"
        @createConfig="() => (createConfigOpen = true)"
        @deleteConfig="(id) => (deleteConfigID = id)"
        @select="onDirectorySelect"
      />
    </aside>
    <ClientOnly>
      <Teleport to="#mobile-nav">
        <button @click="drawerOpen = true" type="button" class="text-gray-400">
          <span class="sr-only">Open sidebar</span>
          <RectangleStackIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </Teleport>
    </ClientOnly>
    <main class="w-full max-w-screen overflow-x-hidden">
      <NuxtPage @create="() => (createConfigOpen = true)" />
    </main>
  </div>

  <TransitionRoot as="template" :show="drawerOpen">
    <Dialog as="div" class="relative z-10" @close="drawerOpen = false">
      <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="translate-y-full"
          enter-to="translate-y-0"
          leave="ease-in duration-200"
          leave-from="translate-y-0"
          leave-to="translate-y-full"
        >
          <DialogPanel
            class="relative w-full h-full transform h-screen overflow-y-scroll bg-zinc-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
          >
            <ClientOnly>
              <Teleport to="#mobile-directory-id">
                <button
                  type="button"
                  class="rounded-md ml-3 text-zinc-100 hover:text-zinc-200"
                  @click="drawerOpen = false"
                >
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </Teleport>
            </ClientOnly>
            <div>
              <Directory
                :navigation="props.navigation"
                :directory="directory"
                :selected-id="route.params.configid"
                :directory-nav-id="'mobile-directory-id'"
                @createConfig="() => (createConfigOpen = true)"
                @deleteConfig="(id) => (deleteConfigID = id)"
                @select="onDirectorySelect"
              />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <CreateConfigModal
    v-model="createConfigOpen"
    :schemaid="route.params.schemaid"
  />
  <DeleteConfigModal
    v-model="deleteConfigID"
    :schemaid="route.params.schemaid"
  />
</template>

<script setup lang="ts">
import { RectangleStackIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { FullyLoadedProject, File } from "~/scripts/project";

const props = defineProps(["navigation"]);
const router = useRouter();
const route = useRoute();

const project: Ref<FullyLoadedProject> = useState("project");

const drawerOpen = ref(false);
const createConfigOpen = ref(false);
const deleteConfigID = ref(null);

const onDirectorySelect = (id: string) =>
  router.push({
    name: "projects-projectid-editor-schemaid-configid",
    params: Object.assign({}, route.params, { configid: id }),
  });

const directory = computed(() => {
  if (!project.value) return [];
  // Files are stored by schema ID
  const schemaID = route.params.schemaid.toString();
  const files: File[] = (project.value.files[schemaID] ?? []).sort((a, b) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  const dir: { [key: string]: File[] } = {};
  files.forEach((file) => {
    dir[file.name[0].toUpperCase()] ??= [];
    dir[file.name[0].toUpperCase()].push(file);
  });

  return dir;
});
</script>
