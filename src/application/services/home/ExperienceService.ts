import {ExperienceModel} from "@/domain/models/ExperienceModel";

export class ExperienceService {
    getExperiences(): ExperienceModel[] {
        return [
            { role: "Independent Developer", company: "Self-Employed", period: "July 2024 – Present", desc: "Développement d'une application de gestion de flotte de véhicules.", tech: "Symfony, API Platform, Next.js, React, Docker, Kubernetes" },
            { role: "Backend Developer", company: "Wimova", period: "March 2024 – June 2024", desc: "Développement d'une interface B2B pour la gestion de taxi.", tech: "Symfony 6.4, API Platform 3, PostgreSQL, Agile" },
        ];
    }
}