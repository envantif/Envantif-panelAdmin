Alcinor commentaires 
 VAMAYO - Admin Frontend (Vite + React + TypeScript)

Ce dépôt contient la partie administrateur de l'application marketplace VAMAYO.  
Stack utilisée : Vite + React + TypeScript + TailwindCSS + FramerMotion + Zustand et Framer Motion.  
UI : *Shadcn-ui* (prévu) — Icônes : Lucide-React.

Contenu
- `src/` : code source
  - `features/admin/` : pages (Dashboard, Users, Products, Orders, Payments, Stats, Notifications)
  - `components/` : Layout, NavBar, Sidebar
  - `store/` : Zustand store
  - `mocks/` : mock data simulating API
  - `types.ts` : types TypeScript
- `index.html`, `tailwind.config.cjs`, `vite.config.ts`, ...

Fonctionnalités incluses (mock)
1. Tableau de bord : total utilisateurs, commandes, chiffre d'affaires, graphique de démonstration.
2. Gestion utilisateurs : liste, recherche, activation/suspension (mock) a implementer par Alcinor  
3. Gestion produits/services : liste, recherche, activation/désactivation (mock) je crois.
4. Gestion commandes : liste basique a implementer par Alcinor .
5. Gestion paiements : transactions mock a implementer par Alcinor .
6. Statistiques : espace et exemples pour graphiques interactifs a implementer par Alcinor .
7. Notifications : maquette de notifications a implementer par Alcinor.

Installation (local)
1. Cloner le projet :
```bash
git clone <this-repo>
cd vamayo-admin
```
2. Installer les dépendances :
```bash
npm install
# ou
yarn
```
3. Lancer en développement :
```bash
npm run dev
```

Notes techniques et recommandations
- Les appels API sont simulés via `src/mocks/mockData.ts`. Remplacez par vos appels réels lorsque le backend est disponible.
- Gestion d'état centralisée via Zustand (`src/store/useAdminStore.ts`).
- Composants UI : j'ai utilisé des composants simples avec Tailwind ; 
- Graphiques : j'ai inclus `recharts` comme bibliothèque de démonstration. Vous pouvez remplacer par d3 ou autre si nécessaire.
- Sécurité : actions critiques (ex: suspension) doivent avoir une confirmation. Ajoutez un `Modal` pour confirmer 



