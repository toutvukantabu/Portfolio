import React from "react";
import {useExperiences} from "@/application/hooks/UseExperiences.ts";
import useIntersectionObserver from "@/shared/hooks/UseIntersectionObserver.ts";

const ExperienceSection: React.FC = () => {
    const experiences = useExperiences();

    useIntersectionObserver("animate-in", ".animate-on-scroll", [experiences]);

    return (
        <section id="experience" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>
                <div className="space-y-12 ">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-green-400 pl-8 animate-on-scroll opacity-0"
                            style={{animation: "none", animationDelay: `${index * 200}ms`}}
                        >
                            <h3 className="text-2xl font-semibold">{exp.role}</h3>
                            <p className="text-green-400 mb-2">{exp.company} | {exp.period}</p>
                            <p className="text-gray-400">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;