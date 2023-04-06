<template>
  <Disclosure
    as="div"
    class="w-full"
    v-slot="{ open }"
    :defaultOpen="props.level <= 2"
  >
    <dt>
      <DisclosureButton
        class="flex w-full items-start justify-between text-left text-gray-900 background-tinted px-4 py-2 rounded-lg"
      >
        <span class="text-base font-semibold leading-7 text">{{
          props.schema?.title || props.schema?._key || "Error loading schema"
        }}</span>
        <span class="ml-6 flex h-7 items-center">
          <PlusSmallIcon v-if="!open" class="h-6 w-6 text" aria-hidden="true" />
          <MinusSmallIcon v-else class="h-6 w-6 text" aria-hidden="true" />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="div" class="lg:pl-4 flex flex-col gap-y-2 p-2">
      <div
        v-for="element in Object.entries(props.schema?.properties).map((e) =>
          Object.assign(
            { _key: e[0], _target: `${props.target}.${e[0]}` },
            e[1]
          )
        )"
        :key="element._key"
      >
        <SchemaGeneric :element="element" :level="level" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useMod } from "~/composables/shared";
import dot from "dot-object";
import merge from 'deepmerge';
const mod = useMod();
const props = defineProps(["schema", "level", "target"]);
if (props.target) {
  if (!mod.value[props.target]) {
    dot.str(props.target, {}, mod.value)
  }
}
</script>
