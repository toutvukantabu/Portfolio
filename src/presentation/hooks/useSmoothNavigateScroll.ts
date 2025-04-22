import {useNavigate} from "react-router-dom";

export const useSmoothScroll = () => {
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        if (window.location.pathname !== "/") {
            navigate("/", {replace: false});

            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({behavior: "smooth"});
                }
            }, 50);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({behavior: "smooth"});
            }
        }
    };

    return {scrollToSection};
};
