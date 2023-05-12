# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2023, 02:35:49](https://pagespeed.web.dev/analysis/https-vince1887-github-io-desjardins-vincent-scrollytelling/c1lvz3myhs?form_factor=mobile)

## Problème #1
### Évitez d'énormes charges utiles de réseau
Puisque les fichiers sont volumineux, cela prend plus de temps à charger ainsi que demande plus de data au client qui veut accédera mon site. Donc si le client n'a pas une bonne connection cela lui prendra beaucoup de temps a charger la page et si il est sur du data cellulaire par example, cela lui sera plus couteûx. 
### réduire la taille des fichier
Premièrement, la méthode du PRPL(Preload, Render, Pre-cache, Lazy Load), donc créer une hiérarchie des ressources pour que les premières images et ceux qui sont le plus importantes soient chargé vite, et ensuite utiliser le lazy load sur le reste des éléments de la page.
### Résultat

## Problème #2
### Assurez-vous que le texte reste visible pendant le chargement des polices Web
Les polices de caractères peuvent être des fichiers volumineux et long à charger, donc peuvent créer du texte invisible jusqu'a ce que leur chargement soient complet.
### Ajouter un "font-display: swap;"
Dans mon fichier styles.css, je dois ajouter "font-display: swap;" quand j'importe mes typography avec @font-face. Cette méthode est la plus simple, car le navigateur va seulement remplacer la typography personaliser par une typographie présente sur le systeme du client.
### Résultat
Ce n'était pas très compliquer j'ai ajouter la ligne de code à toutes mes polices de caractères personalisé.


## Problème #3
### Diffusez des images aux formats nouvelle génération
les fichiers d'images que j'utilise sont principalement des png et ce sont des fichiers qui sont de grande qualité et ne sont pas compressé. Il existes des fichiers plus compressé, donc plus performant pour le web, par example le format WebP. Ce format est de 25% à 34% plus petit que les fichiers de format png. En plus, le format WebP, comme le png, prend en charge la transparence.
### Convertir mes images Png en WebP
Prendre le dossier d'images et convertir toutes les images en WebP. Ensuite, changer les lien html pour etre sur que les images s'affichent.
### Résultat

## Rapport projeet ScollyTelling après optimisation
[Page Speed Insights - Rapport du 12 mai 2023, 03:12:50]([https://pagespeed.web.dev/analysis/https-vince1887-github-io-desjardins-vincent-scrollytelling/10lfxqnv94?form_factor=desktop](https://pagespeed.web.dev/analysis/https-vince1887-github-io-desjardins-vincent-scrollytelling/10lfxqnv94?form_factor=desktop))
