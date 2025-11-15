import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {ExperienceModel} from "@/domain/experience/entities/ExperienceModel";
import {container} from "@/config/container";
import {GetExperiencesUseCase} from "@/application/experience/getExperienceUsecase";

export interface UseExperiencesReturn {
    experiences: ExperienceModel[];
    loading: boolean;
    error: Error | null;
}

export const useExperiences = (): UseExperiencesReturn => {
    const {i18n} = useTranslation();
    const [experiences, setExperiences] = useState<ExperienceModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                setLoading(true);
                setError(null);
                const getExperiencesUseCase = container.resolve(GetExperiencesUseCase);
                const data = await getExperiencesUseCase.execute(i18n.language);
                setExperiences(data);
            } catch (err) {
                console.error('Error fetching experiences:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, [i18n.language]);

    return {experiences, loading, error};
};