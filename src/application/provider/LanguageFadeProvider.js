import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageFadeContext } from "@/application/context/LanguageFadeContext";
export const LanguageFadeProvider = ({ children }) => {
    const { i18n } = useTranslation();
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
    return (_jsx(LanguageFadeContext.Provider, { value: { isFading }, children: _jsx("div", { className: `transition-all duration-500 ease-out ${isFading ? "blur-md backdrop-blur-lg" : "blur-0 backdrop-blur-0"}`, children: children }) }));
};
