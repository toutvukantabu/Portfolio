import { createContext, useContext } from "react";
export const LanguageFadeContext = createContext({ isFading: false });
export const useLanguageFade = () => useContext(LanguageFadeContext);
