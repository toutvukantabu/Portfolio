import React from "react";
import ContactForm from "@/presentation/components/contact/ContactForm";
import useIntersectionObserver from "@/shared/hooks/UseIntersectionObserver";

const ContactSection: React.FC = () => {
    // Ajout des classes spécifiques pour chaque bloc
    useIntersectionObserver("slide-in-left", ".calcom-block");
    useIntersectionObserver("slide-in-right", ".form-block");

    return (
        <section className="flex items-center justify-center min-h-screen px-6 bg-zinc-900/80 backdrop-blur-sm">
            <div className="max-w-6xl w-full mx-auto">
                {/* Titre accrocheur */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-6 text-white">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Open for new opportunities and collaborations. Feel free to reach out!
                    </p>
                </div>

                {/* Section Contact */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
                    {/* Partie Cal.com */}
                    <div className="calcom-block h-[600px] p-8 border border-green-400/20 rounded-xl bg-black/30
                                    hover:border-green-400/40 transition-all duration-300 shadow-lg opacity-0">
                        <h3 className="text-3xl font-semibold text-green-400 mb-6">
                            Schedule a Video Call
                        </h3>
                        <iframe
                            src="http://localhost:3000/gwendal"
                            style={{
                                width: "100%",
                                height: "480px",
                                border: "none",
                                borderRadius: "8px",
                                overflow: "visible"
                            }}
                            allow="camera; microphone; display-capture"
                        />
                    </div>

                    {/* 'OU' au centre */}
                    <div className="flex items-center justify-center">
                        <div className="text-gray-500 text-xl font-semibold">OU</div>
                    </div>

                    {/* Partie Formulaire */}
                    <div className="form-block h-[600px] p-8 border border-green-400/20 rounded-xl bg-black/30
                                    hover:border-green-400/40 transition-all duration-300 shadow-lg opacity-0">
                        <h3 className="text-3xl font-semibold text-green-400 mb-6">
                            Send Me a Message
                        </h3>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
