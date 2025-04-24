import {useEffect} from "react";

const useIntersectionObserver = (animationClass, targetClass, dependencies = []) => {
    useEffect(() => {
        const targets = document.querySelectorAll(targetClass);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        });
        targets.forEach(target => observer.observe(target));
        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, [animationClass, targetClass, ...dependencies]);
};
export default useIntersectionObserver;
