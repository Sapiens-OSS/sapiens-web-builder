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
        <div class="ml-4 mt-4 flex-shrink-0">
          <button
            @click="() => model.push({})"
            type="button"
            class="relative inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Add item
          </button>
        </div>
      </div>
    </div>
    <div class="space-y-2" v-if="model?.length > 0">
      <div v-for="(item, itemIdx) in model">
        <SchemaSelector
          :key="itemIdx"
          :schema="
            Object.assign({ title: `Entry #${itemIdx + 1}` }, properties)
          "
          v-model="model[itemIdx]"
          :element-config="{
            deleteAction: () => {
              model.splice(itemIdx, 1);
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/20/solid";
import calculateSchemaTitle from "~/scripts/utils/calculateSchemaTitle";

const props = defineProps<{
  schema: any;
  modelValue: any;
}>();
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

// This is NOT instantaneous, so everything that depends on this value in the setup needs to work with this being null
model.value ??= [];

console.log(props.schema.properties ?? props.schema.items);
const properties = computed(
  () => props.schema.properties ?? props.schema.items
);
</script>
