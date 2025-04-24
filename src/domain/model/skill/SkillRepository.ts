import {SkillModel} from "./SkillModel";

export interface SkillRepository {
    getAll(locale: string): Promise<SkillModel[]>;
}
