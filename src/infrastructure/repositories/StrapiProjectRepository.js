import i18n from "@/core/i18n";

export class StrapiProjectRepository {
    static getProjects() {
        const projects = i18n.t("projects", {returnObjects: true});
        if (!Array.isArray(projects))
            return [];
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
