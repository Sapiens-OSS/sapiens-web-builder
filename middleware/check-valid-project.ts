import { LoadDummyStorage } from "~/scripts/dummy";
import { LoadIndexedDBSource } from "~/scripts/indexeddb";
import { LoadLocalStorage } from "~/scripts/localStorage";
import { type PartiallyLoadedProject, fetchProjects } from "~/scripts/project";

export default defineNuxtRouteMiddleware(async (to) => {
  // Make sure they're loaded in
  LoadIndexedDBSource();

  const projectID = to.params.projectid;
  if (!projectID) {
    navigateTo("/projects");
  }

  const projects = useState<PartiallyLoadedProject[]>("projects");

  if (projects.value == null) {
    projects.value = (await Promise.all(fetchProjects())).flat();
  }

  const project = projects.value.filter((e) => e.id == projectID).at(0);
  if (!project) {
    navigateTo("/projects");
  }

  const projectid = useState("partialproject", () => project);
});
