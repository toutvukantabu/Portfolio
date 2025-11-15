import {httpClient} from "@/infrastructure/http/httpClient";
import {ExperienceModel} from "@/domain/experience/entities/ExperienceModel";
import {MapExperienceToModel} from "@/infrastructure/mapper/experience/MapExperienceToModel";
import {ExperienceRepository} from "@/domain/experience/repositories/ExperienceReository";
import {injectable} from "tsyringe";

@injectable()
export class StrapiExperienceRepository implements ExperienceRepository {
    async getAll(locale: string): Promise<ExperienceModel[]> {
        const response = await httpClient.get("/experiences", {
            params: {populate: "*", locale},
        });
        return response.data.data.map(MapExperienceToModel);
    }
}

