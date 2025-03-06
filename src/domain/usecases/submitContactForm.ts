import {ContactFormData} from "@/domain/models/ContactFormData.ts";

// @ts-ignore
export const submitContactForm = async (data: ContactFormData): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
};