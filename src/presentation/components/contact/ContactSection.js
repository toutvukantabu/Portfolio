import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContactForm from "@/presentation/components/contact/ContactForm";
import useIntersectionObserver from "@/shared/presentation/hooks/UseIntersectionObserver";
const ContactSection = () => {
    // Ajout des classes spécifiques pour chaque bloc
    useIntersectionObserver("slide-in-left", ".calcom-block");
    useIntersectionObserver("slide-in-right", ".form-block");
    return (_jsx("section", { className: "flex items-center justify-center min-h-screen px-6 bg-zinc-900/80 backdrop-blur-sm", children: _jsxs("div", { className: "max-w-6xl w-full mx-auto", children: [_jsxs("div", { className: "text-center mb-12 ", children: [_jsx("h2", { className: "text-5xl font-bold mb-6 text-white", children: "Let's Work Together" }), _jsx("p", { className: "text-gray-400 max-w-2xl mx-auto text-lg", children: "Open for new opportunities and collaborations. Feel free to reach out!" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center", children: [_jsxs("div", { className: "calcom-block h-[600px] p-8 border border-green-400/20 rounded-xl bg-black/30\n                                    hover:border-green-400/40 transition-all duration-300 shadow-lg opacity-0", children: [_jsx("h3", { className: "text-3xl font-semibold text-green-400 mb-6", children: "Schedule a Video Call" }), _jsx("iframe", { src: "http://localhost:3000/gwendal", style: {
                                        width: "100%",
                                        height: "480px",
                                        border: "none",
                                        borderRadius: "8px",
                                        overflow: "visible"
                                    }, allow: "camera; microphone; display-capture" })] }), _jsx("div", { className: "flex items-center justify-center", children: _jsx("div", { className: "text-gray-500 text-xl font-semibold", children: "OU" }) }), _jsxs("div", { className: "form-block h-[600px] p-8 border border-green-400/20 rounded-xl bg-black/30\n                                    hover:border-green-400/40 transition-all duration-300 shadow-lg opacity-0", children: [_jsx("h3", { className: "text-3xl font-semibold text-green-400 mb-6", children: "Send Me a Message" }), _jsx(ContactForm, {})] })] })] }) }));
};
export default ContactSection;
