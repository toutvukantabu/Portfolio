import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {ExperienceModel} from "@/domain/models/ExperienceModel";
import {ExperienceRepository} from "@/infrastructure/repositories/ExperienceRepository.ts";

export const useExperiences = (): ExperienceModel[] => {
    const {i18n} = useTranslation();
    const [experiences, setExperiences] = useState<ExperienceModel[]>([]);

    useEffect(() => {
        setExperiences(ExperienceRepository.getExperiences());
    }, [i18n.language]);
    return experiences;
};