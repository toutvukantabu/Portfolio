import React from "react";
import {Navbar} from "@/presentation/components/ui/navigation/Navbar";
import {BackgroundLines} from "@/presentation/components/ui/background/BackgroundLines";
import Footer from "@/presentation/components/ui/footer/footer.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="min-h-screen w-full bg-black text-white relative">
            <BackgroundLines />
            <main className="content">{children}</main>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
