import {httpClient} from "@/infrastructure/http/httpClient";

export class StrapiHeroRepository {
    async getContent(locale) {
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
