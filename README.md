# <p align="center">	:house_with_garden: Kasa - Projet 7 Formation OC </p>

<p align="center"> ➡️ Projet 7 - Créez une application web de location immobilière avec React </p>

<img src="https://user-images.githubusercontent.com/95346160/218710361-649b57aa-0dbd-42aa-aebe-02e6ddd72fd6.png" alt="image_kasa" />

## ✔️ Contexte:
-Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.</br>
-Refonte totale pour passer à une stack complète JavaScript avec Node et React.</br>
-Commande de nouvelles maquettes fourni ici : (<a href="https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0&t=qVeWTu5vDD1Tp2z3-0">Maquette Figma</a>).</br>
-L'objectif est donc de démarer le projet React et développer l'ensemble de l'application.</br>

## 🛠️ Contraintes techniques:

### React :
Il est impératif d’utiliser ces éléments de React pour un code de qualité :</br>
-Découpage en composants modulaires et réutilisables ;</br>
-Un composant par fichier ;</br>
-Structure logique des différents fichiers ;</br>
-Utilisation des props entre les composants ;</br>
-Utilisation du state dans les composants quand c'est nécessaire ;</br>
-Gestion des événements ;</br>
-Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
autant que possible.</br>
Il est également recommandé, mais pas imposé, d’utiliser des composants
fonctionnels plutôt que des composants classes.</br>

### React Router :
-Les paramètres des routes sont gérés par React Router dans l'URL
pour récupérer les informations de chaque logement.</br>
-Il existe une page par route.</br>
-La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées.</br>
-La logique du routeur est réunie dans un seul fichier.</br>
### Général :
-Le code ne doit pas produire d'erreur ou de warning dans la console.</br>

## ⚙️ Contraintes fonctionnelles:

Pour le défilement des photos dans la galerie (composant Gallery) :</br>
-Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. </br>
-Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. </br>
-S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.</br>
-La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.</br>
-Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. </br>
-Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.</br>
-Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.</br>















# :wrench: Installation:

## Available Scripts

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
