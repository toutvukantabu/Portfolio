import {useEffect, useState} from "react";
import {SkillService} from "@/application/services/SkillService";
import {useLocale} from "@/shared/presentation/hooks/useLocale";
import {SkillModel} from "@/domain/model/skill/SkillModel";

export const useSkills = (): SkillModel[] => {
    const [skills, setSkills] = useState<SkillModel[]>([]);
    const locale = useLocale();

    useEffect(() => {
        (async () => {
            const result = await SkillService.getSkills(locale);
            setSkills(result);
        })();
    }, [locale]);

    return skills;
};
