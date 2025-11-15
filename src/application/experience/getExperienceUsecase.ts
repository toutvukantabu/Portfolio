import {ExperienceModel} from "@/domain/experience/entities/ExperienceModel";
import type {ExperienceRepository} from "@/domain/experience/repositories/ExperienceReository";
import {inject, injectable} from "tsyringe";

@injectable()
export class GetExperiencesUseCase {
    constructor(@inject('ExperienceRepository') private repository: ExperienceRepository) {
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
