import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/shared/presentation/components/ui/navigation/Navbar";
import { BackgroundLines } from "@/shared/presentation/components/ui/background/BackgroundLines";
import Footer from "@/shared/presentation/components/ui/footer/footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen w-full bg-black text-white relative", children: [_jsx(Navbar, {}), _jsx(BackgroundLines, {}), _jsx("main", { className: "content flex-1 pt-32 md:pt-24 sm:pt-16", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default Layout;
