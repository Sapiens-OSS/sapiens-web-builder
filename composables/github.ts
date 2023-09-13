import { Octokit } from "octokit";

export const useGitHubUser = () => useState("github_user", () => null);

async function handleFile(url: string) {}

async function recuseDir(url: string) {
  const dir: { url: string; type: string; download_url?: string }[] =
    await $fetch(url);
  await Promise.all(
    dir.map((e) =>
      (async () => {
        if (e.type == "dir") {
          await recuseDir(e.url);
          return;
        }
        if (e.type == "file" && e.download_url?.endsWith("json")) {
          await handleFile(e.download_url);
          return;
        }
      })()
    )
  );
}

export async function loadProjectFromGitHub(slug: string) {
  await recuseDir(`https://api.github.com/repos/${slug}/contents/hammerstone`);
}

export async function updateGitHubUser(token: string){
  const octokit = new Octokit({ auth: token });

  const gitHubUser = useGitHubUser();
  const response = await octokit.request("GET /user", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  gitHubUser.value = response.data;

  return true;
}