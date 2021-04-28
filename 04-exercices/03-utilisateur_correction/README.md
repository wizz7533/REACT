# Exercice 2.2: Mise en pratique

*Essayez de faire l’exercice sans regarder le cours.*

1. Générer une nouvelle application nommée 06-exercices
2. Inclure Reactjs & JSX: 

        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

   
3. Dans le HTML, Créer une div avec un id 'app' ou 'root'
4. Dans index.js, Créer une classe composant App qui affichera une div vide pour le moment.
5. Créer un constante tout en haut du fichier,  copier le tableau d'utilisateurs [de ce lien: utilisateurs](https://codeshare.io/arNYnE)
6. Creer une fonction composant Utilisateur (Pour le moment on peut y mettre des données factices):
        - on affichera dans une 'card' (voir ici)[https://getbootstrap.com/docs/4.0/components/card/#example] avec username en titre, l'email en paragraphe, et le numero de telephone dans un lien à l'aide du rendu de liste (boucle) (Fausse donnée)
7. Creer une fonction composant Utilisateurs
8. Dans le composant Utilisateurs:
        - Si la liste des utilisateurs est vide on affiche 'La liste est vide'
        - Si il y a des elements dans la liste, on fera une boucle pour afficher tous les utilisateurs via le composant Utilisateur.
        - On transmettra au composant Utilisateur via les attributs HTML, le username, l'email et le telephone. 
    ```
        <Utilisateur x={u.address} />
    ```
9. Dans le composant Utilisateur modifier le composant, pour inclure les données des props à la place des données factices.
10. Inclure le composant Utilisateurs dans le rendu du composant App.
11. Vous pouvez styliser le tout avec bootstrap si vous le voulez.