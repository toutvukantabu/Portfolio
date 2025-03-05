import {useParams} from "react-router-dom";
import {useProjects} from "@/application/hooks/useProjects.ts";
import React from "react";

const ProjectDetailPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const projects = useProjects();
    const project = projects.find((p) => p.id === id);

    if (!project) return <p className="text-center text-white text-xl">Projet introuvable.</p>;

    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full my-6 rounded-lg shadow-lg"/>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-white">Technologies utilisées :</h3>
                <div className="flex gap-2 mt-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-sm bg-green-500 text-white rounded">{tech}</span>
                    ))}
                </div>
            </div>
            {project.link && (
                <a href={project.link} target="_blank"
                   className="block mt-6 px-6 py-3 bg-green-400 text-black rounded-md text-center">
                    Voir le projet en ligne
                </a>
            )}
        </section>
    );
};

export default ProjectDetailPage;
