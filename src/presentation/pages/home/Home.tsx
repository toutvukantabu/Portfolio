// src/presentation/pages/home/Home.tsx

import HeroSection from "@/presentation/components/home/HeroSection";
import CollaborateSection from "@/presentation/components/home/CollaborateSection";
import ExperienceSection from "@/presentation/components/home/ExperienceSection";
import SkillSection from "@/presentation/components/home/SkillSection"; // Attention ici, chemin exact
import {StrapiSkillRepository} from "@/infrastructure/repositories/skill/StrapiSkillRepository";
import {GetSkillsUseCase} from "@/application/usecases/getSkillUsecase";
import {SkillsProvider} from "@/presentation/context/skill/skillsProvider";

const skillRepo = new StrapiSkillRepository();
const skillUseCase = new GetSkillsUseCase(skillRepo);

const Home = () => {
    return (
        <>
            <HeroSection/>

            <SkillsProvider useCase={skillUseCase}>
                <SkillSection/>
            </SkillsProvider>

            <ExperienceSection/>
            <CollaborateSection/>
        </>
    );
};

export default Home;
