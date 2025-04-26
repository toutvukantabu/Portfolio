/**
 * 🧠 GetSkillsUseCase
 *
 * ▶️ Rôle :
 * Contient la logique métier pour récupérer et filtrer les compétences.
 *
 * ▶️ Fonctionnement :
 * Appelle le repository pour récupérer toutes les compétences et applique des règles métier simples (ex: enlever les skills sans titre).
 */
import {SkillModel} from "@/domain/model/skill/SkillModel";
import {SkillRepository} from "@/domain/model/skill/SkillRepository";

export class GetSkillsUseCase {
    constructor(private readonly repository: SkillRepository) {
    }

    async execute(locale: string): Promise<SkillModel[]> {
        const all = await this.repository.getAll(locale);
        return all.filter(skill => skill.title.trim() !== "");
    }
}
