import {ReactNode} from "react";
import {SkillsContext} from "@/application/context/skill/skillsContext";
import {GetSkillsUseCase} from "@/application/usecases/skill/getSkillUsecase";


/**
 * 🛠️ SkillsProvider
 *
 * ▶️ Rôle :
 * Fournit le SkillsContext à toute l'application.
 *
 * ▶️ Fonctionnement :
 * Utilise le Provider React pour propager le use case à tous les composants enfants.
 */


interface SkillsProviderProps {
    useCase: GetSkillsUseCase;
    children: ReactNode;
}

export const SkillsProvider = ({useCase, children}: SkillsProviderProps) => {


    return (
        <SkillsContext.Provider value={useCase}>
            {children}
        </SkillsContext.Provider>
    );
};

