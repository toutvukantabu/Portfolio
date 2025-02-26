import {useEffect, useRef} from "react";

const useIntersectionObserver = (className: string, threshold = 0.1) => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                    }
                });
            },
            { threshold }
        );

        document.querySelectorAll(".animate-on-scroll").forEach((element) => {
            observerRef.current?.observe(element);
        });

        return () => observerRef.current?.disconnect();
    }, [className, threshold]);
};

export default useIntersectionObserver;