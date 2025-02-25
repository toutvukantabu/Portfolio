import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="min-h-screen h-screen flex items-center px-6 relative">
            <div className="max-w-7xl mx-auto w-full pt-20">
                <h1 className="text-6xl font-bold mb-4">
                    <span className="text-white block text-2xl mb-2">{t("hero.greeting")}</span>
                    <span className="inline-block animate-float">{t("hero.name")}</span>
                    <span className="text-green-400 inline-block animate-float-delayed"> {t("hero.lastname")}</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mb-8">
                    {t("hero.description")}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;