import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "@/presentation/layouts/Layout";
import Home from "@/presentation/pages/home/Home";
import Contact from "@/presentation/pages/Contact/ContactPage";
import Projects from "@/presentation/pages/Projects/ProjectsPage";
import Project from "@/presentation/pages/Projects/ProjectPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:id" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
    )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
