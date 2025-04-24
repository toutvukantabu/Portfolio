import {jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {useLanguageSwitcher} from "@/presentation/hooks/useLanguageSwitcher";

const LanguageSwitcher = () => {
    const {currentLanguage, changeLanguage, isFading} = useLanguageSwitcher();
    return (_jsx("div", {
        className: `flex gap-2 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`,
        children: ["fr", "en"].map((lang) => (_jsxs("label", {
            className: "flex items-center cursor-pointer",
            children: [_jsx("input", {
                type: "radio",
                name: "language",
                value: lang,
                checked: currentLanguage === lang,
                onChange: () => changeLanguage(lang),
                className: "hidden"
            }), _jsx("span", {
                className: `px-2 py-1 rounded-lg text-sm ${currentLanguage === lang ? "bg-green-400 text-black" : "text-gray-300"}`,
                children: lang.toUpperCase()
            })]
        }, lang)))
    }));
};
export default LanguageSwitcher;
