# Quick Gallery
Pour faire une quick gallery, sympatoche, agréable à utiliser (touches du clavier, etc.)

## Requirements
- Image Magick
- PHP

## export images
To `/files`

## Generate thumbnails
Aller dans files
```bash
$ cd files
```

Remplacer tous les espaces par des underscores
```bash
$ rename 's/\ /_/g' *
```

Créer un dossier `thumbs`
```bash
$ mkdir thumbs
```

Traiter tous les fichiers image
```bash
$ for file in *.{jpg,jpeg,JPG,png,PNG,bmp,BMP};do convert $file -thumbnail 480x480^ -gravity center -extent 480x480 thumbs/$file; done
```

## Lister images et créer json
```bash
$ echo "{"; for file in *.{jpg,jpeg,JPG,png,PNG,bmp,BMP};do echo "\"n\":\"$file\","; done; echo "}"
```
> Note : cette commande est sensée remplacer la partie PHP + renseignement variable Js dessous

## JS
- Ouvrir `listFiles2Json.php` dans le navigateur
- Copier le texte en sortie (json)
- coller dans la variable `dataJson` de `js/init.js`

## Améliorations
- Automatiser le listFiles2Json et populer automatiquement la variable dans data.json
- Créer un fichier json avec le json généré à l'intérieur
- lister les fichiers en bash ?
