import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const useSmoothScroll = () => {
    const location = useLocation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        window.scrollTo({
            top: element.offsetTop - 80, // Décalage pour la Navbar
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            setTimeout(() => scrollToSection(id), 100);
        }
    }, [location]);

    return {scrollToSection};
};
