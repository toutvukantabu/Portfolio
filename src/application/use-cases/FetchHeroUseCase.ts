import {IHeroRepository} from "@/domain/hero/repositories/IHeroRepository";
import {Hero} from "@/domain/hero/entities/Hero";

export class FetchHeroUseCase {
    constructor(private readonly repo: IHeroRepository) {
    }

    /**
     * Exécute la récupération du Hero.
     * @param locale - code de langue ('fr' ou 'en')
     */
    async execute(locale: string): Promise<Hero | null> {
        return this.repo.findByLocale(locale);
    }
}