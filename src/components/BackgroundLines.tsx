import { useEffect, useState } from "react";
export const BackgroundLines = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute w-full h-full">
        {[...Array(5)].map((_, i) => <div key={i} className="absolute h-[3px] bg-green-400/10 w-[200%] left-[-50%]" style={{
        top: `${i * 30}%`,
        transform: `translateX(${scrollPosition - i * 20}px) rotate(-45deg)`,
        transformOrigin: "center"
      }} />)}
      </div>
    </div>;
};