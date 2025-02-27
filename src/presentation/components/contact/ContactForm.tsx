import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {SubmitHandler, useForm} from "react-hook-form";
import {Mail, MessageSquare, Send, User} from "lucide-react";
import {ContactFormData} from "@/domain/models/ContactFormData";
import {submitContactForm} from "@/application/useCases/submitContactForm";

const ContactForm: React.FC = () => {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormData>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setIsLoading(true);
        await submitContactForm(data);
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto w-full">
            <div className="space-y-6">
                <div className="relative group">
                    <User
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-400 transition-colors"/>
                    <input
                        type="text"
                        placeholder={t("contactForm.namePlaceholder")}
                        {...register("name", {required: t("contactForm.nameRequired")})}
                        className="w-full bg-black/50 border border-green-400/20 rounded-lg py-3 px-11
                     text-gray-100 placeholder:text-gray-500
                     focus:outline-none focus:border-green-400/40 focus:ring-1 focus:ring-green-400/40
                     transition-all duration-300"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="relative group">
                    <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-400 transition-colors"/>
                    <input
                        type="email"
                        placeholder={t("contactForm.emailPlaceholder")}
                        {...register("email", {required: t("contactForm.emailRequired")})}
                        className="w-full bg-black/50 border border-green-400/20 rounded-lg py-3 px-11
                     text-gray-100 placeholder:text-gray-500
                     focus:outline-none focus:border-green-400/40 focus:ring-1 focus:ring-green-400/40
                     transition-all duration-300"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="relative group">
                    <MessageSquare
                        className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-green-400 transition-colors"/>
                    <textarea
                        placeholder={t("contactForm.messagePlaceholder")}
                        {...register("message", {required: t("contactForm.messageRequired")})}
                        rows={5}
                        className="w-full bg-black/50 border border-green-400/20 rounded-lg py-3 px-11
                     text-gray-100 placeholder:text-gray-500
                     focus:outline-none focus:border-green-400/40 focus:ring-1 focus:ring-green-400/40
                     transition-all duration-300 resize-none"
                    />
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full group relative bg-green-400 text-black px-8 py-3 rounded-lg
                   hover:bg-green-500 transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed"
                >
          <span className="flex items-center justify-center gap-2">
            {isLoading ? (
                <>{t("contactForm.sending")}</>
            ) : (
                <>
                    {t("contactForm.sendMessage")}
                    <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"/>
                </>
            )}
          </span>
                    <span
                        className="absolute inset-0 w-full h-full rounded-lg bg-green-300/20
                         transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    />
                </button>
            </div>
        </form>
    );
};

export default ContactForm;