import React from "react";
import {Navbar} from "../components/ui/navigation/Navbar.tsx";
import {BackgroundLines} from "../components/ui/background/BackgroundLines";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="min-h-screen w-full bg-black text-white relative">
            <BackgroundLines />
            <main className="content">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
