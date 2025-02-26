import React from "react";
import HeroSection from "@/presentation/components/home/HeroSection";
import SkillSection from "@/presentation/components/home/SkillSection.tsx";
import Layout from "@/presentation/layouts/Layout.tsx";
import useIntersectionObserver from "@/application/hooks/UseIntersectionObserver.ts";

const Home: React.FC = () => {
    useIntersectionObserver("animate-in");
    return (
        <Layout>
            <HeroSection/>
            <SkillSection/>
            {/*<ExperienceSection/>*/}
        </Layout>
    );
};

export default Home;
