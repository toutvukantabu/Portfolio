import {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import {Menu, X} from "lucide-react";

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
    };

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        // <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${scrolled ? "bg-white-300/20 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
        >

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-green-400 font-bold text-xl tracking-wider">
                        Gwendal Bescont
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex gap-8">
                        {/* Ancres */}
                        {["about", "skills", "experience"].map((id) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleAnchorClick(e, id)}
                                className="relative text-gray-300 hover:text-green-400 transition-all duration-300 group"
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"/>
                            </a>
                        ))}

                        {/* Pages */}
                        {["projects", "contact"].map((path) => (
                            <NavLink
                                key={path}
                                to={`/${path}`}
                                className={({isActive}) =>
                                    `relative text-gray-300 hover:text-green-400 transition-all duration-300 group ${
                                        isActive ? "text-green-400" : ""
                                    }`
                                }
                            >
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"/>
                            </NavLink>
                        ))}
                    </div>

                    {/* Menu Burger (Mobile) */}
                    <button onClick={toggleMenu}
                            className="md:hidden text-green-400 hover:text-green-300 transition-colors"
                            aria-label="Toggle menu">
                        <Menu className="w-6 h-6"/>
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            <div
                className={`fixed inset-0 bg-black/90 backdrop-blur-lg transition-transform duration-300 transform md:hidden
        ${isMenuOpen ? "translate-x-0 opacity-100 z-50" : "translate-x-full opacity-0 z-[-1]"}`}
            >
                {/* Bouton Fermer (Croix) */}
                <button onClick={toggleMenu}
                        className="absolute top-6 right-6 text-gray-300 hover:text-green-400 transition-colors"
                        aria-label="Close menu">
                    <X className="w-8 h-8"/>
                </button>

                {/* Liens du menu mobile avec scroll activé */}
                <div
                    className="flex flex-col items-center justify-center gap-8 px-6 pt-20 pb-10 max-h-screen overflow-y-auto">
                    {/* Ancres */}
                    {["about", "skills", "experience"].map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleAnchorClick(e, id)}
                            className="relative text-2xl text-gray-300 hover:text-green-400 transition-all duration-300 group"
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"/>
                        </a>
                    ))}

                    {/* Pages */}
                    {["projects", "contact"].map((path) => (
                        <NavLink
                            key={path}
                            to={`/${path}`}
                            onClick={toggleMenu}
                            className={({isActive}) =>
                                `relative text-2xl text-gray-300 hover:text-green-400 transition-all duration-300 group ${
                                    isActive ? "text-green-400" : ""
                                }`
                            }
                        >
                            {path.charAt(0).toUpperCase() + path.slice(1)}
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"/>
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};
