import i18n from "@/core/i18n/i18n";
import {ProjectModel} from "@/domain/model/project/ProjectModel";

export class StrapiProjectRepository {
    static getProjects(): ProjectModel[] {
        const projects = i18n.t("projects", {returnObjects: true});
        if (!Array.isArray(projects)) return [];
        return projects.map((proj) => ({
            id: proj.id,
            title: proj.title,
            description: proj.description,
            image: proj.image,
            technologies: proj.technologies,
            link: proj.link || "",
            repo: proj.repo || "",
        }));
    }
}
