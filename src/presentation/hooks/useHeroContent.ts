import {useEffect, useState} from "react";
import {HeroService} from "@/application/services/hero/HeroService";
import {HeroModel} from "@/domain/model/hero/HeroModel";
import {useLocale} from "@/shared/presentation/hooks/useLocale";


export const useHeroContent = (): HeroModel | null => {
    const [content, setContent] = useState<HeroModel | null>(null);
    const locale = useLocale();

    useEffect(() => {
        (async () => {
            try {
                const data = await HeroService.getHero(locale);
                setContent(data);
            } catch (error) {
                console.error("Erreur lors du chargement du Hero :", error);
            }
        })();
    }, [locale]);

    return content;
};
