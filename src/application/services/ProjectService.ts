import {Project} from "@/domain/models/Project";
import {GetProjectsUseCase} from "@/domain/usecases/GetProjectsUseCase";

export class ProjectService {
    private getProjectsUseCase = new GetProjectsUseCase();

    getAllProjects(): Project[] {
        return this.getProjectsUseCase.execute();
    }
}
