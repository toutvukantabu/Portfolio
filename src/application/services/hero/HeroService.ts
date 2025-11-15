import {BaseStrapiService} from "@/infrastructure/api/BaseStrapiService";
import {Hero} from "@/domain/hero/entities/Hero";

const service = new BaseStrapiService<Hero>("homes");

export class HeroService {
    static async getHero(locale: string): Promise<Hero | null> {
        return await service.getOne(locale);
    }
}
