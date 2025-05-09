import React from "react";
import {useSkills} from "@/presentation/hooks/useSkills";
import useIntersectionObserver from "@/shared/presentation/hooks/UseIntersectionObserver";

/**
 * 🖥️ SkillSection
 *
 * ▶️ Rôle :
 * Composant UI qui affiche la liste des compétences.
 *
 * ▶️ Fonctionnement :
 * Utilise le hook useSkills pour récupérer les données et les rend avec des icônes.
 */
const SkillsSection: React.FC = () => {
    const {skills} = useSkills();
    useIntersectionObserver("animate-in", ".animate-on-scroll", [skills]);
    return (
        <section id="skills" className=" py-20 px-6 bg-zinc-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Compétences</h2>
                <div className="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-0 overflow-hidden">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-6 border border-green-400/20 rounded-xl
               backdrop-blur-lg bg-black/20 shadow-lg
               hover:border-green-400/40 transition-all duration-500
               hover:shadow-green-400/20 transform hover:-translate-y-2 animate-on-scroll opacity-0"
                            style={{animationDelay: `${index * 200}ms`}}
                        >
                            <div className="relative overflow-hidden">
                                <skill.icon
                                    className="w-12 h-12 text-green-400 mb-4 transform group-hover:scale-125 transition-transform duration-300"
                                />
                                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {skill.desc}
                                </p>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
};


export default SkillsSection;