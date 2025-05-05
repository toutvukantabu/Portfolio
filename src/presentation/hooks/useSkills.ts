import {useContext, useEffect, useState} from "react";
import {SkillModel} from "@/domain/model/skill/SkillModel";
import {useLocale} from "@/shared/presentation/hooks/useLocale";
import {SkillsContext} from "@/application/context/skill/skillsContext";

/**
 * 🧩 useSkills
 *
 * ▶️ Rôle :
 * Hook React pour charger les compétences.
 *
 * ▶️ Fonctionnement :
 * Récupère le UseCase via Context, exécute le chargement, et retourne les Skills.
 */

export const useSkills = () => {
    const useCase = useContext(SkillsContext);
    const [skills, setSkills] = useState<SkillModel[]>([]);
    const locale = useLocale();

    useEffect(() => {
        if (!useCase) return;

        useCase.execute(locale).then(setSkills);
    }, [useCase, locale]);

    return {skills};
};
