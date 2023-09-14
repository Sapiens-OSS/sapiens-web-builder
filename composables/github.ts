import { Octokit } from "octokit";

export const generateGitHubHeaders = () => {
  const token = getOrDefaultDocument("github", "pat", null);
  if (token) {
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  }
  return {};
};

export const useGitHubUser = () => useState("github_user", () => null);

async function handleFile(url: string) {
  const data = await $fetch(url);
  const mod = useMod();

  // Find the right schema, somehow
}

async function recuseDir(url: string) {
  const dir: { url: string; type: string; download_url?: string }[] =
    await $fetch(url, generateGitHubHeaders());
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

export async function loadProjectFromGitHub(url: string) {
  await recuseDir(`${url}/contents/hammerstone`);
}

export async function updateGitHubUser(token: string) {
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
