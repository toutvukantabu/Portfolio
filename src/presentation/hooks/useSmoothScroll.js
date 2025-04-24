import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const useSmoothScroll = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // 🔥 Fonction pour scroller vers une section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const targetElement = document.getElementById(id);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth",
                    });
                }
            }, 100);
        } else {
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        }
    };
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            setTimeout(() => scrollToSection(id), 100);
        }
    }, [location]); // ✅ Se déclenche lors du changement d'URL
    return {scrollToSection};
};
