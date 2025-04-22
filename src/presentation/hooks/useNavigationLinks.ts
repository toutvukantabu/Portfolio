import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export const useNavigationLinks = () => {
    const {t, i18n} = useTranslation();
    const [links, setLinks] = useState<{ id: string; label: string }[]>([]);
    const [pages, setPages] = useState<{ path: string; label: string }[]>([]);

    useEffect(() => {
        setLinks([
            {id: "about", label: t("navigation.about") || "À propos"},
            {id: "skills", label: t("navigation.skills") || "Compétences"},
            {id: "experience", label: t("navigation.experience") || "Expérience"},
        ]);

        setPages([
            {path: "projects", label: t("navigation.projects") || "Projets"},
            {path: "contact", label: t("navigation.contact") || "Contact"},
        ]);
    }, [i18n.language]);

    return {links, pages};
};
