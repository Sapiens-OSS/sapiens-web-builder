<template>
  <div class="flex flex-1 items-stretch overflow-hidden">
    <aside
      class="hidden w-96 overflow-y-auto border-r border-zinc-700 lg:block"
    >
      <SearchableColumn
        :directory="directory"
        :search="search"
        :selected="selected"
        :new="props.new"
        :edit="
          (e) => {
            selected = -1;
            props.edit(e);
          }
        "
        :delete="
          (e) => {
            selected = -1;
            props.delete(e);
          }
        "
        @update:search="
          (v) => {
            search = v;
          }
        "
        @update:selected="
          (v) => {
            selected = v;
          }
        "
      />
    </aside>

    <main class="flex-1 overflow-y-auto">
      <slot :selected="selected">
        <!-- fallback content -->
        <main
          class="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8"
        >
          <div class="text-center">
            <h1
              class="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
            >
              Interface unimplemented
            </h1>
            <p class="mt-6 text-base leading-7 text-zinc-600">
              Sorry, we haven't got around to implementing this panel. Please
              check back later!
            </p>
          </div>
        </main>
      </slot>
    </main>

    <button
      type="button"
      @click="open = true"
      class="absolute lg:hidden bottom-5 right-5 items-center rounded-full border border-transparent bg-orange-600 p-2 text-white shadow-sm hover:bg-orange-700"
    >
      <Bars3Icon class="h-7 w-7" aria-hidden="true" />
    </button>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="pointer-events-none fixed inset-0 flex">
        <TransitionChild
          as="template"
          enter="transform transition ease-in-out duration-300"
          enter-from="translate-y-full"
          enter-to="translate-y-0"
          leave="transform transition ease-in-out duration-300"
          leave-from="translate-y-0"
          leave-to="translate-y-full"
        >
          <DialogPanel class="pointer-events-auto w-screen max-w-md">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-zinc-900 shadow-xl"
            >
              <SearchableColumn
                :directory="directory"
                :search="search"
                :selected="selected"
                :new="props.new"
                :edit="
                  (e) => {
                    selected = -1;
                    props.edit(e);
                  }
                "
                :delete="
                  (e) => {
                    selected = -1;
                    props.delete(e);
                  }
                "
                :close="
                  () => {
                    open = false;
                  }
                "
                @update:search="
                  (v) => {
                    search = v;
                  }
                "
                @update:selected="
                  (v) => {
                    selected = v;
                    open = false;
                  }
                "
              />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
const props = defineProps(["values", "structure", "new", "edit", "delete"]);
/*
structure:
{
    name: 'name_of_name_value',
}
*/
const selected = ref(-1);
const search = ref("");
const open = ref(false);
const directory = computed(() => {
  let dir = {};
  props.values.forEach((e, i) => {
    if (
      search.value &&
      !e[props.structure.name]
        .toLowerCase()
        .includes(search.value.toLowerCase())
    )
      return;
    dir[e[props.structure.name][0].toUpperCase()] ??= [];
    dir[e[props.structure.name][0].toUpperCase()].push({
      index: i,
      name: e[props.structure.name],
    });
  });
  return sortOnKeys(dir);
});
function sortOnKeys(dict) {
  var sorted = [];
  for (var key in dict) {
    sorted[sorted.length] = key;
  }
  sorted.sort();

  var tempDict = {};
  for (var i = 0; i < sorted.length; i++) {
    tempDict[sorted[i]] = dict[sorted[i]];
  }

  return tempDict;
}
</script>
