import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {SubmitHandler, useForm} from "react-hook-form";
import {ContactFormData} from "@/domain/contactFormData/ContactFormData";
import {SubmitContactForm} from "@/domain/usecases/SubmitContactForm";

export const useContactForm = () => {
    const {t, i18n} = useTranslation();
    const {register, handleSubmit, formState: {errors}, setError} = useForm<ContactFormData>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setIsLoading(true);
        await SubmitContactForm(data);
        setIsLoading(false);
    };

    useEffect(() => {
        Object.keys(errors).forEach((field) => {
            setError(field as keyof ContactFormData, {
                type: "manual",
                message: t(`contactForm.${field}Required`),
            });
        });
    }, [i18n.language]);

    return {
        t,
        register,
        handleSubmit,
        errors,
        isLoading,
        onSubmit,
    };
};
