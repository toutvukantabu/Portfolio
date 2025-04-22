import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {SkillModel} from "@/domain/model/skill/SkillModel";
import {StrapiSkillRepository} from "@/infrastructure/repositories/StrapiSkillRepository";

export const useSkills = (): SkillModel[] => {
    const { i18n } = useTranslation();
    const [skills, setSkills] = useState<SkillModel[]>([]);

    useEffect(() => {
        setSkills(StrapiSkillRepository.getSkills());
    }, [i18n.language]);
    return skills;
};
