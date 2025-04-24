import { StrapiSkillRepository } from "@/infrastructure/repositories/skill/StrapiSkillRepository";
const repository = new StrapiSkillRepository();
export class SkillService {
    static async getSkills(locale) {
        return repository.getAll(locale);
    }
}
