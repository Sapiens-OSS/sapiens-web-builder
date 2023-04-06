<template>
  <div class="mt-2 lg:px-4 px-2">
    <SwitchGroup as="div" class="flex items-center justify-between">
      <span class="flex flex-grow flex-col">
        <SwitchLabel
          as="span"
          class="text-sm font-medium leading-6 text"
          passive
        >
          {{
            props.schema.title || props.schema._key || "Error loading schema"
          }}
        </SwitchLabel>
        <SwitchDescription as="span" class="text-sm text-tinted">
          {{ props.schema.description }}
        </SwitchDescription>
      </span>
      <Switch
        v-model="boolean"
        :class="[
          boolean ? 'bg-amber-600' : 'background-tinted',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
        ]"
      >
        <span
          aria-hidden="true"
          :class="[
            boolean ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          ]"
        />
      </Switch>
    </SwitchGroup>
  </div>
</template>

<script setup>
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { useMod } from "~/composables/shared";
import { ref } from "vue";
import dot from "dot-object";
import merge from "deepmerge";

const mod = useMod();
const props = defineProps(["schema", "target"]);
const boolean = computed({
  get() {
    return dot.pick(props.target, mod.value);
  },
  set(e) {
    dot.str(props.target, e, mod.value);
  },
});
if (!boolean) {
  dot.str(props.target, false, mod.value);
}
</script>
