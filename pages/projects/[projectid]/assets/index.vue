<template>
  <div class="flex flex-row grow">
    <aside
      class="hidden lg:block min-h-screen overflow-y-scroll border-r border-zinc-700 w-96"
    >
      <AssetDirectory
        :directory="directory"
        :selected-i-d="selectedID"
        @generateDirectory="() => generateDirectory()"
        @openCreateModal="() => (assetModal = true)"
        @select="(id) => selectAsset(id)"
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
    <main class="w-full grow max-w-screen overflow-x-hidden">
      <NuxtErrorBoundary>
        <template #default>
          <NuxtPage />
        </template>
        <template #error="{ error }">
          <main
            class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
          >
            <div class="text-center">
              <p class="text-base font-semibold text-orange-600">Oh no!</p>
              <h1
                class="mt-4 text-3xl font-bold tracking-tight text-zinc-200 sm:text-5xl"
              >
                Asset not found
              </h1>
              <p class="mt-6 text-base leading-7 text-zinc-400">
                Unfortunately the asset you're looking for couldn't be loaded.
              </p>
              <p class="mt-2 text-xs text-zinc-500">
                {{ error }}
              </p>
              <div class="mt-8 flex items-center justify-center gap-x-6">
                <button
                  @click="assetModal = true"
                  class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Create new asset
                </button>
              </div>
            </div>
          </main>
        </template>
      </NuxtErrorBoundary>
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
              <AssetDirectory
                :directory="directory"
                :selected-i-d="selectedID"
                directory-nav-id="mobile-directory-id"
                @generateDirectory="() => generateDirectory()"
                @openCreateModal="() => (assetModal = true)"
                @select="(id) => selectAsset(id)"
              />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
  <UploadAssetModal v-model="assetModal" @create="(id) => onCreateAsset(id)" />
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CircleStackIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  RectangleStackIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { type Asset, type FullyLoadedProject } from "~/scripts/project";

const project = useState<FullyLoadedProject>("project");

const assetModal = ref(false);
const drawerOpen = ref(false);
const selectedID = ref("");

const route = useRoute();
const router = useRouter();

const assets: Ref<Asset[] | undefined> = useState("assets");
const directory: Ref<{ [key: string]: Asset[] }> = ref({});

async function onCreateAsset(id: string) {
  await generateDirectory();
  selectAsset(id);
}

async function selectAsset(id: string) {
  router.push({
    name: "projects-projectid-assets-index-assetid",
    params: Object.assign({}, route.params, { assetid: id }),
  });
  selectedID.value = id;
  drawerOpen.value = false;
}

async function generateDirectory() {
  directory.value = {};
  assets.value = await project.value?.projectSource.fetchAssets();
  assets.value.forEach((asset) => {
    directory.value[asset.name[0].toUpperCase()] ??= [];
    directory.value[asset.name[0].toUpperCase()].push(asset);
  });
}

await generateDirectory();
</script>
