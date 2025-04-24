import {jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {Link, NavLink} from "react-router-dom";
import {Menu} from "lucide-react";
import {ReactComponent as Logo} from "@/assets/icons/logo.svg";
import {useNavbar} from "@/presentation/hooks/useNavbar";
import {useNavigationLinks} from "@/presentation/hooks/useNavigationLinks";
import {useSmoothScroll} from "@/presentation/hooks/useSmoothScroll";
import MobileMenu from "@/shared/presentation/components/ui/navigation/MobileMenu";
import LanguageSwitcher from "@/shared/presentation/components/ui/language/LanguageSwitcher";

const Navbar = () => {
    const {scrolled, isMenuOpen, toggleMenu} = useNavbar();
    const {links, pages} = useNavigationLinks();
    const {scrollToSection} = useSmoothScroll();
    return (_jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${scrolled ? "bg-white/40 backdrop-blur-lg shadow-md" : "bg-transparent py-6"}`,
        children: [_jsxs("div", {
            className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
            children: [_jsx(Link, {
                to: "/",
                className: "text-green-400 font-bold text-xl tracking-wider",
                children: _jsx(Logo, {})
            }), _jsxs("div", {
                className: "hidden md:flex gap-8", children: [links.map(({id, label}) => (_jsx("a", {
                    href: `#${id}`, onClick: (e) => {
                        e.preventDefault();
                        scrollToSection(id);
                    }, className: "text-gray-300 hover:text-green-400", children: label
                }, id))), pages.map(({path, label}) => (_jsx(NavLink, {
                    to: `/${path}`,
                    className: ({isActive}) => `text-gray-300 hover:text-green-400 ${isActive ? "text-green-400" : ""}`,
                    children: label
                }, path)))]
            }), _jsx(LanguageSwitcher, {}), _jsx("button", {
                onClick: toggleMenu,
                className: "md:hidden text-green-400",
                children: _jsx(Menu, {className: "w-6 h-6"})
            })]
        }), _jsx(MobileMenu, {isOpen: isMenuOpen, toggleMenu: toggleMenu, links: links, pages: pages})]
    }));
};
export default Navbar;
