import React from "react";
import Layout from "../../layouts/Layout.tsx";
import ProjectsList from "../../components/project/ProjectsList.tsx";

const ProjectsPage: React.FC = () => {
    return (
        <Layout>
            <ProjectsList />
        </Layout>
    );
};

export default ProjectsPage;
