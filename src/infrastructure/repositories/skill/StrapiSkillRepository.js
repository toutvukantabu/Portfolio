import {httpClient} from "@/infrastructure/http/httpClient";
import {mapStrapiSkillToModel} from "@/infrastructure/mapper/skill/mapStrapiSkillToModel";

export class StrapiSkillRepository {
    async getAll(locale) {
        const apiData = await httpClient.get("/skills", {
            params: {populate: "skill", locale}
        });
        return apiData.data.data.map(mapStrapiSkillToModel);
    }
}
