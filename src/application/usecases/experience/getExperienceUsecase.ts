import {ExperienceModel} from "@/domain/model/experience/ExperienceModel";
import {StrapiExperienceRepository} from "@/infrastructure/repositories/experience/StrapiExperienceRepository";

export class GetExperiencesUseCase {
    constructor(private repository: StrapiExperienceRepository) {
    }

    async execute(locale: string): Promise<ExperienceModel[]> {
        const experiences = await this.repository.getAll(locale);

        return experiences.sort((a, b) => {
            if (!a.endDate && b.endDate) return -1;
            if (a.endDate && !b.endDate) return 1;

            return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        });
    }
}
