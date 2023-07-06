<template>
  <Disclosure
    as="div"
    class="w-full"
    v-slot="{ open }"
    :defaultOpen="props.level <= 2"
  >
    <dt>
      <DisclosureButton
        class="flex w-full items-start justify-between text-left text-gray-900 bg-gray-800 px-4 py-2 rounded-lg"
      >
        <span class="text-base font-semibold leading-7 text-white"
          >{{
            props.schema?.title || props.schema?._key || "Error loading schema"
          }}
          <span
            v-if="props.schema._required"
            class="text-xs bg-red-500/70 p-1 rounded-md text-white select-none"
            >Required</span
          >
        </span>
        <span class="ml-6 flex h-7 items-center">
          <PlusSmallIcon v-if="!open" class="h-6 w-6 text-white" aria-hidden="true" />
          <MinusSmallIcon v-else class="h-6 w-6 text-white" aria-hidden="true" />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="div" class="lg:pl-4 flex flex-col gap-y-2 p-2">
      <div v-for="element in entries" :key="element._key">
        <SchemaGeneric :element="element" :level="level" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import { useMod } from "~/composables/shared";
import dot from "dot-object";
const mod = useMod();
const props = defineProps(["schema", "level", "target"]);
if (props.target) {
  if (!dot.pick(props.target, mod.value)) {
    dot.str(props.target, {}, mod.value);
  }
}
const entries = computed(() =>
  Object.entries(props.schema?.properties || {}).map((e) => {
    return {
      ...e[1],
      _key: e[0],
      _target: props.target + "." + e[0],
      _required: props.schema?.required?.includes(e[0]),
    };
  })
);
</script>
