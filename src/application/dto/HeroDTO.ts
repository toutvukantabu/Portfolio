export interface HeroDTO {
    id: number;
    attributes: {
        title: string;
        name: string;
        lastname: string;
        description: string;
        callToAction: string;
    };
}