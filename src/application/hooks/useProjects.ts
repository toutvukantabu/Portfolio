import {useEffect, useState} from "react";
import {ProjectService} from "@/application/services/Projects/ProjectService.ts";
import {ProjectModel} from "@/domain/models/ProjectModel.ts";
import {useTranslation} from "react-i18next";

export const useProjects = (): ProjectModel[] => {
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const {i18n} = useTranslation();
    useEffect(() => {
        setProjects(ProjectService.getProjects());
    }, [i18n.language]);

    return projects;
};
