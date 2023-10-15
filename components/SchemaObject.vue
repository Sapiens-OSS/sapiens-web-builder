<template>
  <Disclosure as="div" v-slot="{ open }">
    <dt
      id="delete-button-insert"
      class="inline-flex w-full rounded-lg overflow-hidden bg-zinc-800/60"
    >
      <DisclosureButton
        class="flex py-2 px-4 w-full items-start justify-between text-left text-white"
      >
        <span class="text-base font-semibold leading-7">{{
          calculateSchemaTitle(props.schema)
        }}</span>
        <span class="ml-6 flex h-7 items-center">
          <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
          <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
        </span>
      </DisclosureButton>
      <!--
        <button
        type="button"
        class="bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <TrashIcon class="h-5 w-5" aria-hidden="true" />
      </button>
      -->
    </dt>
    <DisclosurePanel as="dd" class="mt-2 pl-4 space-y-2">
      <SchemaSelector
        v-for="prop in properties"
        :key="prop._key"
        :schema="prop"
      />
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { TrashIcon } from "@heroicons/vue/20/solid";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import calculateSchemaTitle from "~/scripts/utils/calculateSchemaTitle";

const props = defineProps(["schema"]);
const properties = computed(() =>
  Object.entries(props.schema.properties).map((e: [string, any]) =>
    Object.assign({}, e[1], { _key: e[0] })
  )
);
</script>
