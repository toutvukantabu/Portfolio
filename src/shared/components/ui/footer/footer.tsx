import React from "react";
import {ReactComponent as TwitterIcon} from "@/assets/icons/x.svg";
import {ReactComponent as GitHubIcon} from "@/assets/icons/github.svg";
import {ReactComponent as LinkedInIcon} from "@/assets/icons/linkedin.svg";

const Footer: React.FC = () => {
    return (
        <footer className="py-4 bg-transparent border-t border-green-800 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-gray-500 dark:text-gray-400 font-medium">&copy; 2025 Gwendal Bescont</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Développeur Web Créatif</p>
                    </div>

                    <div className="flex items-center gap-10">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
                           className="group transition-all duration-400 hover:scale-110 pointer-events-auto">
                            <TwitterIcon fill="#4ade80" width={40} height={40}
                                         className="transition-colors duration-400 group-hover:fill-green-400 pointer-events-none"/>
                        </a>
                        <a href="https://github.com/toutvukantabu" target="_blank" rel="noopener noreferrer"
                           className="group transition-all duration-400 hover:scale-110 pointer-events-auto">
                            <GitHubIcon fill="#4ade80" width={40} height={40}
                                        className="transition-colors duration-400 group-hover:fill-green-400 pointer-events-none"/>
                        </a>
                        <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer"
                           className="group transition-all duration-400 hover:scale-110 pointer-events-auto">
                            <LinkedInIcon fill="#4ade80" width={40} height={40}
                                          className="transition-colors duration-400 group-hover:fill-green-400 pointer-events-none"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
