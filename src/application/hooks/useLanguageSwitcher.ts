import {useState} from "react";
import {useTranslation} from "react-i18next";

export const useLanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isFading, setIsFading] = useState(false);

    const changeLanguage = (lang: string) => {
        if (lang !== currentLanguage) {
            setIsFading(true);
            setTimeout(() => {
                i18n.changeLanguage(lang);
                setCurrentLanguage(lang);
                setIsFading(false);
            }, 300); // Temps de l'animation
        }
    };

    return {currentLanguage, changeLanguage, isFading};
};
