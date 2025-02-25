import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/ContactPage";
import Projects from "./pages/Projects/ProjectsPage.tsx";
import Project from "./pages/Projects/ProjectPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />, // Page contact
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
