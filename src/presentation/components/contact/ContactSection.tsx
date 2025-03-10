import React from "react";
import {Mail, Phone} from "lucide-react";
import ContactForm from "@/presentation/components/contact/ContactForm";
import useIntersectionObserver from "@/shared/hooks/UseIntersectionObserver";

const ContactSection: React.FC = () => {
    useIntersectionObserver("animate-in", ".animate-on-scroll");

    return (
        <section className="flex items-center justify-center min-h-screen px-6 bg-zinc-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center">
                <div className="text-center max-w-2xl mx-auto mb-15">
                    <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-gray-400">
                        Open for new opportunities and collaborations. Feel free to reach out!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Carte contact */}
                    <div className="space-y-8 animate-on-scroll opacity-0">
                        <div
                            className="p-6 border border-green-400/20 rounded-lg
                            hover:border-green-400/40 transition-all duration-300
                            backdrop-blur-sm bg-black/20"
                        >
                            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                <p className="text-gray-400">
                                    I'm always interested in hearing about new projects and
                                    opportunities. Whether you have a question or just want to
                                    say hi, I'll try my best to get back to you!
                                </p>
                                <div className="flex items-center gap-2 text-green-400">
                                    <Mail className="w-5 h-5"/>
                                    <span>contact@gwendalbescont.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-400">
                                    <Phone className="w-5 h-5"/>
                                    <span>0668598159</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div
                        className="animate-on-scroll opacity-0"
                        style={{
                            animationDelay: "200ms",
                        }}
                    >
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
