import React from "react";
import {Mail, MessageSquare, Send, User} from "lucide-react";
import {useContactForm} from "@/presentation/hooks/useContactForm";

const ContactForm: React.FC = () => {
    const {t, register, handleSubmit, errors, isLoading, onSubmit} = useContactForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto w-full">
            <div className="space-y-6">
                {/* Champ Nom */}
                <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                    <input
                        type="text"
                        placeholder={t("contactForm.namePlaceholder")}
                        {...register("name", {required: t("contactForm.nameRequired")})}
                        className="w-full bg-black/50 border border-green-400/20 rounded-lg py-3 px-11 text-gray-100"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Champ Email */}
                <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                    <input
                        type="email"
                        placeholder={t("contactForm.emailPlaceholder")}
                        {...register("email", {required: t("contactForm.emailRequired")})}
                        className="w-full bg-black/50 border border-green-400/20 rounded-lg py-3 px-11 text-gray-100"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* Champ Message */}
                <div className="relative group">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400"/>
                    <textarea
                        placeholder={t("contactForm.messagePlaceholder")}
                        {...register("message", {required: t("contactForm.messageRequired")})}
                        rows={5}
                        className="w-full bg-black/50 border border-green-400/20 rounded-lg py-3 px-11 text-gray-100"
                    />
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>

                {/* Bouton d’envoi */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-400 text-black px-8 py-3 rounded-lg hover:bg-green-500"
                >
                    {isLoading ? t("contactForm.sending") : (
                        <>
                            {t("contactForm.sendMessage")}
                            <Send className="w-5 h-5 ml-2"/>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
