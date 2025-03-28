import {useEffect, useState} from "react";
import {ProjectRepository} from "@/infrastructure/repositories/ProjectRepository";
import {ProjectModel} from "@/domain/models/ProjectModel";
import {useTranslation} from "react-i18next";

export const useProjects = (): ProjectModel[] => {
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const {i18n} = useTranslation();
    useEffect(() => {
        setProjects(ProjectRepository.getProjects());
    }, [i18n.language]);

    return projects;
};
