<template>
  <div class="relative isolate overflow-hidden bg-zinc-900">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-zinc-800/20">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <div
      class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-orange-500 to-amber-100 opacity-20"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      />
    </div>
    <div
      class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40"
    >
      <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <div class="mt-24 sm:mt-32 lg:mt-16">
          <a
            href="https://github.com/Sapiens-OSS/sapiens-web-builder"
            target="_blank"
            class="inline-flex content-center space-x-6"
          >
            <span
              class="rounded-full inline-flex bg-orange-500/10 px-3 py-1 text-sm font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-orange-500/20"
              >Open Source!
              <span class="block md:hidden ml-1" aria-hidden="true"
                >→</span
              ></span
            >
            <span
              class="hidden md:flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-400"
            >
              Check out the source code
              <span aria-hidden="true" class="ml-1">→</span>
            </span>
          </a>
        </div>
        <h1
          class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Build your Sapiens mod, easily.
        </h1>
        <p class="mt-6 text-lg leading-8 text-zinc-400">
          The Hammerstone Web Builder is an easy-to-use web app to create
          Sapiens mods that use the Hammerstone Framework. Created and supported
          by the Sapiens Modding Community.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink
            to="/projects"
            class="rounded-lg bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >Get started <span aria-hidden="true">→</span></NuxtLink
          >
        </div>
      </div>
      <div
        class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
      >
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <img
            src="@/assets/img/app.png"
            alt="App screenshot"
            width="2432"
            height="1442"
            class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  </div>
</template>
