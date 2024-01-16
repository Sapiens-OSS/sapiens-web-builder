<template>
  <div class="relative w-full h-20 overflow-hidden" ref="under-construction">
    <div
      v-for="i in 200"
      class="absolute h-48 rotate-[18deg] w-0.5 bg-zinc-800"
      :style="{ left: `${(i - 2) * 1.5}rem` }"
    />
    <div
      class="absolute left-1/2 right-1/2 -translate-x-1/2 top-1/2 bottom-1/2 -translate-y-1/2 w-max h-max text-2xl uppercase bg-zinc-900 p-2 text-zinc-700"
    >
      Under Construction
    </div>
  </div>
</template>
