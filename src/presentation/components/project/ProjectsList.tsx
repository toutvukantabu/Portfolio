import React from "react";
import ProjectItem from "./ProjectItem";
import {ProjectService} from "@/application/services/ProjectService.ts";

const ProjectsList: React.FC = () => {
    const projectService = new ProjectService();
    const projects = projectService.getAllProjects();

    return (
        <div>
            <h1>Projets</h1>
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsList;
