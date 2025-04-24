import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useProjects } from "@/presentation/hooks/useProjects";
import { useNavigate } from "react-router-dom";
const ProjectsPage = () => {
    const projects = useProjects();
    const navigate = useNavigate();
    return (_jsx("section", { className: "py-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-5xl font-bold mb-12 text-white", children: "Mes Projets" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: projects.map((project) => (_jsxs("div", { className: "p-6 bg-black/20 backdrop-blur-lg\n                                       border border-green-400/20 rounded-xl\n                                       shadow-lg transition-all duration-500\n                                       hover:shadow-green-400/20 hover:-translate-y-2", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-48 object-cover rounded-md mb-4\n                                           transition-transform duration-500\n                                           hover:scale-105" }), _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: project.title }), _jsx("p", { className: "text-gray-400 text-sm", children: project.description }), _jsx("button", { onClick: () => navigate(`/projects/${project.id}`), className: "mt-4 px-6 py-3 bg-green-400/80\n                                           text-black rounded-full transition-all\n                                           duration-300 hover:bg-green-500", children: "Voir le projet" })] }, project.id))) })] }) }));
};
export default ProjectsPage;
