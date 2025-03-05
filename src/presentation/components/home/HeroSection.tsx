import React from "react";
import {useTranslation} from "react-i18next";

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    // const scrollToWork = () => {
    //     document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <section id="about" className="min-h-screen h-screen flex items-center px-6 relative">
            <div className="max-w-7xl mx-auto w-full pt-20 z-10">
                <div
                    className="inline-block mb-6 px-4 py-1 border border-green-400/20 rounded-full bg-green-400/5 text-green-400 text-sm font-medium">
                    {t("hero.greeting")}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="inline-block animate-float">{t("hero.name")}</span>
                    <span className="text-green-400 inline-block animate-float-delayed"> {t("hero.lastname")}</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                    {t("hero.description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button
                        onClick={() => console.log("Lien Twitter cliqué")}
                        className="group relative bg-green-400 text-black font-medium px-8 py-4 rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-500/10 text-lg"
                    >
                        Voir mon travail
                        <span
                            className="absolute inset-0 w-full h-full rounded-lg bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300"/>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;