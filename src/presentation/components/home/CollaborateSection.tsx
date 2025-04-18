import {useNavigate} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import React from "react";
import {useTranslation} from "react-i18next";

const CollaborateSection: React.FC = () => {
    const navigate = useNavigate(); // Hook pour naviguer dans l'application
    const {t} = useTranslation();

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 backdrop-blur-lg">
            <div className="max-w-5xl mx-auto text-center">
                {/* Titre */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
                    {t("collaborateSection.title")}
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                    {t("collaborateSection.description")}
                </p>

                {/* Bouton avec animation */}
                <div className="relative inline-block">
                    <button
                        onClick={() => navigate("/contact")}
                        className="group relative bg-green-400 text-black font-medium px-10 py-4 rounded-lg
                            hover:bg-green-500 transition-all duration-300 pr-14 shadow-lg shadow-green-500/20 text-lg
                            overflow-hidden z-20"
                    >
                        {t("collaborateSection.button")}
                        <ArrowRight
                            className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70
                            group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                        />

                        {/* Effet de surbrillance */}
                        <span
                            className="absolute inset-0 w-full h-full rounded-lg bg-white/10
                            transform scale-0 group-hover:scale-100 transition-transform duration-300"
                        />
                    </button>

                    {/* Effet de halo lumineux */}
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-300
                        rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default CollaborateSection;
