import React from "react";
import {useExperiences} from "@/presentation/hooks/useExperiences";
import useIntersectionObserver from "@/shared/presentation/hooks/UseIntersectionObserver";

const ExperienceSection: React.FC = () => {
    const {experiences, loading, error} = useExperiences();

    useIntersectionObserver("animate-in", ".animate-on-scroll", [experiences]);

    const formatPeriod = (startDate: string, endDate?: string) => {
        const start = new Date(startDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'});
        const end = endDate
            ? new Date(endDate).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})
            : 'Present';
        return `${start} - ${end}`;
    };

    if (loading) {
        return (
            <section id="experience" className="min-h-screen py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>
                    <div className="text-center text-gray-400">Loading experiences...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="experience" className="min-h-screen py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>
                    <div className="text-center text-red-400">Error loading experiences. Please try again later.</div>
                </div>
            </section>
        );
    }

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
                            <p className="text-green-400 mb-2">{exp.company} | {formatPeriod(exp.startDate, exp.endDate)}</p>
                            <p className="text-gray-400">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;