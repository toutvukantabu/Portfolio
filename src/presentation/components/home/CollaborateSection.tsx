import React from "react";
import {ArrowRight} from "lucide-react";

const CollaborateSection: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-zinc-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-gray-400 mb-8">
                    Open for new opportunities and collaborations
                </p>
                <button onClick={() => window.location.href = "/contact"}
                        className="group relative bg-green-400 text-black px-8 py-3 rounded-md hover:bg-green-500 transition-all duration-300 pr-12">
                    Contact Me
                    <ArrowRight
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"/>
                    <span
                        className="absolute inset-0 w-full h-full rounded-md bg-green-300/20 transform scale-0 group-hover:scale-100 transition-transform duration-300"/>
                </button>
            </div>
        </section>

    );
}
export default CollaborateSection;