import {SkillRepository} from "@/domain/skill/repositories/SkillRepository";
import {StrapiSkillRepository} from "@/infrastructure/repositories/skill/StrapiSkillRepository";
import {SkillModel} from "@/domain/skill/entities/SkillModel";

const repository: SkillRepository = new StrapiSkillRepository();

export class SkillService {
    static async getSkills(locale: string): Promise<SkillModel[]> {
        return repository.getAll(locale);
    }
}
