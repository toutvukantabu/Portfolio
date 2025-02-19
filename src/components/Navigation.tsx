import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden"; // Empêche le scroll sur la page
  };

  const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col">
            <span className="text-green-400 font-bold text-xl tracking-wider">
              Gwendal Bescont
            </span>
              <span className="text-gray-400 text-sm">Backend Developer</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                  <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 relative group py-2"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
                  </a>
              ))}
            </div>

            {/* Bouton Menu Burger (Mobile) */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-green-400 hover:text-green-300 transition-colors"
                aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
            className={`fixed inset-0 bg-black/90 backdrop-blur-lg transition-transform duration-300 transform md:hidden
        ${isMenuOpen ? "translate-x-0 opacity-100 z-50" : "translate-x-full opacity-0 z-[-1]"}`}
        >
          {/* Bouton Fermer (Croix) */}
          <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-gray-300 hover:text-green-400 transition-colors"
              aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Contenu du menu mobile avec scrolling */}
          <div className="flex flex-col items-center justify-center h-full gap-8 overflow-y-auto">
            {menuItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="text-2xl text-gray-300 hover:text-green-400 transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
                </a>
            ))}
          </div>
        </div>
      </nav>
  );
};
