<template>
  <div>
    <label
      :for="componentID"
      class="block text-sm font-medium leading-6 text-zinc-100"
      >{{ calculateSchemaTitle(props.schema) }}</label
    >
    <div class="mt-2">
      <input
        type="text"
        :name="componentID"
        :id="componentID"
        class="block w-full rounded-md bg-transparent border-0 py-1.5 text-zinc-200 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        :placeholder="
          props.schema.examples
            ? `e.g. ${props.schema.examples.join(', ')}`
            : ''
        "
        :aria-describedby="`${componentID}-desc`"
      />
    </div>
    <p class="mt-2 text-sm text-zinc-400" :id="`${componentID}-desc`">
      {{ props.schema.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import calculateSchemaTitle from "~/scripts/utils/calculateSchemaTitle";

const props = defineProps<{
  schema: any;
  modelValue: any;
  elementConfig?: any;
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

model.value ??= "";

const componentID = crypto.randomUUID();
</script>
