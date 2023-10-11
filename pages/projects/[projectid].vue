<template>
  <!--
        This example requires updating your template:
    
        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      -->
  <div>
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
          <div class="fixed inset-0 bg-gray-900/80" />
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
                            ? 'bg-orange-600/10 ring-2 ring-inset ring-orange-500 text-orange-500'
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
      class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-zinc-900 lg:pb-4"
    >
      <div class="flex h-16 shrink-0 items-center justify-center">
        <img class="h-11 w-auto" src="@/assets/icon.png" alt="HWB" />
      </div>
      <nav class="mt-8">
        <ul role="list" class="flex flex-col items-center space-y-1">
          <li v-for="(item, itemIdx) in navigation" :key="item.name">
            <NuxtLink
              v-if="!item.loading"
              :to="constructProjectPath(item.path)"
              :class="[
                selectedPage == itemIdx
                  ? 'bg-orange-500/20 ring-2 ring-inset ring-orange-500 text-orange-500'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-700',
                'transition group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
              ]"
            >
              <component
                :is="item.icon"
                class="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
              <span class="sr-only">{{ item.name }}</span>
            </NuxtLink>
            <button
              v-else
              :class="[
                'transition bg-zinc-600 animate-pulse group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
              ]"
            >
              <div class="h-6 w-6 shrink-0" aria-hidden="true" />
              <span class="sr-only">{{ item.name }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
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
        Dashboard
      </div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-800"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>

    <main class="lg:pl-20 min-h-screen">
      <LazyNuxtPage />
    </main>
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
  Bars3Icon,
  CubeTransparentIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  FullyLoadedProject,
  PartiallyLoadedProject,
  fetchProjects,
} from "~/types/project";
import { Schema } from "~/types/schemas";

// Globals
const route = useRoute();
const router = useRouter();
const partialProject: PartiallyLoadedProject = route.meta
  .project as PartiallyLoadedProject;
const project: FullyLoadedProject = partialProject.projectSource.loadProject(
  partialProject.id
);
const schemas: Ref<{ [key: string]: Schema }> = ref({});

// Utilities
const constructProjectPath = (path: string) => `/projects/${project.id}${path}`;
async function loadSchemas() {
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

  for (let i = 0; i < project.schemas.length; i++) {
    const schemaUrl = project.schemas[i];
    const schema = JSON.parse(await $fetch(schemaUrl)) as Schema;

    // Store by URL for quick lookup later
    schemas.value[schemaUrl] = schema;

    updateNotificationProgress((i + 1 / project.schemas.length) * 100);
  }

  destroyNotification();

  navigation.value = generateNavigation();

  const successNotificationID = crypto.randomUUID().toString();
  notifications.value.push({
    uuid: successNotificationID,
    type: NotificationType.TEXT,
    title: "Loaded project successfully",
    description: "Successfully loaded project!",
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
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
    loading: boolean;
  }> = [
    {
      name: "Home",
      path: "",
      icon: HomeIcon,
      loading: false,
    },
  ];

  project.schemas.forEach((url) => {
    console.log(schemas);
    if (schemas.value[url]) {
      const schema: Schema = schemas.value[url];
      base.push({
        name: schema.title,
        path: `/editor/${schema.$id}`,
        icon: CubeTransparentIcon,
        loading: false,
      });
    } else {
      base.push({
        name: "Schema loading...",
        path: "",
        // Dummy icon (isn't used)
        icon: AcademicCapIcon,
        loading: true,
      });
    }
  });

  return base;
}

// Rendering
const navigation = ref(generateNavigation());
const selectedPage = computed(() => {
  const route = useRoute();
  for (let i = 0; i < navigation.value.length; i++) {
    if (
      route.path.replace(/\/$/, "") ==
      constructProjectPath(navigation.value[i].path)
    ) {
      return i;
    }
  }
  return -1;
});
const sidebarOpen = ref(false);

// Nuxt setup
definePageMeta({
  layout: false,
  middleware: "check-valid-project",
});

// Lazy loading
loadSchemas();
</script>
