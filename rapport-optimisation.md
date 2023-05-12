# Rapport d'optimisation du projet ScrollyTelling
![Page Speed Insights - Rapport du 12 mai 2023, 02:35:49](https://pagespeed.web.dev/analysis/https-vince1887-github-io-desjardins-vincent-scrollytelling/c1lvz3myhs?form_factor=mobile)

## Problème #1
### Évitez d'énormes charges utiles de réseau
Puisque les fichiers sont volumineux, cela prend plus de temps à charger ainsi que demande plus de data au client qui veut accédera mon site. Donc si le client n'a pas une bonne connection cela lui prendra beaucoup de temps a charger la page et si il est sur du data cellulaire par example, cela lui sera plus couteûx. 
### réduire la taille des fichier
Premièrement, la méthode du PRPL(Preload, Render, Pre-cache, Lazy Load), donc créer une hiérarchie des ressources pour que les premières images et ceux qui sont le plus importantes soient chargé vite, et ensuite utiliser le lazy load sur le reste des éléments de la page.

## Problème #2
### Assurez-vous que le texte reste visible pendant le chargement des polices Web
Les polices de caractères peuvent être des fichiers volumineux et long à charger, donc peuvent créer du texte invisible jusqu'a ce que leur chargement soient complet.
### Ajouter un "font-display: swap;"
Dans mon fichier styles.css, je dois ajouter "font-display: swap;" quand j'importe mes typography avec @font-face. Cette méthode est la plus simple, car le navigateur va seulement remplacer la typography personaliser par une typographie présente sur le systeme du client.


## Problème #3
