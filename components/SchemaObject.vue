<template>
  <Disclosure as="div" v-slot="{ open }">
    <dt
      :class="[
        enabled ? 'bg-zinc-800/60' : 'bg-zinc-800/20',
        'inline-flex w-full rounded-lg overflow-hidden',
      ]"
    >
      <DisclosureButton
        :disabled="!enabled"
        class="flex py-2 px-4 w-full items-start justify-between text-left text-white"
      >
        <span class="text-base font-semibold leading-7">{{
          calculateSchemaTitle(props.schema)
        }}</span>
        <div class="flex flex-row items-center">
          <Switch
            v-if="!props.required"
            v-model="enabled"
            :class="[
              enabled ? 'bg-orange-600' : 'bg-zinc-700',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-orange-600 focus:ring-offset-2',
            ]"
          >
            <span class="sr-only">Use setting</span>
            <span
              :class="[
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-zinc-200 shadow ring-0 transition duration-200 ease-in-out',
              ]"
            >
              <span
                :class="[
                  enabled
                    ? 'opacity-0 duration-100 ease-out'
                    : 'opacity-100 duration-200 ease-in',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <svg
                  class="h-3 w-3 text-zinc-900"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                :class="[
                  enabled
                    ? 'opacity-100 duration-200 ease-in'
                    : 'opacity-0 duration-100 ease-out',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                ]"
                aria-hidden="true"
              >
                <svg
                  class="h-3 w-3 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                  />
                </svg>
              </span>
            </span>
          </Switch>

          <span class="ml-6 flex h-7 items-center">
            <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
      </DisclosureButton>
      <button
        v-if="
          props.elementConfig?.deleteAction &&
          props.elementConfig?.allowedDelete()
        "
        @click="props.elementConfig.deleteAction"
        type="button"
        class="bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <TrashIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 pl-2 lg:pl-4 space-y-2" v-if="enabled">
      <SchemaSelector
        v-for="prop in properties"
        :key="prop._key"
        :required="props.schema.required?.includes(prop._key)"
        :schema="prop"
        v-model="model[prop._key]"
      />
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Switch,
} from "@headlessui/vue";
import { TrashIcon } from "@heroicons/vue/20/solid";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import calculateSchemaTitle from "~/scripts/utils/calculateSchemaTitle";

const props = defineProps([
  "schema",
  "modelValue",
  "elementConfig",
  "required",
]);
const emit = defineEmits(["update:modelValue"]);
const properties = computed(() =>
  Object.entries(props.schema.properties).map((e: [string, any]) =>
    Object.assign({}, e[1], { _key: e[0] })
  )
);

const _enabled = ref(false);
const enabled = computed({
  get() {
    if (props.required) {
      return true;
    }
    return _enabled.value;
  },
  set(value) {
    if (value) {
      model.value ??= {};
    } else {
      model.value = undefined;
    }
    _enabled.value = value;
  },
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

console.log(model.value);

if (model.value) {
  enabled.value = true;
}

if (props.required) {
  model.value ??= {};
}
</script>
