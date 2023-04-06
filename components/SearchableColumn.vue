<template>
  <div class="m-3">
    <div class="relative flex gap-3 items-center">
      <input
        type="text"
        name="search"
        id="search"
        v-model="search"
        placeholder="Search items..."
        class="block w-full rounded-md background text-tinted border-gray-300 dark:border-slate-600 pr-12 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
      />
      <button
        type="button"
        v-if="close"
        @click="close"
        class="inline-flex items-center p-1"
      >
        <XMarkIcon class="h-6 w-6 text" aria-hidden="true" />
      </button>
    </div>
  </div>
  <nav class="overflow-y-auto" aria-label="Directory">
    <div
      v-for="letter in Object.keys(props.directory)"
      :key="letter"
      class="relative"
    >
      <div
        class="sticky top-0 z-10 border-t border-b border-gray-200 dark:border-gray-700 background-tinted px-6 py-1 text-sm font-medium text-gray-500"
      >
        <h3 class="text">{{ letter }}</h3>
      </div>
      <ul role="list" class="relative z-0">
        <li
          v-for="item in props.directory[letter]"
          :key="item.index"
          class="background"
        >
          <div
            :class="[
              selected == item.index
                ? 'background-selected'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800',
              'relative flex items-center space-x-3 px-6 py-5 ',
            ]"
          >
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="item.icon" alt="" />
            </div>
            <div class="min-w-0 flex-1">
              <button
                class="focus:outline-none"
                @click="selected = selected == item.index ? -1 : item.index"
              >
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text">{{ item.name }}</p>
                <p class="truncate text-sm text-tinted">{{ item.tag }}</p>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["directory", "search", "selected", "close"]);
const emit = defineEmits(["update:search", "update:selected"]);

const search = computed({
  get() {
    return props.search;
  },
  set(value) {
    emit("update:search", value);
  },
});

const selected = computed({
  get() {
    return props.selected;
  },
  set(value) {
    emit("update:selected", value);
  },
});
</script>
