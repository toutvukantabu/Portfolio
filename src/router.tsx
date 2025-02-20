import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {App} from "./App";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Page principale avec les ancres
  },
  {
    path: "/projects",
    element: <Projects />, // Page projets
  },
  {
    path: "/contact",
    element: <Contact />, // Page contact
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
