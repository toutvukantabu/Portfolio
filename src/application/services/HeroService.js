import { BaseStrapiService } from "@/infrastructure/api/BaseStrapiService";
const service = new BaseStrapiService("homes");
export class HeroService {
    static async getHero(locale) {
        return await service.getOne(locale);
    }
}
