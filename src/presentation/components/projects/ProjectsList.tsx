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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="p-6 bg-zinc-900 rounded-lg shadow-lg">
                            <img src={project.image} alt={project.title}
                                 className="w-full h-48 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                            <button onClick={() => navigate(`/projects/${project.id}`)}
                                    className="mt-4 px-4 py-2 bg-green-400 text-black rounded-md">
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
