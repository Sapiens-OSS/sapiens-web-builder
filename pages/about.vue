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
          The simplest way to build your very own Sapiens mod
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
          <DisclosurePanel as="dd" class="mt-4 pr-12">
            <p class="text-base leading-7 text-zinc-400">{{ faq.answer }}</p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";
const features = [
  {
    name: "Completely browser-based",
    description:
      "Sapiens Web Builder runs completely within your browser - no server or accounts needed - so you can mod your ideas quickly and hassle free!",
  },
  {
    name: "Well supported",
    description:
      "The mods created using Sapiens Web Builder use Sapiens' most popular modding framework: Hammerstone. That means more stability and more compatiablity than anything else.",
  },
  {
    name: "Extendable",
    description:
      "Any other mod that implements the DDAPI and provides schema is fully compatible with the web builder.",
  },
  {
    name: "No branding",
    description:
      "We don't externally brand your mods when you export them, nor require you to credit us. They're yours to keep and do what you please with them.",
  },
];

const faqs: Array<{ question: string; answer: string }> = [
  {
    question: "How does Sapiens Web Builder store my projects?",
    answer:
      "It depends on the storage location you've picked, but it's typically in either your browser's storage location or somewhere like GitHub. Whenever you save, or autosave, we use that location to save your project data and configs. ",
  },
  {
    question:
      "Do I have to credit Sapiens Web Builder or Sapiens Modding Community?",
    answer:
      "No! Whatever mods you create using this tool don't require attribution (but we would appreciate it). However, any mod developer that looks into your mod's files could probably tell. Additionally, your mod depends on the Hammerstone Framework.",
  },
  {
    question:
      "How do I add extra functionality to my mods (something Sapiens Web Builder doesn't support)?",
    answer:
      "You can always extend the functionality of your mods with actual code, but the Sapiens Web Builder doesn't have a convenient way of doing that. To learn more about modding Sapiens in general, you can join our Discord and look at our wiki.",
  },
];

useHead({
  title: "About"
})
</script>
