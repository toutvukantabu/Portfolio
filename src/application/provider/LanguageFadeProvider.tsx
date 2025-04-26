import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {LanguageFadeContext} from "@/presentation/context/LanguageFadeContext";

export const LanguageFadeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {i18n} = useTranslation();
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const handleLanguageChange = () => {
            setIsFading(true);
            setTimeout(() => setIsFading(false), 300);
        };

        i18n.on("languageChanged", handleLanguageChange);
        return () => {
            i18n.off("languageChanged", handleLanguageChange);
        };
    }, [i18n]);

    return (
        <LanguageFadeContext.Provider value={{isFading}}>
            <div
                className={`transition-all duration-500 ease-out ${
                    isFading ? "blur-md backdrop-blur-lg" : "blur-0 backdrop-blur-0"
                }`}
            >
                {children}
            </div>
        </LanguageFadeContext.Provider>
    );
};
