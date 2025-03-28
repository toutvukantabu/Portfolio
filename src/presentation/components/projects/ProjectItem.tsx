import {useParams} from "react-router-dom";
import {useProjects} from "@/application/hooks/useProjects";
import React from "react";
import {Github, Globe} from "lucide-react"; // Import des icônes

const ProjectDetailPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const projects = useProjects();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <p className="text-2xl text-gray-400">🚀 Projet introuvable.</p>
            </div>
        );
    }

    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            {/* ✅ Carte Glassmorphism */}
            <div className="p-8 bg-black/30 border border-green-400/20
                            backdrop-blur-lg shadow-lg rounded-2xl
                            transition-all duration-500 hover:border-green-400/40">

                {/* ✅ Titre */}
                <h1 className="text-4xl font-bold text-white mb-6">
                    {project.title}
                </h1>

                {/* ✅ Image */}
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* ✅ Description */}
                <p className="text-gray-300 mt-6 leading-relaxed">
                    {project.description}
                </p>

                {/* ✅ Technologies */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Technologies utilisées :
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-green-500 text-black rounded-full
                                           shadow-md hover:bg-green-400 transition-all duration-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ✅ Section des liens */}
                <div className="mt-8 flex gap-4">
                    {/* Lien vers le site en ligne */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-green-400/80
                                       text-black rounded-full font-medium shadow-lg
                                       transition-all duration-300 hover:bg-green-500"
                        >
                            <Globe className="w-5 h-5"/>
                            Voir le site
                        </a>
                    )}

                    {/* Lien vers le repository GitHub */}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gray-800
                                       text-white rounded-full font-medium shadow-lg
                                       transition-all duration-300 hover:bg-gray-700"
                        >
                            <Github className="w-5 h-5"/>
                            Voir le repo
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailPage;
