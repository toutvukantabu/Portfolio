import {Hero} from "@/domain/hero/entities/Hero";

export interface IHeroRepository {
    findByLocale(locale: string): Promise<Hero | null>;
}
