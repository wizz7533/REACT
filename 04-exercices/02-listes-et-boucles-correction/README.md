# Exercice 2.1: Mise en pratique

*Essayez de faire l’exercice sans regarder le cours.*

1. Générer une nouvelle application nommée 06-exercices
2. Inclure Reactjs & JSX: 

        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

   
3. Dans le HTML, Créer une div avec un id 'app' ou 'root'
4. Dans index.js, Créer une classe composant App qui affichera une div vide pour le moment.
8. Créer un constante tout en haut du fichier, avec les aliments de votre choix (riz, veste etc...) (Tableau de string)
5. Creer une fonction composant Aliments
6. Dans le composant Aliments:
        - Si la liste des aliments est vide on affiche 'La liste est vide'
        - Si il y a des elements dans la liste on affichera une liste (ul) avec les aliments dedans.
7. Inclure le composant Aliments dans le rendu du composant App
8. Vous pouvez styliser le tout avec bootstrap si vous le voulez.

---

# Part 2

   
9. Créer un constante tout en haut du fichier, un tableau qui contient les produits de votre choix. Un produit est un objet avec un titre, une description et un prix.

```
 {title: '', description '', price: 0}
```

10. Creer une classe composant Produits
11. Dans le composant Produits, dans la fonction render:
        - Si la liste des produits est vide on affiche 'La liste est vide'
        - Si il y a des elements dans la liste on affichera un tableau HTML (table) qui affichera tous les produits à l'aide du rendu de liste (boucle)

12. Inclure le composant Produits dans le rendu du composant App

13. A ce stade on se rend compte, que le composant Produits est trop complexe. On peut donc creer un composant nouveau Produit (au singulier) qui sera en charge d'afficher un produit. 

14. Vous pouvez styliser le tout avec bootstrap si vous le voulez.


---

# Part 3


15. A ce stade on se rend compte, que le composant Produits est trop complexe. On peut donc creer un composant nouveau Produit (singulier) qui sera en charge d'afficher un produit. 

16. Creer une fonction composant Produit

17. Ce composant affichera une rangée du tableau. (tr)
18. Dans les td, on mettra des données factices pour le moment
19. On transmettra au composant Produit via les attributs HTML, le  titre, la description et le prix. 
    ```
        <Produit x={p.img} />
    ```
20. Dans le composant Produit, pour inclure les données des props à la place des données factices.
22. On utilisera le composant Produit dans Produits à la place des &lt;tr&gt;
23. Vous pouvez styliser le tout avec bootstrap si vous le voulez.