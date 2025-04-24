import {httpClient} from "@/infrastructure/http/httpClient";
import {SkillModel} from "@/domain/model/skill/SkillModel";
import {iconMap} from "@/infrastructure/mapper/skill/iconMapper";
import {SkillRepository} from "@/domain/model/skill/SkillRepository";


export class StrapiSkillRepository implements SkillRepository {
    async getAll(locale: string): Promise<SkillModel[]> {
        const response = await httpClient.get("/skills", {
            params: {populate: "skill", locale},
        });
        const items = response.data.data;

        return items.map((item: any): SkillModel => ({
            id: item.id,
            title: item.attributes.title,
            desc: item.attributes.desc,
            icon: iconMap[item.attributes.icon] ?? iconMap["database"], // fallback
        }));
    }
}
