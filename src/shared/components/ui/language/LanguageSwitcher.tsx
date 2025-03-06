import React from "react";
import {useLanguageSwitcher} from "@/application/hooks/useLanguageSwitcher";

const LanguageSwitcher: React.FC = () => {
    const {currentLanguage, changeLanguage, isFading} = useLanguageSwitcher();

    return (
        <div className={`flex gap-2 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>
            {["fr", "en"].map((lang) => (
                <label key={lang} className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="language"
                        value={lang}
                        checked={currentLanguage === lang}
                        onChange={() => changeLanguage(lang)}
                        className="hidden"
                    />
                    <span
                        className={`px-2 py-1 rounded-lg text-sm ${
                            currentLanguage === lang ? "bg-green-400 text-black" : "text-gray-300"
                        }`}
                    >
            {lang.toUpperCase()}
          </span>
                </label>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
