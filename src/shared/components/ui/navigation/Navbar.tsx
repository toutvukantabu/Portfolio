import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Menu} from "lucide-react";
import {ReactComponent as Logo} from "@/assets/icons/logo.svg";
import {useNavbar} from "@/application/hooks/useNavbar";
import {useNavigationLinks} from "@/application/hooks/useNavigationLinks";
import {useSmoothScroll} from "@/application/hooks/useSmoothScroll";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/shared/components/ui/language/LanguageSwitcher";

const Navbar: React.FC = () => {
    const {scrolled, isMenuOpen, toggleMenu} = useNavbar();
    const {links, pages} = useNavigationLinks();
    const {scrollToSection} = useSmoothScroll();

    return (
        <nav className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${
            scrolled ? "bg-white/40 backdrop-blur-lg shadow-md" : "bg-transparent py-6"
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-green-400 font-bold text-xl tracking-wider">
                    <Logo/>
                </Link>

                {/* Navigation Desktop */}
                <div className="hidden md:flex gap-8">
                    {links.map(({id, label}) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(id);
                            }}
                            className="text-gray-300 hover:text-green-400"
                        >
                            {label}
                        </a>
                    ))}
                    {pages.map(({path, label}) => (
                        <NavLink key={path} to={`/${path}`} className={({isActive}) =>
                            `text-gray-300 hover:text-green-400 ${isActive ? "text-green-400" : ""}`
                        }>
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* Switcher de langue */}
                <LanguageSwitcher/>

                {/* Menu Burger (Mobile) */}
                <button onClick={toggleMenu} className="md:hidden text-green-400">
                    <Menu className="w-6 h-6"/>
                </button>
            </div>

            {/* Menu Mobile */}
            <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} links={links} pages={pages}/>
        </nav>
    );
};

export default Navbar;
