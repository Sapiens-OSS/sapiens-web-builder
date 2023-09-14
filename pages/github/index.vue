<template>
  <div class="relative w-full h-full">
    <div
      v-if="!githubUser"
      class="absolute inset-0 flex justify-center items-start p-4 lg:items-center bg-backdrop-blur bg-zinc-900/30"
    >
      <div class="flex bg-zinc-800 rounded-xl h-fit p-8">
        <div class="flex min-h-full flex-1 flex-col">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
              class="text-center text-2xl font-bold leading-9 tracking-tight text-white"
            >
              Connect GitHub
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submitToken" class="space-y-6">
              <div>
                <label
                  for="pat"
                  class="block text-sm font-medium leading-6 text-white"
                  >Personal Access Token</label
                >
                <div class="mt-2">
                  <input
                    v-model="tokenModel"
                    id="pat"
                    name="pat"
                    type="text"
                    autocomplete="pat"
                    required=""
                    class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="transition inline-flex items-center gap-x-2 w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800"
                >
                  Login with GitHub
                  <GitHubIcon class="w-5 h-5" />
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-zinc-400">
              All authentication is done client-side.
            </p>
            <p class="mt-2 text-center text-sm text-zinc-400">
              How do I connect GitHub?
              {{ " " }}
              <a
                href="#"
                class="font-semibold leading-6 text-amber-400 hover:text-amber-300"
                >Learn more</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full w-full overflow-y-scroll" v-else>
      <h3 class="text-sm text-zinc-400 p-3">
        Make sure your project is tagged with
        <span
          class="bg-zinc-950 mx-0.5 px-2 py-1 font-monospace ring-1 ring-zinc-300/50 rounded-lg"
          >hwb</span
        >
        in order to show up here.
      </h3>
      <ul
        role="list"
        class="divide-y divide-zinc-600 flex flex-col mb-16 shadow-sm ring-1 ring-zinc-900/5"
      >
        <li
          v-for="repo in repos"
          :key="repo.id"
          @click=" /*loadProjectFromGitHub(repo.url) */"
          class="relative cursor-pointer flex justify-between gap-x-6 px-4 py-5 hover:bg-zinc-800 sm:px-6"
        >
          <div class="flex min-w-0 gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-white">
                <span class="absolute inset-x-0 -top-px bottom-0" />
                {{ repo.full_name }}
              </p>
              <p class="mt-1 flex text-xs leading-5 text-zinc-400">
                <span class="relative truncate">{{
                  repo.description || "No description for this project."
                }}</span>
              </p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-x-4">
            <ChevronRightIcon
              class="h-5 w-5 flex-none text-zinc-400"
              aria-hidden="true"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import GitHubIcon from "@/assets/github";
import { assertBucketExists } from "@/composables/storage";
import { ChevronRightIcon, FunnelIcon } from "@heroicons/vue/24/outline";

const githubUser = useGitHubUser();

assertBucketExists("github");

const tokenModel = ref("");
const repos = ref([]);

async function submitToken() {
  const validToken = await updateGitHubUser(tokenModel.value);
  if (validToken) {
    createOrSetDocument("github", "pat", tokenModel.value);
  } else {
    tokenModel.value = "";
  }
}

if (githubUser.value) {
  const token = getDocument("github", "pat");
  $fetch(githubUser.value.repos_url, generateGitHubHeaders()).then((e) => {
    repos.value = e.filter((v) => v.topics.includes("hwb"));
  });
}
</script>
