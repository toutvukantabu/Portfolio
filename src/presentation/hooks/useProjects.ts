import {useEffect, useState} from "react";
import {StrapiProjectRepository} from "@/infrastructure/repositories/StrapiProjectRepository";
import {ProjectModel} from "@/domain/model/project/ProjectModel";
import {useTranslation} from "react-i18next";

export const useProjects = (): ProjectModel[] => {
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const {i18n} = useTranslation();
    useEffect(() => {
        setProjects(StrapiProjectRepository.getProjects());
    }, [i18n.language]);

    return projects;
};
