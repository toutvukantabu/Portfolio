/**
 * 🔌 httpClient sécurisé
 * Gère les erreurs API centralisées.
 */
import axios from "axios";

export const httpClient = axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 5000,
});

// Wrapper pour sécuriser GET
export const safeGet = async (url: string, config = {}) => {
    try {
        const response = await httpClient.get(url, config);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'appel API GET:", error);
        return null;
    }
};
