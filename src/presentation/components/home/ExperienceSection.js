import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useExperiences } from "@/presentation/hooks/useExperiences";
import useIntersectionObserver from "@/shared/presentation/hooks/UseIntersectionObserver";
const ExperienceSection = () => {
    const experiences = useExperiences();
    useIntersectionObserver("animate-in", ".animate-on-scroll", [experiences]);
    return (_jsx("section", { id: "experience", className: "min-h-screen py-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-12", children: "Professional Experience" }), _jsx("div", { className: "space-y-12 ", children: experiences.map((exp, index) => (_jsxs("div", { className: "border-l-2 border-green-400 pl-8 animate-on-scroll opacity-0", style: { animation: "none", animationDelay: `${index * 200}ms` }, children: [_jsx("h3", { className: "text-2xl font-semibold", children: exp.role }), _jsxs("p", { className: "text-green-400 mb-2", children: [exp.company, " | ", exp.period] }), _jsx("p", { className: "text-gray-400", children: exp.desc })] }, index))) })] }) }));
};
export default ExperienceSection;
