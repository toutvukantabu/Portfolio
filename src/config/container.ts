import 'reflect-metadata';
import {container} from 'tsyringe';

// Domain Interfaces & Implementations
import {IHeroRepository} from '@/domain/hero/repositories/IHeroRepository';
import {StrapiHeroRepository} from '@/infrastructure/repositories/hero/StrapiHeroRepository';
import {ILocalizationService} from "@/domain/localization/services/ILocalizationService";
import {ExperienceRepository} from "@/domain/experience/repositories/ExperienceReository";
import {StrapiExperienceRepository} from "@/infrastructure/repositories/experience/StrapiExperienceRepository";

// Use Cases
import {FetchHeroUseCase} from '@/application/use-cases/FetchHeroUseCase';
import {GetExperiencesUseCase} from "@/application/experience/getExperienceUsecase";

//services
import {LocalizationService} from "@/infrastructure/localization/services/LocalizationService";

// --- Localization binding ---
container.registerSingleton<ILocalizationService>(
    'ILocalizationService',
    LocalizationService
);


// --- Hero bindings ---
container.registerSingleton<IHeroRepository>(
    'IHeroRepository',
    StrapiHeroRepository
);
container.registerSingleton(
    FetchHeroUseCase,
    FetchHeroUseCase
);

// --- Experience bindings ---
container.registerSingleton<ExperienceRepository>(
    'ExperienceRepository',
    StrapiExperienceRepository
);
container.registerSingleton(
    GetExperiencesUseCase,
    GetExperiencesUseCase
);

// // --- Skills bindings ---
// container.registerSingleton<ISkillRepository>(
//   'ISkillRepository',
//   StrapiSkillRepository
// );
// container.registerSingleton(
//   FetchSkillsUseCase,
//   FetchSkillsUseCase
// );

export {container};