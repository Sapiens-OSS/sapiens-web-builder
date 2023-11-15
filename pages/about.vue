<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-8 text-orange-500">
          Sapiens OSS presents
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
        >
          The simpliest way to build your very own Sapiens mod
        </p>
        <p class="mt-6 text-lg leading-8 text-zinc-400">
          The Sapiens Web Builder uses Hammerstone's unique functionality to
          allow anyone to build their own mod - for free - inside their browser.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-12"
          >
            <dt class="text-base font-semibold leading-7 text-zinc-100">
              <div
                class="absolute left-0 top-0 flex items-center justify-center rounded-lg"
              >
                <CheckIcon class="h-6 w-6 text-orange-500" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-zinc-400">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
    <div class="mx-auto max-w-4xl divide-y divide-white/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-zinc-100">
        Frequently asked questions
      </h2>
      <dl class="mt-10 space-y-6 divide-y divide-white/10">
        <Disclosure
          as="div"
          v-for="faq in faqs"
          :key="faq.question"
          class="pt-6"
          v-slot="{ open }"
        >
          <dt>
            <DisclosureButton
              class="flex w-full items-start justify-between text-left text-zinc-100"
            >
              <span class="text-base font-semibold leading-7">{{
                faq.question
              }}</span>
              <span class="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  v-if="!open"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
                <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 pr-12">
            <p class="text-base leading-7 text-zinc-400">{{ faq.answer }}</p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";
const features = [
  {
    name: "Completely inside your browser",
    description:
      "Sapiens Web Builder runs completely within your browser - no server, no accounts, no nothing needed - so you can feel safe while building your mod.",
  },
  {
    name: "Well supported",
    description:
      "The mods created using Sapiens Web Builder use Sapiens' most popular modding framework: Hammerstone. More stability and more compatiablity than anything else.",
  },
  {
    name: "Extendable",
    description:
      "Any other mod that implements the DDAPI and provides schema is fully compatiable with the web builder.",
  },
  {
    name: "No branding",
    description:
      "We don't externally brand your mods when you export them. They're yours to keep.",
  },
];

const faqs = [
  {
    question: "How does Sapiens Web Builder work without accounts?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
</script>
