<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
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
          class="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity"
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
              class="relative transform overflow-hidden rounded-lg bg-zinc-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div>
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
                    >New Project</DialogTitle
                  >
                  <div class="mt-2">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-zinc-100"
                        >Project Name</label
                      >
                      <div class="mt-2">
                        <input
                          v-model="projectName"
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full rounded-md border-0 py-1.5 bg-zinc-700 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                          placeholder="My New Project"
                          aria-describedby="name-description"
                        />
                      </div>
                      <p
                        class="mt-2 text-sm text-zinc-400"
                        id="name-description"
                      >
                        This cannot be changed later.
                      </p>
                    </div>
                    <h1
                      class="mt-3 text-base text-center font-semibold leading-6 text-zinc-100"
                    >
                      Storage Location
                    </h1>
                    <RadioGroup class="mt-2" v-model="projectStorage">
                      <RadioGroupLabel class="sr-only"
                        >Storage location</RadioGroupLabel
                      >
                      <div class="space-y-4">
                        <RadioGroupOption
                          as="template"
                          v-for="(source, sourceIdx) in projectSources"
                          :key="source.name()"
                          :value="sourceIdx"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              active
                                ? 'border-orange-500 ring-2 ring-orange-600'
                                : 'border-zinc-600',
                              'relative block cursor-pointer rounded-lg border bg-zinc-700 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
                            ]"
                          >
                            <span class="flex items-center">
                              <span class="flex flex-col text-sm">
                                <RadioGroupLabel
                                  as="span"
                                  class="font-medium text-gray-100"
                                  >{{ source.name() }}</RadioGroupLabel
                                >
                                <RadioGroupDescription
                                  as="span"
                                  class="text-zinc-400"
                                >
                                  {{ source.description() }}
                                </RadioGroupDescription>
                              </span>
                            </span>
                            <span
                              :class="[
                                active ? 'border' : 'border-2',
                                checked
                                  ? 'border-orange-500'
                                  : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-lg',
                              ]"
                              aria-hidden="true"
                            />
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div
                class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:col-start-2"
                  @click="createProject"
                >
                  Confirm
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import { FolderPlusIcon } from "@heroicons/vue/24/outline";
import { PROJECT_SOURCES } from "~/scripts/project";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const projectSources = ref(PROJECT_SOURCES);

const open = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("update:modelValue", v);
  },
});
const projectName = ref("");
const projectStorage = ref(0);
const router = useRouter();

const notifications = useNotifications();

function createProject() {
  try {
    const id = projectSources.value[projectStorage.value].newProject(
      projectName.value
    );
    router.push(`/projects/${id}/`);
  } catch (e) {
    notifications.value.push({
      uuid: crypto.randomUUID(),
      type: NotificationType.TEXT,
      title: "An error occurred while creating project",
      description: e.toString(),
    });
  }
}

watch(
  () => props.modelValue,
  (v, o) => {
    if (v) {
      projectName.value = "";
      projectStorage.value = 0;
    }
  }
);
</script>
