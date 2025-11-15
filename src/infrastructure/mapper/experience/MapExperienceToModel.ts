import {ExperienceModel} from "@/domain/experience/entities/ExperienceModel";

export const MapExperienceToModel = (item: any): ExperienceModel => {
    const experience = item.experience;
    return {
        id: experience.id,
        company: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate ? experience.endDate : null,
        description: experience.description,
        location: experience.location,
        type: experience.type,
        technologies: experience.technologies.data.map((tech: any) => ({
            id: tech.id,
            name: tech.name,
            iconUrl: tech.iconUrl
        })),
    };
}