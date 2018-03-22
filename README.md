# Quick Gallery
Pour faire une quick gallery, sympatoche, agréable à utiliser (touches du clavier, etc.)

## Requirements
- Image Magick
- PHP

## export images
To `/files`

## Generate thumbnails
Aller dans files

    $ cd files

Créer un dossier `thumbs`

    $ mkdir thumbs

Traiter tous les fichiers image

    $ for file in *.{jpg,jpeg,JPG,png,PNG,bmp,BMP};do convert $file -thumbnail 480x480^ -gravity center -extent 480x480 thumbs/$file; done

## JS
- Ouvrir `listFiles2Json.php` dans le navigateur
- Copier le texte en sortie (json)
- coller dans la variable `dataJson` de `js/init.js`

## Améliorations
- Automatiser le listFiles2Json et populer automatiquement la variable dans data.json
- Créer un fichier json avec le json généré à l'intérieur
