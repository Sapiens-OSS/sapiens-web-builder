import { LoadDummyStorage } from "~/types/dummy";
import { LoadLocalStorage } from "~/types/localStorage";
import { fetchProjects } from "~/types/project";

export default defineNuxtRouteMiddleware((to) => {
    // Make sure they're loaded in
    LoadDummyStorage();
    LoadLocalStorage();

    const projectID = to.params.projectid;
    if(!projectID){
        navigateTo('/projects');
    }

    const projects = fetchProjects();
    const project = projects.filter((e) => e.id == projectID).at(0);
    if(!project){
        navigateTo('/projects');
    }

    to.meta.project = project;
});