# Dossier 2026-PE — Quatre enquêtes

Site d'un travail de présentation sur les perturbateurs endocriniens et les
difficultés d'apprentissage. Quatre enquêtes, des suspects, des indices tirés
d'études scientifiques réelles.

Adresse prévue : **https://projetdefou.est1.dev**

---

## 1. Avant de publier : remplir vos noms

Ouvrez `assets/js/data.js`. Tout en haut, dans le bloc `meta`, remplacez les
quatre valeurs entre les deux lignes de flèches :

```js
auteurs: ['NOM PRÉNOM 1', 'NOM PRÉNOM 2', 'NOM PRÉNOM 3'],
classe: 'CLASSE',
etablissement: 'ÉTABLISSEMENT',
remise: 'à rendre le 10 décembre 2026 au plus tard'
```

Sur le site, ces champs apparaissent surlignés en jaune tant qu'ils ne sont pas
remplis : impossible de les oublier. S'il y a deux auteurs au lieu de trois,
supprimez simplement la troisième ligne de la liste.

## 2. Mettre le site en ligne sur GitHub Pages

1. Créez un dépôt sur GitHub (public).
2. Déposez-y **le contenu de ce dossier** — `index.html` doit se trouver à la
   racine du dépôt, pas dans un sous-dossier.
3. Dans le dépôt : **Settings → Pages**.
4. *Source* : « Deploy from a branch ». *Branch* : `main`, dossier `/ (root)`.
   Enregistrez.
5. Toujours dans **Settings → Pages**, champ *Custom domain* : saisissez
   `projetdefou.est1.dev` puis enregistrez. Cochez *Enforce HTTPS* une fois le
   certificat délivré (cela peut prendre quelques minutes).

Le fichier `CNAME` présent à la racine contient déjà le nom de domaine : GitHub
le lit automatiquement.

## 3. Configurer le domaine chez votre fournisseur

Chez le fournisseur du domaine `est1.dev`, créez un enregistrement **CNAME** :

| Type  | Nom           | Valeur                      |
|-------|---------------|-----------------------------|
| CNAME | `projetdefou` | `VOTRE-PSEUDO.github.io.`   |

Remplacez `VOTRE-PSEUDO` par votre nom d'utilisateur GitHub. La propagation
prend de quelques minutes à quelques heures.

## 4. Tester avant d'envoyer

Double-cliquez simplement sur `index.html` : le site fonctionne aussi en local,
sans serveur. Seules les polices de caractères ont besoin d'une connexion
internet ; sans connexion, le site reste lisible avec des polices de
remplacement.

## Contenu du dossier

```
index.html              la page unique du site
CNAME                   le nom de domaine, lu par GitHub Pages
.nojekyll               désactive le traitement Jekyll de GitHub
assets/css/style.css    toute la mise en forme
assets/js/data.js       le contenu des quatre enquêtes (à modifier librement)
assets/js/figures.js    les illustrations, dessinées en SVG
assets/js/app.js        l'ouverture du dossier et la navigation
```

Pour corriger un texte, modifiez `assets/js/data.js` : tout le contenu
rédactionnel s'y trouve, séparé de la mise en forme.

## Note

Les quatre sujets des enquêtes sont **fictifs**. Les suspects, les mécanismes et
les chiffres proviennent d'études scientifiques réelles, citées dans la page
« Bilan » du site.
