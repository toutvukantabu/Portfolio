/**
 * 🧠 GetExperiencesUseCase
 *
 * ▶️ Rôle :
 * Contient la logique métier pour récupérer et filtrer les experiences.
 *
 * ▶️ Fonctionnement :
 * Appelle le repository pour récupérer toutes les compétences et applique des règles métier simples , ranger les experience par orde chronologique.
 */
import {ExperienceModel} from "@/domain/model/experience/ExperienceModel";
import {ExperienceRepository} from "@/domain/model/experience/ExperienceReository";

export class GetExperienceUseCase {
    constructor(private readonly repository: ExperienceRepository) {
    }

    async execute(locale: string): Promise<ExperienceModel[]> {
        const all = await this.repository.getAll(locale);
        return all.filter(skill => skill.title.trim() !== "");
    }
}
