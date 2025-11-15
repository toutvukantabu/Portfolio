import {ExperienceModel} from "@/domain/experience/entities/ExperienceModel";

export interface ExperienceRepository {
    getAll(locale: string): Promise<ExperienceModel[]>;
}