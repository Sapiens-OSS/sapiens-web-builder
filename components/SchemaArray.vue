<template>
  <div class="py-4 lg:px-4 px-2">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text">
          {{
            props.schema.title || props.schema._key || "Unable to load schema"
          }}
          <span
            v-if="props.schema._required"
            class="text-xs bg-red-500/70 p-1 rounded-md text-white select-none"
            >Required</span
          >
        </h1>
        <p class="mt-2 text-sm text-tinted">
          {{ props.schema.description || "No description provided." }}
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          @click="add"
          type="button"
          class="block rounded-md bg-amber-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Add Item
        </button>
      </div>
    </div>
    <div class="space-y-2 py-4">
      <div class="flex flex-col lg:flex-row" v-for="(item, itemIndex) in arr">
        <div
          class="grow flex flex-col lg:pl-2"
          v-for="entry in Array(parseInt(props.schema.maximum || '1'))
            .fill(0)
            .map((_, i) => {
              return {
                ...(Array.isArray(props.schema.items)
                  ? props.schema.items[0]
                  : props.schema.items),
                _target: `${props.target}[${itemIndex}]`,
                _key: `${itemIndex}`,
                title: `${props.schema._key} #${itemIndex + 1}`,
              };
            })"
          :key="entry._key"
        >
          <div
            class="m-1 h-2 bg-red-600 rounded-lg cursor-pointer text-orange-600 hover:texy-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            aria-hidden="true"
            @click="() => remove(itemIndex)"
          />
          <!-- Handle edge cases -->
          <SchemaGroup
            v-if="props.schema.items?.properties"
            :schema="entry"
            :target="entry._target"
            :level="1"
          />
          <SchemaGroup
            v-else-if="props.schema.items?.[0]?.properties"
            :schema="entry"
            :target="entry._target"
            :level="1"
          />
          <SchemaGeneric v-else :element="entry" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMod } from "~/composables/shared";
import { computed } from "vue";
import dot from "dot-object";

const mod = useMod();
const props = defineProps(["schema", "target"]);

if (!dot.pick(props.target, mod.value)) {
  dot.str(props.target, [], mod.value);
}
// TODO: Watch only target prop
watch(props, (n) => {
  if (!dot.pick(n.target, mod.value)) {
    dot.str(n.target, [], mod.value);
  }
});
const arr = computed(() => dot.pick(props.target, mod.value));

function add(e) {
  arr.value.push({});
}

function remove(i) {
  dot.delete(`${props.target}[${i}]`, mod.value);
}
</script>
