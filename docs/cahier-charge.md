# 🎯 Objectif

Développer un **mini-parcours de formation interactif** composé de **3 modules**, avec :

- une **progression contrôlée**
- une **validation par quiz**

---

## 1. 🔐 Connexion utilisateur

### But

Permettre à un étudiant de se connecter et suivre sa progression.

### Spécifications

- **Page de connexion** avec champs :

  - **Email** : format valide obligatoire
  - **Mot de passe** : minimum 5 caractères

- **Authentification** :

  - basique

- **Sauvegarde de la progression** :

  - via backend

---

## 2. 📚 Parcours de formation — 3 modules

Chaque module représente une **étape du parcours**.

### Structure commune

- **Titre du module**
- **Vidéo YouTube intégrée**
- **Statuts (UI + DB)** :

  - `En cours` (état par défaut)
  - `Done` (quand le quiz est validé)

### Vidéos à intégrer

1. 🎬 Module 1
2. 🎬 Module 2
3. 🎬 Module 3

---

## 3. 🧠 Quiz de validation (par module)

### Logique fonctionnelle

- Chaque module comporte un **quiz simple (QCM)** de **3 questions**
- Le statut `Done` apparaît **uniquement si le quiz est validé**
- Si le quiz n’est **pas validé** → afficher le message :

  > “Veuillez réessayer”

- **Validation progressive** :

  - Quiz du module 1 → débloque le module 2
  - Quiz du module 2 → débloque le module 3

### Exemple — Quizz à inventer par le LLM

Chaque module devra inclure **3 questions à choix multiples**, créées automatiquement.

---

## 4. 🔄 Logique de progression

| Module       | Accessible quand ?           | Condition de passage |
| ------------ | ---------------------------- | -------------------- |
| **Module 1** | Dès la connexion             | Quiz 1 validé        |
| **Module 2** | Après validation du Module 1 | Quiz 2 validé        |
| **Module 3** | Après validation du Module 2 | Quiz 3 validé        |

---

## 5. 🏁 Écran final de félicitations

### Déclenchement

Après la **validation du 3ᵉ quiz**.

### Contenu

> 🎉 “Bravo, tu es maintenant **Vibenengineer Certified !**”

---

## 6. ⚙️ Points techniques (optionnels)

- **Framework libre** :
  front: vite React typescript tailwind css
  Back: express typescript, prisma
- **Base de données** : PostgreSQL locale
- **Pas d’API externe**
- **Responsive design** (mobile-friendly)
- **Sauvegarde de progression** : DB
- **Design** : minimaliste, fluide, futur vibes

---

## 7. 💡 Bonus ideas (pour aller plus loin)

- Barre de **progression globale**
- **Certificat téléchargeable** à la fin
- **Feedback utilisateur** : “Ce module t’a-t-il aidé ?”
