import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { useProjects } from "@/presentation/hooks/useProjects";
import { Github, Globe } from "lucide-react"; // Import des icônes
const ProjectDetailPage = () => {
    const { id } = useParams();
    const projects = useProjects();
    const project = projects.find((p) => p.id === id);
    if (!project) {
        return (_jsx("div", { className: "flex items-center justify-center h-[80vh]", children: _jsx("p", { className: "text-2xl text-gray-400", children: "\uD83D\uDE80 Projet introuvable." }) }));
    }
    return (_jsx("section", { className: "max-w-4xl mx-auto py-16 px-6", children: _jsxs("div", { className: "p-8 bg-black/30 border border-green-400/20\n                            backdrop-blur-lg shadow-lg rounded-2xl\n                            transition-all duration-500 hover:border-green-400/40", children: [_jsx("h1", { className: "text-4xl font-bold text-white mb-6", children: project.title }), _jsx("div", { className: "overflow-hidden rounded-lg", children: _jsx("img", { src: project.image, alt: project.title, className: "w-full h-64 object-cover rounded-lg" }) }), _jsx("p", { className: "text-gray-300 mt-6 leading-relaxed", children: project.description }), _jsxs("div", { className: "mt-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Technologies utilis\u00E9es :" }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech) => (_jsx("span", { className: "px-3 py-1 text-sm bg-green-500 text-black rounded-full\n                                           shadow-md hover:bg-green-400 transition-all duration-300", children: tech }, tech))) })] }), _jsxs("div", { className: "mt-8 flex gap-4", children: [project.link && (_jsxs("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-6 py-3 bg-green-400/80\n                                       text-black rounded-full font-medium shadow-lg\n                                       transition-all duration-300 hover:bg-green-500", children: [_jsx(Globe, { className: "w-5 h-5" }), "Voir le site"] })), project.repo && (_jsxs("a", { href: project.repo, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-6 py-3 bg-gray-800\n                                       text-white rounded-full font-medium shadow-lg\n                                       transition-all duration-300 hover:bg-gray-700", children: [_jsx(Github, { className: "w-5 h-5" }), "Voir le repo"] }))] })] }) }));
};
export default ProjectDetailPage;
