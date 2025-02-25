import React from "react";
import HeroSection from "../../components/home/HeroSection.tsx";
import SkillSection from "../../components/home/SkillSection.tsx";
import Layout from "../../layouts/Layout.tsx";
import useIntersectionObserver   from "../../../application/hooks/UseIntersectionObserver.ts";
import ExperienceSection     from "../../components/home/ExperienceSection.tsx";
const Home: React.FC = () => {
    useIntersectionObserver("animate-in");
    return (
        <Layout>
            <HeroSection/>
            <SkillSection/>
            <ExperienceSection/>
        </Layout>
    );
};

export default Home;
