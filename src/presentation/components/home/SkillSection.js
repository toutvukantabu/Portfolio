import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSkills } from "@/presentation/hooks/useSkills";
import useIntersectionObserver from "@/shared/presentation/hooks/UseIntersectionObserver";
const SkillsSection = () => {
    const skills = useSkills();
    useIntersectionObserver("animate-in", ".animate-on-scroll", [skills]);
    return (_jsx("section", { id: "skills", className: " py-20 px-6 bg-zinc-900/80 backdrop-blur-sm", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-12", children: "Comp\u00E9tences" }), _jsx("div", { className: "py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-0 overflow-hidden", children: skills.map((skill, index) => (_jsx("div", { className: "group p-6 border border-green-400/20 rounded-xl\n               backdrop-blur-lg bg-black/20 shadow-lg\n               hover:border-green-400/40 transition-all duration-500\n               hover:shadow-green-400/20 transform hover:-translate-y-2 animate-on-scroll opacity-0", style: { animationDelay: `${index * 200}ms` }, children: _jsxs("div", { className: "relative overflow-hidden", children: [_jsx(skill.icon, { className: "w-12 h-12 text-green-400 mb-4 transform group-hover:scale-125 transition-transform duration-300" }), _jsx("h3", { className: "text-2xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors", children: skill.title }), _jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: skill.desc })] }) }, index))) })] }) }));
};
export default SkillsSection;
