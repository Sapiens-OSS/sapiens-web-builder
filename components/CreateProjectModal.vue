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
              class="relative transform overflow-hidden rounded-lg bg-zinc-900 px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <form @submit.prevent="createProject">
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
                            class="block w-full rounded-md border-0 py-1.5 bg-zinc-800 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            placeholder="My New Project"
                            aria-describedby="name-description"
                          />
                        </div>
                        <p
                          class="mt-2 text-sm text-zinc-400"
                          id="name-description"
                        >
                          This can be changed later.
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
                                'relative block cursor-pointer rounded-lg border bg-zinc-800 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
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
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:col-start-2"
                  >
                    <span v-if="!projectLoading">Confirm</span>
                    <div v-else role="status">
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-transparent animate-spin fill-zinc-800"
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
              </form>
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
import { randomUUID } from "~/scripts/utils/randomNumber";

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

const projectLoading = ref(false);

const notifications = useNotifications();

async function createProject() {
  projectLoading.value = true;
  try {
    const id = await projectSources.value[projectStorage.value].newProject(
      projectName.value
    );
    const projectid = useState("partialproject", () => ({
      id,
      name: projectName.value,
      projectSource: projectSources.value[projectStorage.value],
    }));
    router.push(`/projects/${id}/`);
  } catch (e) {
    notifications.value.push({
      uuid: randomUUID(),
      type: NotificationType.TEXT,
      title: "An error occurred while creating project",
      description: e.toString(),
    });
  }
  projectLoading.value = false;
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
