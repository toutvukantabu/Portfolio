import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {SubmitContactForm} from "@/domain/usecases/SubmitContactForm";

export const useContactForm = () => {
    const {t, i18n} = useTranslation();
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (data) => {
        setIsLoading(true);
        await SubmitContactForm(data);
        setIsLoading(false);
    };
    useEffect(() => {
        Object.keys(errors).forEach((field) => {
            setError(field, {
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
