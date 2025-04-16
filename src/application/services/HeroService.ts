import {BaseStrapiService} from "@/infrastructure/api/BaseStrapiService";
import {HeroModel} from "@/domain/models/HeroModel";

const service = new BaseStrapiService<HeroModel>("homes");

export class HeroService {
    static async getHero(locale: string): Promise<HeroModel | null> {
        return await service.getOne(locale);
    }
}
