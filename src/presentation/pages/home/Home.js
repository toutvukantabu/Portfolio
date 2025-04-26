import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/presentation/pages/home/Home.tsx
import HeroSection from "@/presentation/components/home/HeroSection";
import CollaborateSection from "@/presentation/components/home/CollaborateSection";
import ExperienceSection from "@/presentation/components/home/ExperienceSection";
import SkillSection from "@/presentation/components/home/SkillSection"; // Attention ici, chemin exact
import { StrapiSkillRepository } from "@/infrastructure/repositories/skill/StrapiSkillRepository";
import { GetSkillsUseCase } from "@/application/usecases/getSkillUsecase";
import { SkillsProvider } from "@/presentation/context/skill/skillsProvider";
const skillRepo = new StrapiSkillRepository();
const skillUseCase = new GetSkillsUseCase(skillRepo);
const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(HeroSection, {}), _jsx(SkillsProvider, { useCase: skillUseCase, children: _jsx(SkillSection, {}) }), _jsx(ExperienceSection, {}), _jsx(CollaborateSection, {})] }));
};
export default Home;
