import { useEffect, useState } from "react";
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-green-400 font-bold text-xl tracking-wider">
              Gwendal Bescont
            </span>
            <span className="text-gray-400 text-sm">Backend Developer</span>
          </div>
          <div className="flex gap-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-green-400 transition-all duration-300 relative group py-2">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
                </a>)}
          </div>
        </div>
      </div>
    </nav>;
};