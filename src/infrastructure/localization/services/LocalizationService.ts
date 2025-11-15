import i18n from '@/core/i18n/i18n';
import {ILocalizationService} from '@/domain/localization/services/ILocalizationService';

export class LocalizationService implements ILocalizationService {
    getLocale(): string {
        return i18n.language;
    }

    onLocaleChange(callback: (locale: string) => void): void {
        i18n.on('languageChanged', callback);
    }
}