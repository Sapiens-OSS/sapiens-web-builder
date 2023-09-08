<template>
  <div class="">
    <SwitchGroup as="div" class="flex items-center justify-between">
      <span class="flex flex-grow flex-col">
        <SwitchLabel
          as="span"
          class="text-sm font-medium leading-6 text-white"
          passive
        >
          {{
            props.schema.title || props.schema._key || "Error loading schema"
          }}
        </SwitchLabel>
        <SwitchDescription as="span" class="text-sm text-gray-400">
          {{ props.schema.description }}
        </SwitchDescription>
        <span
          v-if="props.schema._required"
          class="text-xs bg-orange-600 p-1 rounded-md text-white select-none"
          >Required</span
        >
      </span>
      <Switch
        v-model="boolean"
        :class="[
          boolean ? 'bg-amber-600' : 'bg-gray-800',
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
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { useMod } from "~/composables/mod";
import dot from "dot-object";

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

if(props.schema.default != null){
  boolean.value = props.schema.default; 
}
if (!boolean) {
  dot.str(props.target, false, mod.value);
}
</script>
