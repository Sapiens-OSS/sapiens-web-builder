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
      <nav class="mt-8">
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
      class="sticky top-0 z-10 flex items-center gap-x-6 bg-zinc-900 px-6 py-6 shadow-sm sm:px-6 lg:hidden"
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
    </div>

    <main class="lg:pl-20 bg-zinc-900 flex min-h-screen">
      <LazyNuxtPage :navigation="navigation[selectedPage]" />
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
} from "~/scripts/project";
import { Schema } from "~/scripts/schemas";
import { cleanSchemaName } from "~/scripts/utils/cleanSchemaName";
import { mapSchemaIcon } from "~/scripts/utils/mapSchemaIcon";

// Globals
const route = useRoute();
const router = useRouter();
const partialProject: PartiallyLoadedProject = route.meta
  .project as PartiallyLoadedProject;
const project: Ref<FullyLoadedProject> = useState('project', () => partialProject.projectSource.loadProject(
  partialProject.id
));
const schemas: Ref<{ [key: string]: Schema | null }> = ref({});

// Utilities
const constructProjectPath = (path: string) => `/projects/${project.value.id}${path}`;
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

  return base;
}

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
const sidebarOpen = ref(false);

// Nuxt setup
definePageMeta({
  layout: false,
  middleware: "check-valid-project",
});
router.afterEach(() => {
  sidebarOpen.value = false;
});

// Lazy loading
loadSchemas();
</script>
