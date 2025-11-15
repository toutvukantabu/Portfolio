import {SkillModel} from "@/domain/skill/entities/SkillModel";

export interface SkillRepository {
    getAll(locale: string): Promise<SkillModel[]>;
}
