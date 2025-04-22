import React from "react";
import {X} from "lucide-react";
import {NavLink} from "react-router-dom";

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    links: { id: string; label: string }[];
    pages: { path: string; label: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, toggleMenu, links, pages}) => {
    return (
        <div
            className={`fixed inset-0 bg-black/90 backdrop-blur-lg transition-transform duration-300 md:hidden z-[99] min-h-screen ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}>
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-gray-300 hover:text-green-400">
                <X className="w-8 h-8"/>
            </button>
            <div className="flex flex-col items-center justify-center gap-8 px-6 pt-20 pb-10">
                {links.map(({id, label}) => (
                    <a key={id || ""} href={`#${id || ""}`} className="text-2xl text-gray-300 hover:text-green-400">
                        {label}
                    </a>
                ))}
                {pages.map(({path, label}) => (
                    <NavLink key={path || ""} to={`/${path || ""}`} onClick={toggleMenu}
                             className="text-2xl text-gray-300 hover:text-green-400">
                        {label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default MobileMenu;
