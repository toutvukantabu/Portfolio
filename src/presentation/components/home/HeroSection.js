import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useHeroContent } from "@/presentation/hooks/useHeroContent";
const HeroSection = () => {
    const hero = useHeroContent();
    if (!hero)
        return null;
    return (_jsx("section", { id: "about", className: "min-h-screen h-screen flex items-center px-6 relative", children: _jsxs("div", { className: "max-w-7xl mx-auto w-full pt-20 z-10", children: [_jsx("div", { className: "inline-block mb-6 px-4 py-1 border border-green-400/20 rounded-full bg-green-400/5 text-green-400 text-sm font-medium", children: hero.title }), _jsxs("h1", { className: "text-5xl md:text-7xl font-bold mb-6 tracking-tight", children: [_jsx("span", { className: "inline-block animate-float", children: hero.name }), _jsxs("span", { className: "text-green-400 inline-block animate-float-delayed", children: [" ", hero.lastname] })] }), _jsx("p", { className: "text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed", children: hero.description }), _jsx("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6", children: _jsxs("button", { onClick: () => console.log("Lien Twitter cliqué"), className: "group relative bg-green-400 text-black font-medium px-8 py-4 rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-500/10 text-lg", children: [hero.callToAction, _jsx("span", { className: "absolute inset-0 w-full h-full rounded-lg bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300" })] }) })] }) }));
};
export default HeroSection;
