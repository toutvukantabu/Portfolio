import {BaseStrapiService} from "@/infrastructure/api/BaseStrapiService";
import {SkillModel} from "@/domain/model/skill/SkillModel";

const service = new BaseStrapiService<SkillModel>("homes");

export class SkillService {
    static async getSkills(locale: string): Promise<SkillModel[] | null> {
        return await service.getAll(locale);
    }
}