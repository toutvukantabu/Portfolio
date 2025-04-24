import {httpClient} from "@/infrastructure/http/httpClient";
import {HeroRepository} from "@/domain/model/hero/HeroRepository";
import {HeroModel} from "@/domain/model/hero/HeroModel";

export class StrapiHeroRepository implements HeroRepository {
    async getContent(locale: string): Promise<HeroModel> {
        const response = await httpClient.get(`/homes?locale=${locale}`);
        const raw = response.data.data[0];

        return {
            id: raw.id,
            title: raw.attributes.title,
            name: raw.attributes.name,
            lastname: raw.attributes.lastname,
            description: raw.attributes.description,
            callToAction: raw.attributes.callToAction,
        };
    }
}
