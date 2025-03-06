import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {SkillModel} from "@/domain/models/SkillModel";
import {SkillRepository} from "@/infrastructure/repositories/SkillRepository";

export const useSkills = (): SkillModel[] => {
    const { i18n } = useTranslation();
    const [skills, setSkills] = useState<SkillModel[]>([]);

    useEffect(() => {
        setSkills(SkillRepository.getSkills());
    }, [i18n.language]);
    return skills;
};
