import axios from "axios";

export class BaseStrapiService<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    /**
     * Récupère un seul élément (le premier de la liste)
     */
    async getOne(locale: string): Promise<T | null> {
        try {
            const response = await axios.get(
                `http://localhost:1337/api/${this.endpoint}?locale=${locale}`
            );

            const raw = response.data?.data?.[0];
            const item = raw?.attributes ?? raw;

            return item ?? null;
        } catch (error) {
            console.error(`Erreur lors du fetch de ${this.endpoint}`, error);
            return null;
        }
    }

    /**
     * Récupère tous les éléments de la collection
     */
    async getAll(locale: string): Promise<T[]> {
        try {
            const response = await axios.get(
                `http://localhost:1337/api/${this.endpoint}?locale=${locale}`
            );

            const items = response.data?.data?.map((entry: any) => {
                return entry.attributes ?? entry;
            });

            return items ?? [];
        } catch (error) {
            console.error(`Erreur lors du fetch de ${this.endpoint}`, error);
            return [];
        }
    }
}
