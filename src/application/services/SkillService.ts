import {SkillRepository} from "@/domain/model/skill/SkillRepository";
import {StrapiSkillRepository} from "@/infrastructure/repositories/skill/StrapiSkillRepository";
import {SkillModel} from "@/domain/model/skill/SkillModel";

const repository: SkillRepository = new StrapiSkillRepository();

export class SkillService {
    static async getSkills(locale: string): Promise<SkillModel[]> {
        return repository.getAll(locale);
    }
}
