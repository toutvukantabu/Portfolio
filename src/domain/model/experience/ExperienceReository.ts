import {ExperienceModel} from "@/domain/model/experience/ExperienceModel";

export interface ExperienceRepository {
    getAll(locale: string): Promise<ExperienceModel[]>;
}