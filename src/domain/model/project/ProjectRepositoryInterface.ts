import {ProjectModel} from "@/domain/model/project/ProjectModel";

export interface ProjectRepository {
    getProjects(locale: string): Promise<ProjectModel[]>;

    getProjectById(id: string, locale: string): Promise<ProjectModel | null>;
}
