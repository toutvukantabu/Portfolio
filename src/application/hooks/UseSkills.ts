import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {SkillModel} from "@/domain/models/SkillModel";
import {SkillService} from "@/application/services/home/SkillService.ts";

export const useSkills = (): SkillModel[] => {
    const { i18n } = useTranslation();
    const [skills, setSkills] = useState<SkillModel[]>([]);

    useEffect(() => {
        setSkills(SkillService.getSkills());
    }, [i18n.language]);
    return skills;
};
