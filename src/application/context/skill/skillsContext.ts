import {createContext} from "react";
import {GetSkillsUseCase} from "@/application/usecases/skill/getSkillUsecase";

/**
 * ⚡ SkillsContext
 *
 * ▶️ Rôle :
 * Crée un contexte React pour injecter le GetSkillsUseCase.
 *
 * ▶️ Fonctionnement :
 * Permet aux composants enfants d'accéder au use case sans passer par des props.
 */


export const SkillsContext = createContext<GetSkillsUseCase | null>(null);
