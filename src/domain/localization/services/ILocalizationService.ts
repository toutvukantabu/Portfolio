export interface ILocalizationService {
    /** Retourne la locale courante ("fr" ou "en") */
    getLocale(): string;

    /** Permet de s'abonner aux changements de langue */
    onLocaleChange(callback: (locale: string) => void): void;
}