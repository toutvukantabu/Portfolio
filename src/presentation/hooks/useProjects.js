import {useEffect, useState} from "react";
import {StrapiProjectRepository} from "@/infrastructure/repositories/StrapiProjectRepository";
import {useTranslation} from "react-i18next";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const {i18n} = useTranslation();
    useEffect(() => {
        setProjects(StrapiProjectRepository.getProjects());
    }, [i18n.language]);
    return projects;
};
