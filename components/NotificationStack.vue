<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"
  >
    <div
      class="flex w-full flex-col items-center space-y-4 sm:items-end"
      id="notification-stack"
    >
      <TransitionGroup
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-zinc-900 shadow-lg ring-1 ring-zinc-700 ring-opacity-20"
          v-for="ntc in notifications"
          :key="ntc.uuid"
        >
          <div v-if="ntc.type == 'text'">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <InformationCircleIcon
                    class="h-6 w-6 text-orange-400"
                    aria-hidden="true"
                  />
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-zinc-100">
                    {{ ntc.title }}
                  </p>
                  <p class="mt-1 text-sm text-zinc-400">
                    {{ ntc.description }}
                  </p>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    @click="
                      notifications = notifications.filter(
                        (e) => e.uuid != ntc.uuid
                      )
                    "
                    class="inline-flex rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="ntc.type == 'actions'">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <QuestionMarkCircleIcon
                    class="h-6 w-6 text-orange-400"
                    aria-hidden="true"
                  />
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-zinc-100">
                    {{ ntc.title }}
                  </p>
                  <p class="mt-1 text-sm text-zinc-400">
                    {{ ntc.description }}
                  </p>
                  <div class="mt-3 flex space-x-7">
                    <NuxtLink
                      v-for="action in ntc.actions"
                      type="button"
                      :to="action.link"
                      :class="[
                        action.style == 'accent'
                          ? 'text-orange-400 hover:text-orange-500'
                          : 'text-zinc-400 hover:text-zinc-500',
                        'rounded-md text-sm font-bold',
                      ]"
                    >
                      {{ action.name }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    @click="
                      notifications = notifications.filter(
                        (e) => e.uuid != ntc.uuid
                      )
                    "
                    class="inline-flex rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="ntc.type == 'progress'">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
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
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-zinc-100">
                    {{ ntc.title }}
                  </p>
                  <p class="mt-1 text-sm text-zinc-400">
                    {{ ntc.description }}
                  </p>
                  <div class="bg-zinc-600 mt-2 rounded-full overflow-hidden">
                    <div
                      class="transition-all duration-1000 bg-orange-600 h-1"
                      :style="{ width: `${ntc.progress}%` }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/20/solid";
const notifications = useNotifications();
</script>
