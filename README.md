# 🚀 Portfolio React avec Vite

Ce projet est un portfolio développé avec **React**, **Vite**, et **TypeScript**, en suivant les principes de la **Clean Architecture**.

## 📦 Installation

### 2️⃣ Installer les dépendances
```sh
npm install
```

## 🏗️ Démarrer le projet en mode développement
```sh
npm run dev
```
Le projet sera accessible à l'adresse **http://localhost:5173/** par défaut.

## 🛠️ Build du projet
```sh
npm run build
```
Le build sera généré dans le dossier `dist/`.

## 🔍 Structure du projet
```bash
📂 src/
 ├── 📂 application/     # Couche application (services, hooks)
 │   ├── 📂 hooks/       # Hooks React
 │   ├── 📂 services/    # Services applicatifs
 |
 ├── 📂 core/            # Configuration globale (i18n...)
 │
 ├── 📂 domain/          # Modèles et entités métier
 │   ├── 📂 models/      # Interfaces TypeScript
 |
 ├── 📂 infrastructure/  # Traductions et autres infrastructures
 │   ├── 📂 translations/
 |
 ├── 📂 presentation/    # Couche présentation (components, pages)
 │   ├── 📂 components/  # Composants réutilisables
 │   ├── 📂 pages/       # Pages principales
 │
 ├── main.tsx           # Entrée principale
 ├── index.html         # Page HTML principale
```

## 🌍 Gestion des langues (i18n)
Les fichiers de traduction se trouvent dans `public/translations/`.
Ajoutez de nouvelles langues en modifiant les fichiers JSON existants.

## 🎨 Technologies utilisées
- **React** + **Vite** ⚡
- **TypeScript** 🛠️
- **Tailwind CSS** 🎨
- **i18next** (Gestion des langues) 🌍
- **Lucide-react** (Icônes) 🖼️

## ✨ Bon développement ! 🚀

