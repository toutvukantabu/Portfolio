import React from "react";
import Navbar from "@/shared/presentation/components/ui/navigation/Navbar";
import {BackgroundLines} from "@/shared/presentation/components/ui/background/BackgroundLines";
import Footer from "@/shared/presentation/components/ui/footer/footer";
import {Outlet} from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-black text-white relative">
            {/* Navbar */}
            <Navbar />
            <BackgroundLines />

            {/* ✅ Gestion globale du padding-top */}
            <main className="content flex-1 pt-32 md:pt-24 sm:pt-16">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};

export default Layout;
