export const formatPeriod = (startDate: string, endDate?: string, locale: string = "fr"): string => {
    const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "long"};
    const formattedStart = new Date(startDate).toLocaleDateString(locale, options);
    const formattedEnd = endDate
        ? new Date(endDate).toLocaleDateString(locale, options)
        : locale === "en" ? "Present" : "Aujourd'hui";

    return `${formattedStart} – ${formattedEnd}`;
};
