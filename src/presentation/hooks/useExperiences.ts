import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {ExperienceModel} from "@/domain/model/experience/ExperienceModel";
import {StrapiExperienceRepository} from "@/infrastructure/repositories/StrapiExperienceRepository";

export const useExperiences = (): ExperienceModel[] => {
    const {i18n} = useTranslation();
    const [experiences, setExperiences] = useState<ExperienceModel[]>([]);

    useEffect(() => {
        setExperiences(StrapiExperienceRepository.getExperiences());
    }, [i18n.language]);
    return experiences;
};