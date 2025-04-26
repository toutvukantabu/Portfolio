import {SkillModel} from "@/domain/model/skill/SkillModel";
import {iconMap} from "./iconMapper";

export const mapStrapiSkillToModel = (item: any): SkillModel => {
    const skill = item.skill;

    return {
        id: item.id,
        title: skill.title,
        desc: skill.desc,
        icon: iconMap[skill.icon] ?? iconMap["default"],
    };
};
