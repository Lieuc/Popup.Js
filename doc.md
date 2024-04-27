## Styles des Popups

### `popupContainerStyle`
- **Description** : Définit les styles CSS par défaut pour le conteneur des popups.
- **Propriétés** :
    - `display` : `flex` pour afficher les éléments en ligne avec flexbox.
    - `alignItems` : `center` pour centrer verticalement les éléments enfants.
    - `width` : Taille ajustée au contenu.
    - `maxWidth` : Largeur maximale de 300px.
    - `height` : Hauteur ajustée au contenu.
    - `boxShadow` : Ombre portée de 0 3px 10px avec transparence.
    - `borderRadius` : Coins arrondis de 10px.
    - `margin` : Marge automatique pour centrer horizontalement.
    - `padding` : Remplissage intérieur de 10px.
    - `position` : Position relative pour le positionnement absolu des éléments enfants.
    - `transform` : Translation de -100px sur l'axe Y pour l'animation d'apparition.

### `popupMessageStyle`
- **Description** : Définit les styles CSS par défaut pour le message des popups.
- **Propriétés** :
    - `margin` : Marge de 0 en haut et à droite, 0 en bas, 30px à gauche.
    - `fontFamily` : Police de caractères Helvetica ou sans-serif.
    - `maxWidth` : Largeur maximale de 290px.
    - `lineBreak` : Permet une rupture de ligne n'importe où.
    - `color` : Couleur de texte en hexadécimal.

### `svgStyle`
- **Description** : Définit les styles CSS pour les SVG des popups.
- **Propriétés** :
    - `width` : Largeur de 16px.
    - `height` : Hauteur de 16px.
    - `position` : Position absolue.
    - `left` : Position de 12px à partir de la gauche.
    - `opacity` : Opacité à 0 pour l'animation d'apparition.

## SVG pour les Popups

- **`validSvgCode`** : Code SVG représentant un symbole de validation.
- **`errorSvgCode`** : Code SVG représentant un symbole d'erreur.
- **`warningSvgCode`** : Code SVG représentant un symbole d'avertissement.

## Classe Popup

### Constructeur
- **`constructor(content, duration, placement = 'top')`** : Initialise une nouvelle instance de la classe Popup avec le contenu, la durée et éventuellement l'emplacement par défaut.

### Méthodes Publiques
- **`message(content, duration, containerStyle, messageStyle)`** : Affiche un popup avec un message de succès.
- **`error(content, duration, containerStyle, messageStyle)`** : Affiche un popup avec un message d'erreur.
- **`warn(content, duration, containerStyle, messageStyle)`** : Affiche un popup avec un message d'avertissement.
- **`custom(content, duration, svgCode, containerStyle, messageStyle)`** : Affiche un popup avec un message personnalisé et un SVG personnalisé.
- **`applyStyle(element, style)`** : Applique les styles CSS à un élément HTML.
- **`animateBounceIn(element)`** : Anime l'élément en lui appliquant un effet de rebond lors de son apparition.
- **`animateContainerBounceIn(element, svg, popup)`** : Anime le conteneur du popup en lui appliquant un effet de rebond lors de son apparition.
- **`animateContainerBounceOut(element)`** : Anime le conteneur du popup en lui appliquant un effet de rebond lors de sa disparition.
