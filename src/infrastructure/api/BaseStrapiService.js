import axios from "axios";
export class BaseStrapiService {
    constructor(endpoint) {
        Object.defineProperty(this, "endpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.endpoint = endpoint;
    }
    /**
     * Récupère un seul élément (le premier de la liste)
     */
    async getOne(locale) {
        try {
            const response = await axios.get(`http://localhost:1337/api/${this.endpoint}?locale=${locale}`);
            const raw = response.data?.data?.[0];
            const item = raw?.attributes ?? raw;
            return item ?? null;
        }
        catch (error) {
            console.error(`Erreur lors du fetch de ${this.endpoint}`, error);
            return null;
        }
    }
    /**
     * Récupère tous les éléments de la collection
     */
    async getAll(locale) {
        try {
            const response = await axios.get(`http://localhost:1337/api/${this.endpoint}?locale=${locale}`);
            const items = response.data?.data?.map((entry) => {
                return entry.attributes ?? entry;
            });
            return items ?? [];
        }
        catch (error) {
            console.error(`Erreur lors du fetch de ${this.endpoint}`, error);
            return [];
        }
    }
}
