import React from "react";
import {ReactComponent as TwitterIcon} from "@/assets/icons/x.svg";
import {ReactComponent as GitHubIcon} from "@/assets/icons/github.svg";
import {ReactComponent as LinkedInIcon} from "@/assets/icons/linkedin.svg";

const Footer: React.FC = () => {
    return (
        <footer
            className="relative py-8 bg-transparent border-t backdrop-blur-lg border-green-800/20 dark:border-gray-800">
            {/* ✅ Trait flou */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400/30
                            backdrop-blur-md shadow-lg"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* ✅ Section Texte */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                            &copy; 2025 Gwendal Bescont
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                            Développeur Web Créatif
                        </p>
                    </div>

                    {/* ✅ Section Icônes */}
                    <div className="flex items-center gap-8">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
                           className="group transition-all duration-400 hover:scale-110">
                            <TwitterIcon
                                fill="#4ade80"
                                width={32} height={32}
                                className="transition-colors duration-400 group-hover:fill-green-400
                                           shadow-md hover:shadow-green-400/30 rounded-full"
                            />
                        </a>
                        <a href="https://github.com/toutvukantabu" target="_blank" rel="noopener noreferrer"
                           className="group transition-all duration-400 hover:scale-110">
                            <GitHubIcon
                                fill="#4ade80"
                                width={32} height={32}
                                className="transition-colors duration-400 group-hover:fill-green-400
                                           shadow-md hover:shadow-green-400/30 rounded-full"
                            />
                        </a>
                        <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer"
                           className="group transition-all duration-400 hover:scale-110">
                            <LinkedInIcon
                                fill="#4ade80"
                                width={32} height={32}
                                className="transition-colors duration-400 group-hover:fill-green-400
                                           shadow-md hover:shadow-green-400/30 rounded-full"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
