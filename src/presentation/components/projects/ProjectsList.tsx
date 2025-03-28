import React from "react";
import {useProjects} from "@/application/hooks/useProjects";
import {useNavigate} from "react-router-dom";

const ProjectsPage: React.FC = () => {
    const projects = useProjects();
    const navigate = useNavigate();

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-white">Mes Projets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="p-6 bg-black/20 backdrop-blur-lg
                                       border border-green-400/20 rounded-xl
                                       shadow-lg transition-all duration-500
                                       hover:shadow-green-400/20 hover:-translate-y-2"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-md mb-4
                                           transition-transform duration-500
                                           hover:scale-105"
                            />
                            <h3 className="text-xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {project.description}
                            </p>
                            <button
                                onClick={() => navigate(`/projects/${project.id}`)}
                                className="mt-4 px-6 py-3 bg-green-400/80
                                           text-black rounded-full transition-all
                                           duration-300 hover:bg-green-500"
                            >
                                Voir le projet
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
