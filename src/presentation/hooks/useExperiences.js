import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {StrapiExperienceRepository} from "@/infrastructure/repositories/StrapiExperienceRepository";

export const useExperiences = () => {
    const {i18n} = useTranslation();
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        setExperiences(StrapiExperienceRepository.getExperiences());
    }, [i18n.language]);
    return experiences;
};
