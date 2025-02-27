import React from "react";
import HeroSection from "@/presentation/components/home/HeroSection";
import SkillSection from "@/presentation/components/home/SkillSection.tsx";
import Layout from "@/presentation/layouts/Layout.tsx";

import ExperienceSection from "@/presentation/components/home/ExperienceSection.tsx";

const Home: React.FC = () => {

    return (
        <Layout>
            <HeroSection/>
            <SkillSection/>
            <ExperienceSection/>
        </Layout>
    );
};

export default Home;
