import React from "react";
import HeroSection from "@/presentation/components/home/HeroSection";
import SkillSection from "@/presentation/components/home/SkillSection";
import ExperienceSection from "@/presentation/components/home/ExperienceSection";
import CollaborateSection from "@/presentation/components/home/CollaborateSection";

const Home: React.FC = () => {

    return (
        <>
            <HeroSection/>
            <SkillSection/>
            <ExperienceSection/>
            <CollaborateSection/>
        </>
    );
};

export default Home;
