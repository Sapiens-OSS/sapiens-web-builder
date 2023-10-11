<template>
  <nav aria-label="Directory">
    <div
      v-for="letter in Object.keys(directory)"
      :key="letter"
      class="relative"
    >
      <div
        class="z-10 bg-zinc-800 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-100"
      >
        <h3>{{ letter }}</h3>
      </div>
      <ul role="list" class="divide-y divide-zinc-700">
        <li
          v-for="person in directory[letter]"
          :key="person.email"
          class="flex gap-x-4 px-3 py-5"
        >
          <img
            class="h-12 w-12 flex-none rounded-full bg-zinc-700"
            :src="person.imageUrl"
            alt=""
          />
          <div class="min-w-0">
            <p class="text-sm font-semibold leading-6 text-zinc-100">
              {{ person.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-zinc-400">
              {{ person.email }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps(["directory", "select"]);
</script>
