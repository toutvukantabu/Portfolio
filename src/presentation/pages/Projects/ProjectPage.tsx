import React from "react";
import Layout from "@/presentation/layouts/Layout.tsx";
import ProjectItem from "@/presentation/components/project/ProjectItem.tsx";

const ProjectPage: React.FC = () => {
    return (
        <Layout>
            <h1>Projet</h1>
            <ProjectItem project={{ id: "1", name: "Projet Test", description: "Exemple de projet", startDate: "2024-01-01" }} />
        </Layout>
    );
};

export default ProjectPage;
