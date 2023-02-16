<template>
    <div class="flex flex-1 items-stretch overflow-hidden">
        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden w-96 overflow-y-auto border-r border-gray-200 lg:block">
            <!-- Your content -->
            <div class="overflow-hidden sm:rounded-md">
                <nav class="h-full overflow-y-auto" aria-label="Directory">
                    <div class="relative">
                        <li v-for="value in Object.entries(modStructure[props.page])" :key="value" class="">
                            <div
                                class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-500 hover:bg-gray-100">
                                <div class="min-w-0 flex-1">
                                    <div class="focus:outline-none">
                                        <!-- Extend touch target to entire panel -->
                                        <span class="absolute inset-0" aria-hidden="true" />
                                        <p class="text-sm font-medium text-gray-900">{{ value[0] }}</p>
                                        <p class="text-sm text-gray-500">{{ value[1].description }}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </nav>
            </div>
        </aside>

        <main class="flex-1 overflow-y-auto">
            <!-- Primary column -->
            <section aria-labelledby="primary-heading"
                class="flex h-full min-w-0 flex-1 flex-col lg:order-last px-6 py-4">
                <div class="space-y-6 sm:space-y-5">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4"
                        v-for="entry in Object.entries(modStructure[props.page])" :key="entry[0]">
                        <label :for="entry[0]" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            {{ entry[0] }}
                        </label>
                        <div class="mt-1 sm:col-span-2 sm:mt-0" v-if="entry[1].type == 'short'">
                            <div class="mt-1 sm:col-span-2 sm:mt-0">
                                <div class="flex max-w-lg rounded-md shadow-sm">
                                    <input type="text" :name="entry[0]" :id="entry[0]"
                                        :placeholder="entry[1].placeholder" v-model="mod[props.page][entry[0]]"
                                        class="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-slate-500 focus:ring-slate-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-1 sm:col-span-2 sm:mt-0" v-else-if="entry[1].type == 'long'">
                            <textarea :id="entry[0]" :name="entry[0]" rows="3" :placeholder="entry[1].placeholder"
                                v-model="mod[props.page][entry[0]]"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm" />
                        </div>
                        <div class="mt-1 sm:col-span-2 sm:mt-0" v-else-if="entry[1].type == 'options'">
                            <select id="country" name="country" autocomplete="country-name"
                                v-model="mod[props.page][entry[0]]"
                                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                                <option v-for="entry in entry[1].options">{{ entry }}</option>
                            </select>
                        </div>
                        <div v-else>
                            <p class="text-gray-500">
                                Unsupported type. This feature has probably
                                not been implemented yet, please check
                                back later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import { useMod, modStructure } from '~~/composables/shared';
const props = defineProps(['page']);
const mod = useMod();
</script>