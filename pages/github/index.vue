<template>
  <div class="relative w-full h-full">
    <div
      v-if="!githubUser"
      class="absolute inset-0 flex justify-center items-start p-4 lg:items-center bg-backdrop-blur bg-zinc-900/30"
    >
      <div class="flex bg-gray-800 rounded-xl h-fit p-8">
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

            <p class="mt-10 text-center text-sm text-gray-400">
              All authentication is done client-side.
            </p>
            <p class="mt-2 text-center text-sm text-gray-400">
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
    <div v-else>
      <h1 class="text-white">GitHub integration coming soon!</h1>
    </div>
  </div>
</template>

<script setup>
import GitHubIcon from "@/assets/github";
import { assertBucketExists } from "@/composables/storage";

const githubUser = useGitHubUser();

assertBucketExists("github");

const tokenModel = ref("");

async function submitToken() {
  const validToken = await updateGitHubUser(tokenModel.value);
  if (validToken) {
    createOrSetDocument("github", "pat", tokenModel.value);
  } else {
    tokenModel.value = "";
  }
}

</script>
