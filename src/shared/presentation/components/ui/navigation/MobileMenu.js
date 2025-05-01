import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
const MobileMenu = ({ isOpen, toggleMenu, links, pages }) => {
    return (_jsxs("div", { className: `fixed inset-0 bg-black/90 backdrop-blur-lg transition-transform duration-300 md:hidden z-[99] min-h-screen ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`, children: [_jsx("button", { onClick: toggleMenu, className: "absolute top-6 right-6 text-gray-300 hover:text-green-400", children: _jsx(X, { className: "w-8 h-8" }) }), _jsxs("div", { className: "flex flex-col items-center justify-center gap-8 px-6 pt-20 pb-10", children: [links.map(({ id, label }) => (_jsx("a", { href: `#${id || ""}`, className: "text-2xl text-gray-300 hover:text-green-400", children: label }, id || ""))), pages.map(({ path, label }) => (_jsx(NavLink, { to: `/${path || ""}`, onClick: toggleMenu, className: "text-2xl text-gray-300 hover:text-green-400", children: label }, path || "")))] })] }));
};
export default MobileMenu;
