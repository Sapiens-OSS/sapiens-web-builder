<template>
  <div>
    <div class="border-b border-zinc-700 pb-1">
      <div
        class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
      >
        <div class="ml-4 mt-4">
          <h3 class="text-base font-semibold leading-6 text-zinc-100">
            {{ calculateSchemaTitle(props.schema) }}
          </h3>
          <p v-if="schema.description" class="mt-1 text-sm text-zinc-400">
            {{ schema.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="space-y-2 mt-1 pl-2 lg:pl-4">
      <div
        v-for="entry in entries"
        :key="persistentKeyTable[entry[0]]"
        class="flex flex-row gap-x-2 items-center text-zinc-200"
      >
        <input
          @input="onKeyUpdate"
          :value="entry[0]"
          type="text"
          ref="inputRefs"
          :data-persistence-key="persistentKeyTable[entry[0]]"
          class="block w-full rounded-md bg-zinc-800/40 border-0 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
        <ArrowRightIcon class="w-10 h-10" />
        <input
          type="text"
          class="block w-full rounded-md bg-zinc-800/40 border-0 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          v-model="model[entry[0]]"
        />
      </div>
      <div class="flex flex-row gap-x-2 items-center text-zinc-200">
        <input
          v-model="newEntry"
          ref="rootInput"
          type="text"
          placeholder="Start typing..."
          class="block w-full rounded-md bg-zinc-800/40 border-0 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
        <ArrowRightIcon class="w-10 h-10" />
        <input
          type="text"
          disabled="true"
          class="block w-full rounded-md bg-zinc-900/40 border-0 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import type { RemapSchema } from "~/scripts/schemas";
import calculateSchemaTitle from "~/scripts/utils/calculateSchemaTitle";

const props = defineProps<{
  schema: RemapSchema;
  modelValue: any;
}>();
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    console.log(value);
    emit("update:modelValue", value);
  },
});

// Persistence UUIDs are sequential so they're sorted properly
const prevPersistenceUUID = ref(0);

function generatePersistenceUUID() {
  return prevPersistenceUUID.value++;
}

const newEntry = computed({
  get() {
    return "";
  },
  set(key) {
    if (!key) return;
    const persistenceID =
      persistentKeyTable.value[key] ?? generatePersistenceUUID();
    if (!model.value[key]) {
      model.value[key] = "";
      persistentKeyTable.value[key] = persistenceID;
    }
    nextTick(() => {
      const nodes = inputRefs.value.filter(
        (e) =>
          parseInt(e?.getAttribute("data-persistence-key") ?? "-1") ==
          persistenceID
      );
      if (nodes.length > 0) {
        nodes[0].focus();
      }
    });
  },
});

model.value ??= {};

const entries = computed(() =>
  model.value
    ? Object.entries(model.value).sort(
        (a, b) =>
          persistentKeyTable.value[a[0]] - persistentKeyTable.value[b[0]]
      )
    : []
);

const persistentKeyTable = ref<{ [key: string]: number }>({});
const inputRefs = ref<Array<HTMLInputElement>>([]);
const rootInput = ref<HTMLInputElement>();

function onKeyUpdate(input: Event) {
  // @ts-expect-error
  const key = input.target?.value;
  // @ts-expect-error
  const oldKey = input.target?._value;
  if (key) {
    // Copy value to new location
    delete Object.assign(model.value, { [key]: model.value[oldKey] })[oldKey];
    // Copy persistence key
    delete Object.assign(persistentKeyTable.value, {
      [key]: persistentKeyTable.value[oldKey],
    })[oldKey];
    nextTick(() => {
      const element: HTMLInputElement = input.target as HTMLInputElement;
      element.focus();
    });
  } else {
    delete model.value[oldKey];
    delete persistentKeyTable.value[oldKey];
    nextTick(() => {
      rootInput.value?.focus();
    });
  }
}
</script>
