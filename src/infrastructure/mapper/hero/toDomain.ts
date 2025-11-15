import {Hero} from "@/domain/hero/entities/Hero";
import {HeroDTO} from "@/application/dto/HeroDTO";

export const toDomain = (dto: HeroDTO): Hero =>
    new Hero(
        dto.id,
        dto.attributes.title,
        dto.attributes.name,
        dto.attributes.lastname,
        dto.attributes.description,
        dto.attributes.callToAction
    );