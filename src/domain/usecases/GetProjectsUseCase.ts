import {Project} from "@/domain/models/Project";

export class GetProjectsUseCase {
    execute(): Project[] {
        return [
            { id: "1", name: "Projet Alpha", description: "Description du projet Alpha", startDate: "2023-01-01" },
            { id: "2", name: "Projet Beta", description: "Description du projet Beta", startDate: "2023-06-01" },
        ];
    }
}
