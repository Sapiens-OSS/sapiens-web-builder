<template>
  <div v-if="project">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-zinc-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6 pb-2 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-5 w-auto" src="@/assets/logo.png" alt="HWB" />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="-mx-2 flex-1 space-y-1">
                    <li v-for="(item, itemIdx) in navigation" :key="item.name">
                      <NuxtLink
                        v-if="!item.loading"
                        :to="constructProjectPath(item.path)"
                        :class="[
                          selectedPage == itemIdx
                            ? 'bg-orange-600/10 ring-1 ring-inset ring-orange-500 text-orange-500'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-700',
                          'group w-full flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                        ]"
                      >
                        <component
                          :is="item.icon"
                          class="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {{ item.name }}
                      </NuxtLink>
                      <div
                        v-else
                        class="bg-zinc-600 animate-pulse group w-full flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      >
                        <div class="h-6 w-6 shrink-0" aria-hidden="true" />
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-zinc-900 lg:pb-4 lg:border-r lg:border-zinc-700"
    >
      <div class="flex h-16 shrink-0 items-center justify-center">
        <img class="h-11 w-auto" src="@/assets/icon.png" alt="HWB" />
      </div>
      <div class="mt-2 px-2 h-7 flex items-center justify-center">
        <button
          v-if="!autosaver"
          @click="saveProject"
          type="button"
          className="rounded flex items-center justify-center bg-orange-600 h-full w-full px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <div v-if="saving">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-transparent animate-spin fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>Save</span>
        </button>
        <div
          v-else
          className="rounded flex items-center justify-center h-full w-full bg-zinc-800 border border-zinc-600 px-2 py-1 text-xs font-semibold text-zinc-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
        >
          <span
            class="inline-flex gap-x-1 items-center justify-center"
            v-if="autosaver.autosaving()"
          >
            Saving
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-2 h-2 text-transparent animate-spin fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </span>
          <span v-else> Saved </span>
        </div>
      </div>
      <nav class="mt-2">
        <ul role="list" class="flex flex-col items-center space-y-1">
          <li v-for="(item, itemIdx) in navigation" :key="item.name">
            <NuxtLink
              v-if="!item.loading"
              :to="constructProjectPath(item.path)"
              :class="[
                selectedPage == itemIdx
                  ? 'bg-orange-500/20 ring-1 ring-inset ring-orange-500 text-orange-500'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-700',
                'transition group flex flex-col items-center gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
              ]"
            >
              <component
                :is="item.icon"
                class="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
              <span class="text-xs truncate">{{
                item.name.split(" ")[0]
              }}</span>
            </NuxtLink>
            <div v-else class="p-3 bg-zinc-800 rounded-md">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-transparent animate-spin fill-orange-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="sticky top-0 z-10 flex items-center justify-center gap-x-6 bg-zinc-900 px-6 py-6 shadow-sm sm:px-6 lg:hidden"
      id="mobile-nav"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-white">
        {{ navigation[selectedPage]?.name ?? "Loading..." }}
      </div>
      <div class="px-2 h-7 flex items-center justify-center">
        <button
          v-if="!autosaver"
          @click="saveProject"
          type="button"
          className="rounded flex items-center justify-center bg-orange-600 h-full w-full px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <div v-if="saving">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-transparent animate-spin fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>Save</span>
        </button>
        <div
          v-else
          className="rounded flex items-center justify-center h-full w-full bg-zinc-800 border border-zinc-600 px-2 py-1 text-xs font-semibold text-zinc-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
        >
          <span
            class="inline-flex gap-x-1 items-center justify-center"
            v-if="autosaver.autosaving()"
          >
            Saving
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-2 h-2 text-transparent animate-spin fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </span>
          <span v-else> Saved </span>
        </div>
      </div>
    </div>

    <main class="lg:pl-20 bg-zinc-900 flex min-h-screen">
      <NuxtPage :navigation="navigation[selectedPage]" />
    </main>
  </div>
  <div
    class="flex min-h-screen w-full bg-zinc-900 justify-center items-center"
    v-else
  >
    <div class="flex flex-col items-center">
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-10 h-10 text-transparent animate-spin fill-orange-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <h1 class="mt-4 font-semibold text-zinc-200">Importing project...</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FunctionalComponent, HTMLAttributes, VNodeProps, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
  CubeTransparentIcon,
  FolderOpenIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { Asset, FullyLoadedProject, PartiallyLoadedProject } from "~/scripts/project";
import { Schema } from "~/scripts/schemas";
import { cleanSchemaName } from "~/scripts/utils/cleanSchemaName";
import { mapSchemaIcon } from "~/scripts/utils/mapSchemaIcon";
import { Autosaver } from "~/scripts/autosaver";

// Globals
const route = useRoute();
const router = useRouter();
const notifications = useNotifications();
const partialProject: PartiallyLoadedProject = route.meta
  .project as PartiallyLoadedProject;
const projectLoader = partialProject.projectSource.loadProject(
  partialProject.id
);
const project = useState<FullyLoadedProject | null>("project", () => null);
const assets = useState<Asset[] | undefined>("assets", () => undefined);

projectLoader.catch((e) => {
  notifications.value.push({
    type: NotificationType.TEXT,
    uuid: crypto.randomUUID(),
    title: "An error occurred while loading the project",
    description: e,
  });
  router.push("/projects");
});

projectLoader.then((e) => {
  project.value = e;

  // Autosaving setup
  if (project.value.projectSource.autosaveSupported()) {
    autosaver.value = new Autosaver(project.value);
    watch(
      project.value.files,
      () => {
        autosaver.value?.change();
        console.log("change");
      },
      { deep: true }
    );
  }
  // Lazy loading
  loadSchemas();
});

const schemas: Ref<{ [key: string]: Schema | null }> = useState(
  "schemas",
  () => ({})
);

// Utilities
const constructProjectPath = (path: string) =>
  project.value ? `/projects/${project.value.id}${path}` : `/projects`;
async function loadSchemas() {
  if (project.value == null) return;
  navigation.value = generateNavigation();
  const notificationID = crypto.randomUUID().toString();
  const notifications = useNotifications();
  notifications.value.push({
    uuid: notificationID,
    type: NotificationType.PROGRESS,
    title: "Downloading & importing schemas...",
    description:
      "Fetching project schemas and importing into the current project...",
    progress: 0,
  });

  const updateNotificationProgress = (v: number) =>
    (notifications.value[
      notifications.value.findIndex((e) => e.uuid == notificationID)
    ].progress = v);
  const destroyNotification = () =>
    notifications.value.splice(
      notifications.value.findIndex((e) => e.uuid == notificationID),
      1
    );
  const pushErrorNotification = () =>
    notifications.value.push({
      uuid: crypto.randomUUID().toString(),
      type: NotificationType.TEXT,
      title: "Failed to download & import schemas",
      description:
        "An error occured while trying to import a schema. Check browser console for more details.",
    });

  for (let i = 0; i < project.value.schemas.length; i++) {
    const schemaUrl = project.value.schemas[i];

    try {
      const schema = JSON.parse(await $fetch(schemaUrl)) as Schema;
      schema.title = cleanSchemaName(schema.title);
      schema.type = "object";

      // Store by URL for quick lookup later
      schemas.value[schemaUrl] = schema;

      updateNotificationProgress((i + 1 / project.value.schemas.length) * 100);
    } catch (e) {
      pushErrorNotification();
      console.error(e);
      schemas.value[schemaUrl] = null;
    }
  }

  destroyNotification();

  navigation.value = generateNavigation();

  const successNotificationID = crypto.randomUUID().toString();
  notifications.value.push({
    uuid: successNotificationID,
    type: NotificationType.TEXT,
    title: "Loaded project",
    description: "Loaded project into web builder!",
  });

  setTimeout(() => {
    notifications.value.splice(
      notifications.value.findIndex((e) => e.uuid == successNotificationID),
      1
    );
  }, 2000);
}
function generateNavigation() {
  const base: Array<{
    name: string;
    path: string;
    icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
    loading: boolean;
  }> = [
    {
      name: "Home",
      path: "/home",
      icon: HomeIcon,
      loading: false,
    },
  ];

  if (project.value) {
    if (project.value.projectSource.assetsSupported()) {
      base.push({
        name: "Assets",
        path: "/assets",
        icon: FolderOpenIcon,
        loading: false,
      });
    }

    project.value.schemas.forEach((url) => {
      if (schemas.value[url] !== undefined) {
        const schema = schemas.value[url];
        if (schema == null) {
          return;
        }
        base.push({
          name: schema.title,
          path: `/editor/${schema.$id}`,
          icon: mapSchemaIcon(schema.title) ?? CubeTransparentIcon,
          loading: false,
        });
      } else {
        base.push({
          name: "Schema loading...",
          path: "",
          // Dummy icon (isn't used)
          loading: true,
        });
      }
    });
  } else {
    base.push({
      name: "Schema loading...",
      path: "",
      // Dummy icon (isn't used)
      loading: true,
    });
  }

  base.push({
    name: "Export",
    path: "/export",
    icon: ArrowDownTrayIcon,
    loading: false,
  });

  return base;
}

// Autosaving
const autosaver = ref<Autosaver | undefined>();

// Rendering
const navigation = ref(generateNavigation());
const selectedPage = computed(() => {
  const route = useRoute();
  for (let i = 0; i < navigation.value.length; i++) {
    if (
      route.path
        .replace(/\/$/, "")
        .startsWith(constructProjectPath(navigation.value[i].path))
    ) {
      return i;
    }
  }
  return -1;
});

function saveProject() {
  if (!project.value || saving.value) return;
  saving.value = true;
  project.value.projectSource
    .saveProject(project.value)
    .catch((e) => {
      notifications.value.push({
        uuid: crypto.randomUUID(),
        type: NotificationType.TEXT,
        title: "Error saving project",
        description: e,
      });
    })
    .finally(() => {
      saving.value = false;
    });
}

// State
const sidebarOpen = ref(false);
const saving = ref(false);

// Nuxt setup
definePageMeta({
  layout: false,
  middleware: "check-valid-project",
});
useHead({
  title: project.value
    ? `${project.value.name} / ${project.value.projectSource.name()}`
    : null,
});
router.afterEach(() => {
  sidebarOpen.value = false;
});
</script>
