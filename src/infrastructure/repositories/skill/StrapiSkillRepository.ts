import {httpClient} from "@/infrastructure/http/httpClient";
import {SkillModel} from "@/domain/skill/entities/SkillModel";
import {SkillRepository} from "@/domain/skill/repositories/SkillRepository";
import {mapStrapiSkillToModel} from "@/infrastructure/mapper/skill/mapStrapiSkillToModel";


export class StrapiSkillRepository implements SkillRepository {

    async getAll(locale: string): Promise<SkillModel[]> {
        const apiData = await httpClient.get("/skills", {
            params: {populate: "skill", locale}
        });
        return apiData.data.data.map(mapStrapiSkillToModel);
    }
}
