import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {HeroModel} from "@/domain/models/HeroModel";
import {HeroService} from "@/application/services/HeroService";

export const useHeroContent = (): HeroModel | null => {
    const [content, setContent] = useState<HeroModel | null>(null);
    const {i18n} = useTranslation();

    useEffect(() => {
        const locale = i18n.language === "en" ? "en" : "fr";
        HeroService.getHero(locale).then(setContent);
    }, [i18n.language]);
    console.log(content)
    return content;
};
