import {useEffect, useState} from "react";
import {HeroService} from "@/application/services/hero/HeroService";
import {Hero} from "@/domain/hero/entities/Hero";
import {useLocale} from "@/shared/presentation/hooks/useLocale";


export const useHeroContent = (): Hero | null => {
    const [content, setContent] = useState<Hero | null>(null);
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
