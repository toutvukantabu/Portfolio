export interface ExperienceModel {
    id: number;
    role: string;
    company: string;
    description: string;
    tech?: string[];
    startDate: string;
    endDate?: string;
}
