<template>
  <div class="m-3">
    <div class="relative flex gap-3 items-center">
      <input
        type="text"
        name="search"
        id="search"
        v-model="search"
        placeholder="Search items..."
        class="block w-full rounded-md bg-gray-900 text-gray-400 border-slate-600 pr-12 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
      />
      <button
        type="button"
        @click="props.new"
        class="inline-flex items-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      >
        <PlusIcon class="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        v-if="close"
        @click="close"
        class="inline-flex items-center p-1"
      >
        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
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
        class="sticky top-0 z-10 border-t border-b border-gray-700 bg-gray-800 px-6 py-1 text-sm font-medium text-gray-500"
      >
        <h3 class="text-white">{{ letter }}</h3>
      </div>
      <ul role="list" class="relative z-0">
        <li
          v-for="item in props.directory[letter]"
          :key="item.index"
          class="bg-gray-900 group"
        >
          <div
            :class="[
              selected == item.index ? 'border-l-4 border-orange-600' : '',
              'hover:bg-gray-800 transition relative flex items-center space-x-3 px-6 py-5 ',
            ]"
          >
            <div class="min-w-0 flex w-full flex-row justify-between">
              <button
                class="focus:outline-none h-9"
                @click="selected = selected == item.index ? -1 : item.index"
              >
                <!-- Extend touch target to entire panel -->
                <div class="absolute inset-0 right-1/3 z-0" />
                <p
                  :class="[
                    selected == item.index ? 'font-semibold' : 'font-medium',
                    'text-sm text-white',
                  ]"
                >
                  {{ item.name }}<span class="text-gray-500">.json</span>
                </p>
                <p class="truncate text-sm text-gray-400">{{ item.tag }}</p>
              </button>
              <div class="flex flex-row space-x-1 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  @click="() => props.edit(item.index)"
                  class="text-gray-500 bg-gray-500/20 rounded-xl p-2"
                >
                  <PencilIcon class="w-5 h-5 z-50" />
                </button>
                <button
                  @click="() => props.delete(item.index)"
                  class="text-red-500 bg-red-500/20 rounded-xl p-2"
                >
                  <TrashIcon class="w-5 h-5 z-50" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { PencilIcon, TrashIcon } from "@heroicons/vue/20/solid";
import { XMarkIcon, PlusIcon } from "@heroicons/vue/24/outline";

const props = defineProps([
  "directory",
  "search",
  "selected",
  "close",
  "new",
  "edit",
  "delete",
]);
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