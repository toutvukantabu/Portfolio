# 🧱 Clean Architecture dans un Projet React.js

Cette documentation te guide étape par étape dans la mise en place d'une architecture propre, scalable et testable, en
combinant :

- 🧠 Domain Driven Design (DDD)
- 🧼 Clean Architecture
- 🧩 Hexagonal Architecture (Ports & Adapters)
- 🔁 Injection de Dépendances (IoC avec `tsyringe`)
- ⚛️ Intégration avec React.js

---

## 📐 1. Qu’est-ce que la Clean Architecture ?

Clean Architecture est un style d’architecture logiciel qui sépare clairement :

- **la logique métier (core)**
- **les cas d’usage (application)**
- **les infrastructures (API, DB, HTTP)**
- **l’interface utilisateur (React UI)**

🧠 **But :** construire un système maintenable, modulaire, testable et indépendant du framework (React, Node, Strapi,
etc.).

---

## 🧭 2. Les 4 couches fondamentales

### 1. **Domain**

- Contient le cœur du métier (entités, règles, interfaces).
- Ne dépend **de rien**.
- Ex : `Experience.ts`, `ExperienceRepository.ts`.

### 2. **Application**

- Cas d’usage concrets orchestrant les entités.
- Dépend uniquement de `domain/`.
- Ex : `getExperiencesUseCase.ts`.

### 3. **Infrastructure**

- Implémentation technique (API, DB, HTTP, mappers).
- Adapte le monde extérieur au domaine.
- Ex : `StrapiExperienceRepository.ts`.

### 4. **Presentation**

- Interface utilisateur avec React.
- Appelle des hooks → usecases → repositories.
- Ex : `ExperienceSection.tsx`, `useExperiences.ts`.

---

## 💡 3. Domain Driven Design (DDD) simplifié

- Découpe l'application par **module métier** (e.g. `experience`, `skill`, `project`).
- Chaque module a ses propres :
    - entités
    - interfaces de repository
    - usecases
    - implémentations concrètes

🧩 Objectif : **modulariser le métier**, pas juste le code technique.

---

## 🧪 4. Testabilité par couche

| Couche            | Type de test  | Exemple                         |
|-------------------|---------------|---------------------------------|
| `domain/`         | Unitaire pur  | Test d'entité ou service métier |
| `application/`    | Usecase isolé | Mock du repository              |
| `infrastructure/` | Intégration   | Appels HTTP réels ou mockés     |
| `presentation/`   | Fonctionnel   | React Testing Library           |

---

## 🧰 5. Injection de Dépendance (IoC)

### Pourquoi ?

Pour que l’application ne **dépende jamais d’une classe concrète**, mais d’une **abstraction (interface)**.

### Comment ?

Utiliser un **container IoC** comme [`tsyringe`](https://github.com/microsoft/tsyringe).

### Exemple :

// ioc/container.ts
container.register<ExperienceRepository>('ExperienceRepository', {
useClass: StrapiExperienceRepository
});
Et dans un hook ou un usecase :

ts
Toujours afficher les détails

Copier
const repo = container.resolve<ExperienceRepository>('ExperienceRepository');
⚛️ 6. Utilisation de React avec Clean Architecture
Ce que la UI peut faire :
Afficher les données

Utiliser des hooks React

Appeler un usecase via un hook

Ce que la UI ne doit jamais faire :
Appeler une API directement

Créer un repository (new StrapiX)

Mapper les données

Gérer de la logique métier

🌐 7. Structure recommandée d’un projet
bash
Toujours afficher les détails

Copier
src/
├── domain/ # Modèles et interfaces métier
│ └── experience/
│ ├── Experience.ts
│ └── ExperienceRepository.ts
├── application/ # Usecases
│ └── experience/
│ └── GetExperiencesUseCase.ts
├── infrastructure/ # Implémentations concrètes
│ └── repositories/
│ └── experience/
│ ├── StrapiExperienceRepository.ts
│ └── mapStrapiExperienceToModel.ts
├── ioc/ # Container d’injection
│ └── container.ts
├── presentation/ # React UI
│ ├── hooks/
│ │ └── experience/useExperiences.ts
│ └── components/
│ └── ExperienceSection.tsx
├── shared/ # UI générique, hooks utilitaires
└── main.tsx
🔁 8. Quand utiliser React Context
Utilise React Context uniquement dans la couche presentation/ pour :

Éviter des appels en double

Partager un état entre plusieurs composants

Gérer du state UI (auth, thème, langue)

Mais pas pour injecter des services métier. Pour ça, préfère le container IoC.

🚀 9. Exemple de flux complet getExperiences
plaintext
Toujours afficher les détails

Copier
[React Component]
↓
[useExperiences Hook]
↓
[getExperiencesUseCase.ts]
↓
[ExperienceRepository Interface]
↓
[StrapiExperienceRepository.ts]
↓
[Strapi API]
🧾 10. Règles d'or
domain/ ne connaît aucune autre couche.

application/ ne contient aucune logique technique.

infrastructure/ implémente ce que le domain/ décrit.

presentation/ n'accède qu'à des usecases injectés.

Le container IoC est le seul point de configuration des dépendances.

Jamais de new X() dans les hooks ou composants.

🧩 11. Bonus : Fichiers utiles
ioc/container.ts : tous les bindings ici.

domain/<mod>/ : modélisation métier pur.

application/<mod>/ : les usecases.

infrastructure/repositories/<mod>/ : l’implémentation.

presentation/hooks/<mod>/ : appelle le usecase.

presentation/components/ : UI.

✅ 12. Résultat attendu
Avec cette architecture, tu obtiens :

Un projet maintenable

Des modules métiers testables indépendamment

Une UI ultra-légère

Une base modulaire et scalable

Une séparation claire entre ce qui est React et ce qui ne l’est surtout pas
"""