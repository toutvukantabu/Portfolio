import {ProjectModel} from "@/domain/project/entities/ProjectModel";

export interface ProjectRepository {
    getAll(locale: string): Promise<ProjectModel[]>;

    getProject(id: string, locale: string): Promise<ProjectModel | null>;
}
