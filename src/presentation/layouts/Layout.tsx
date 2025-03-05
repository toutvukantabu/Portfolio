import React from "react";
import {Navbar} from "@/presentation/components/ui/navigation/Navbar";
import {BackgroundLines} from "@/presentation/components/ui/background/BackgroundLines";
import Footer from "@/presentation/components/ui/footer/footer.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (

        <div className="flex flex-col min-h-screen w-full bg-black text-white relative">
            <Navbar />
            <BackgroundLines />
            <main className="content flex-1">{children}</main>
                <Footer/>
            </div>
    );
};

export default Layout;
