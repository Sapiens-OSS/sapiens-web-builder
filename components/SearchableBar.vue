<template>
    <div class="flex flex-1 items-stretch overflow-hidden">
        <aside class="hidden w-96 overflow-y-auto border-r border-gray-200 dark:border-gray-700 lg:block">
            <div class="m-4">
                <div class="relative mt-1 flex items-center">
                    <input type="text" name="search" id="search" v-model="search" placeholder="Search items..."
                        class="block w-full rounded-md background text-tinted border-gray-300 dark:border-slate-600 pr-12 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm" />
                    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <MagnifyingGlassIcon
                            class="inline-flex items-center font-sans text-sm font-medium text-gray-400 w-6 h-6" />
                    </div>
                </div>
            </div>
            <nav class="overflow-y-auto" aria-label="Directory">
                <div v-for="letter in Object.keys(directory)" :key="letter" class="relative">
                    <div
                        class="sticky top-0 z-10 border-t border-b border-gray-200 dark:border-gray-700 background-tinted px-6 py-1 text-sm font-medium text-gray-500">
                        <h3 class="text">{{ letter }}</h3>
                    </div>
                    <ul role="list" class="relative z-0 divide-y divide-gray-200">
                        <li v-for="item in directory[letter]" :key="item.index" class="background">
                            <div
                                :class="[selected == item.index ? 'background-selected' : 'hover:bg-gray-100 dark:hover:bg-gray-800', 'relative flex items-center space-x-3 px-6 py-5 ']">
                                <div class="flex-shrink-0">
                                    <img class="h-10 w-10 rounded-full" :src="item.icon" alt="" />
                                </div>
                                <div class="min-w-0 flex-1">
                                    <button class="focus:outline-none"
                                        @click="selected == item.index ? selected = -1 : selected = item.index">
                                        <!-- Extend touch target to entire panel -->
                                        <span class="absolute inset-0" aria-hidden="true" />
                                        <p class="text-sm font-medium text">{{ item.name }}</p>
                                        <p class="truncate text-sm text-tinted">{{ item.tag }}</p>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>

        <main class="flex-1 overflow-y-auto">
            <slot :selected="selected">
                <!-- fallback content -->
                <main class="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
                    <div class="text-center">
                        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Interface unimplemented
                        </h1>
                        <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we haven't got around to implementing this
                            panel. Please check back later!</p>
                    </div>
                </main>
            </slot>
        </main>
</div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
const props = defineProps(['values', 'structure']);
/*
structure:
{
    name: 'name_of_name_value',
    icon: 'name_of_icon_value',
    tag: 'name_of_tag_value',
}
*/
const selected = ref(-1);
const search = ref("");
const directory = computed(() => {
    let dir = {};
    props.values.forEach((e, i) => {
        if (search.value && !e[props.structure.name].toLowerCase().includes(search.value.toLowerCase())) return;
        dir[e[props.structure.name][0]] ??= [];
        dir[e[props.structure.name][0]].push({
            index: i,
            name: e[props.structure.name],
            tag: e[props.structure.tag],
            icon: e[props.structure.icon],
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