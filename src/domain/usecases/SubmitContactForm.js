export const SubmitContactForm = async (data) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Formulaire envoyé avec succès :", data);
    }
    catch (error) {
        console.error("Erreur lors de l’envoi du formulaire :", error);
        throw error;
    }
};
