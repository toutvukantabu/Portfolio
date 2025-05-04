import {httpClient} from "@/infrastructure/http/httpClient";
import {ExperienceModel} from "@/domain/model/experience/ExperienceModel";
import {MapExperienceToModel} from "@/infrastructure/mapper/experience/MapExperienceToModel";

export class StrapiExperienceRepository {
    async getAll(locale: string): Promise<ExperienceModel[]> {
        const response = await httpClient.get("/experiences", {
            params: {populate: "*", locale},
        });
        return response.data.data.map(MapExperienceToModel);
    }
}

