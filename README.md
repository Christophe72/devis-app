# 📋 Devis App - Application de Gestion de Devis

Une application de gestion de devis moderne développée avec [Next.js](https://nextjs.org) et [Prisma](https://prisma.io), utilisant SQLite pour le stockage local.

## 🚀 Fonctionnalités

- ✅ Création et gestion de devis
- ✅ Gestion des clients et emails
- ✅ Lignes de devis avec quantités et prix
- ✅ Calcul automatique HT/TVC/TTC
- ✅ Base de données SQLite locale
- ✅ API REST avec Next.js
- ✅ Interface utilisateur moderne avec Tailwind CSS

## 🛠️ Technologies utilisées

- **Frontend** : Next.js 15, React, Tailwind CSS
- **Backend** : Next.js API Routes
- **Base de données** : SQLite avec Prisma ORM
- **TypeScript** : Pour un développement robuste

## 📦 Installation et démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le projet
git clone [URL_DE_VOTRE_REPO]
cd devis-app

# Installer les dépendances
npm install

# Configurer la base de données
npx prisma generate
npx prisma db push
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## 🗄️ Base de données

Le projet utilise **SQLite** pour le développement local avec **Prisma** comme ORM.

### Structure des données

- **Devis** : Informations client, totaux HT/TTC/TVA
- **Lignes** : Détails des prestations (description, quantité, prix)

### Commandes Prisma utiles

```bash
# Visualiser les données
npx prisma studio

# Réinitialiser la base
npx prisma db push --force-reset

# Générer le client Prisma
npx prisma generate
```

## 🚀 Déploiement GitHub

Le projet inclut des scripts de déploiement automatisés pour GitHub :

### Scripts disponibles

- **`init-github.bat`** : Initialisation du dépôt GitHub (première fois seulement)
- **`deploy.bat`** : Déploiement complet avec confirmation et messages personnalisés
- **`deploy-quick.bat`** : Déploiement rapide automatique

### Utilisation

#### Première fois (nouveau projet)

1. Créez un nouveau dépôt sur GitHub
2. Double-cliquez sur `init-github.bat`
3. Entrez l'URL de votre dépôt GitHub

#### Déploiements réguliers

- **Déploiement complet** : Double-cliquez sur `deploy.bat`
- **Déploiement rapide** : Double-cliquez sur `deploy-quick.bat`

## 🔧 API Routes

### POST `/api/devis`

Créer un nouveau devis avec ses lignes.

**Body de la requête :**

```json
{
  "client": "Nom du client",
  "email": "email@client.com",
  "totalHT": 1000.0,
  "tva": 200.0,
  "totalTTC": 1200.0,
  "lignes": [
    {
      "description": "Prestation 1",
      "quantite": 2,
      "prixHT": 500.0
    }
  ]
}
```

## 📁 Structure du projet

```
devis-app/
├── src/
│   ├── app/
│   │   ├── api/devis/route.ts    # API pour les devis
│   │   ├── devis/page.tsx        # Page de gestion des devis
│   │   ├── layout.tsx            # Layout principal
│   │   └── page.tsx              # Page d'accueil
│   └── ...
├── prisma/
│   ├── schema.prisma             # Schéma de la base de données
│   └── dev.db                    # Base SQLite (ignorée par Git)
├── deploy.bat                    # Script de déploiement complet
├── deploy-quick.bat              # Script de déploiement rapide
├── init-github.bat               # Script d'initialisation GitHub
└── ...
```

## 🛠️ Développement

### Modifier le schéma de base de données

1. Éditez `prisma/schema.prisma`
2. Exécutez `npx prisma db push`
3. Régénérez le client : `npx prisma generate`

### Ajouter une nouvelle route API

1. Créez un fichier dans `src/app/api/[nom]/route.ts`
2. Exportez les fonctions HTTP (GET, POST, PUT, DELETE)

## 📚 Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs) - Fonctionnalités et API Next.js
- [Documentation Prisma](https://prisma.io/docs) - ORM et gestion de base de données
- [Documentation Tailwind CSS](https://tailwindcss.com/docs) - Framework CSS utilitaire

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Forker le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
