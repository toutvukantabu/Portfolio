import {jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {ReactComponent as TwitterIcon} from "@/assets/icons/x.svg";
import {ReactComponent as GitHubIcon} from "@/assets/icons/github.svg";
import {ReactComponent as LinkedInIcon} from "@/assets/icons/linkedin.svg";

const Footer = () => {
    return (_jsxs("footer", {
        className: "relative py-8 bg-transparent border-t backdrop-blur-lg border-green-800/20 dark:border-gray-800",
        children: [_jsx("div", {className: "absolute top-0 left-0 w-full h-[2px] bg-green-400/30\n                            backdrop-blur-md shadow-lg"}), _jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-4",
                children: [_jsxs("div", {
                    className: "flex flex-col items-center md:items-start",
                    children: [_jsx("p", {
                        className: "text-gray-500 dark:text-gray-400 font-medium",
                        children: "\u00A9 2025 Gwendal Bescont"
                    }), _jsx("p", {
                        className: "text-sm text-gray-400 dark:text-gray-500 mt-1",
                        children: "D\u00E9veloppeur Web Cr\u00E9atif"
                    })]
                }), _jsxs("div", {
                    className: "flex items-center gap-8",
                    children: [_jsx("a", {
                        href: "https://twitter.com/yourprofile",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group transition-all duration-400 hover:scale-110",
                        children: _jsx(TwitterIcon, {
                            fill: "#4ade80",
                            width: 32,
                            height: 32,
                            className: "transition-colors duration-400 group-hover:fill-green-400\n                                           shadow-md hover:shadow-green-400/30 rounded-full"
                        })
                    }), _jsx("a", {
                        href: "https://github.com/toutvukantabu",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group transition-all duration-400 hover:scale-110",
                        children: _jsx(GitHubIcon, {
                            fill: "#4ade80",
                            width: 32,
                            height: 32,
                            className: "transition-colors duration-400 group-hover:fill-green-400\n                                           shadow-md hover:shadow-green-400/30 rounded-full"
                        })
                    }), _jsx("a", {
                        href: "https://linkedin.com/yourprofile",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group transition-all duration-400 hover:scale-110",
                        children: _jsx(LinkedInIcon, {
                            fill: "#4ade80",
                            width: 32,
                            height: 32,
                            className: "transition-colors duration-400 group-hover:fill-green-400\n                                           shadow-md hover:shadow-green-400/30 rounded-full"
                        })
                    })]
                })]
            })
        })]
    }));
};
export default Footer;
