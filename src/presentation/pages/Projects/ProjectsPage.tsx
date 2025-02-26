import React from "react";
import Layout from "@/presentation/layouts/Layout.tsx";
import ProjectsList from "@/presentation/components/project/ProjectsList.tsx";

const ProjectsPage: React.FC = () => {
    return (
        <Layout>
            <ProjectsList />
        </Layout>
    );
};

export default ProjectsPage;
