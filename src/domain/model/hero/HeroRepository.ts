import {HeroModel} from "@/domain/model/hero/HeroModel";

export interface HeroRepository {
    getContent(locale: string): Promise<HeroModel | null>;
}
