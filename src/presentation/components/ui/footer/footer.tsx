import React from "react";
import TwitterIcon from "@/assets/icons/x.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

const Footer: React.FC = () => {
    return (
        <footer className="py-6 bg-transparent">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <p className="text-gray-400">&copy; 2025 Gwendal Bescont.</p>
                <div className="flex space-x-6">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
                       className="text-green-400 hover:text-green-400/80 transition-colors">
                        <img src={TwitterIcon} alt="Twitter" className="w-6 h-6"/>
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"
                       className="text-green-400 hover:text-green-400/80 transition-colors">
                        <img src={GitHubIcon} alt="GitHub" className="w-6 h-6 text-white"/>
                    </a>
                    <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer"
                       className="w-8 h-8 text-green-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;