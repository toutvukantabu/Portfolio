import {useEffect, useState} from "react";

export const useNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        document.body.classList.toggle("overflow-hidden", !isMenuOpen);
    };

    return {scrolled, isMenuOpen, toggleMenu};
};
