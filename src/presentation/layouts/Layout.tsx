import React from "react";
import Navbar from "@/shared/components/ui/navigation/Navbar";
import {BackgroundLines} from "@/shared/components/ui/background/BackgroundLines";
import Footer from "@/shared/components/ui/footer/footer";
import {Outlet} from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-black text-white relative">
            <Navbar />
            <BackgroundLines />
            <main className="content flex-1 z-10 overflow-visible">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
