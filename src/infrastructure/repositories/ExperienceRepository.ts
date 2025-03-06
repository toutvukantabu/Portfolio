import {ExperienceModel} from "@/domain/models/ExperienceModel";
import i18n from "@/core/i18n";

export class ExperienceRepository {
    static getExperiences(): ExperienceModel[] {
        const translatedExperiences = i18n.t("experiences", {returnObjects: true});
        if (!Array.isArray(translatedExperiences) || translatedExperiences.length === 0) {
            return [];
        }
        return translatedExperiences.map((experience) => ({
            role: experience.role,
            company: experience.company,
            period: experience.period,
            desc: experience.desc,
            tech: experience.tech,
        }));
    }
}
