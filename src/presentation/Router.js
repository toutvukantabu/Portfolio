import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "@/presentation/layouts/Layout";
import Home from "@/presentation/pages/home/Home";
import Contact from "@/presentation/pages/Contact/ContactPage";
import Projects from "@/presentation/pages/Projects/ProjectsPage";
import Project from "@/presentation/pages/Projects/ProjectPage";
const router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/projects/:id", element: _jsx(Project, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] })));
export default function Router() {
    return _jsx(RouterProvider, { router: router });
}
