import React from "react";
import {Project} from "@/domain/models/Project";

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>Début: {project.startDate}</small>
        </div>
    );
};

export default ProjectItem;
