import {httpClient} from "@/infrastructure/http/httpClient";
import {iconMap} from "@/infrastructure/mapper/skill/iconMapper";

export class StrapiSkillRepository {
    async getAll(locale) {
        const response = await httpClient.get("/skills", {
            params: {populate: "skill", locale},
        });
        const items = response.data.data;
        return items.map((item) => ({
            id: item.id,
            title: item.attributes.title,
            desc: item.attributes.desc,
            icon: iconMap[item.attributes.icon] ?? iconMap["database"], // fallback
        }));
    }
}
