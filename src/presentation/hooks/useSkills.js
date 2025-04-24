import {useEffect, useState} from "react";
import {SkillService} from "@/application/services/SkillService";
import {useLocale} from "@/shared/presentation/hooks/useLocale";

export const useSkills = () => {
    const [skills, setSkills] = useState([]);
    const locale = useLocale();
    useEffect(() => {
        (async () => {
            const result = await SkillService.getSkills(locale);
            setSkills(result);
        })();
    }, [locale]);
    return skills;
};
