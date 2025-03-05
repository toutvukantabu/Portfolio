import React from "react";
import Layout from "@/presentation/layouts/Layout.tsx";
import ProjectItem from "@/presentation/components/projects/ProjectItem.tsx";

const ProjectPage: React.FC = () => {
    return (
        <Layout>
            <h1>Projet</h1>
            <ProjectItem/>
        </Layout>
    );
};

export default ProjectPage;
