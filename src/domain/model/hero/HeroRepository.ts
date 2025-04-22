import {HeroModel} from "@/domain/model/hero/HeroModel";

export interface HeroRepository {
    getHero(locale: string): Promise<HeroModel | null>;
}
