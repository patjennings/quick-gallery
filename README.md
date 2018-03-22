# Tableau-tactile

## Requirements
Image Magick
PHP

## export images
To `/files`

## Generate thumbnails
Créer dossier `thumbs`

    for file in *.{jpg,jpeg,JPG,png,PNG,bmp,BMP};do convert $file -thumbnail 480x480^ -gravity center -extent 480x480 thumbs/$file; done

populer data.json w/ listFiles2Json.php - copier coller code ds js/init.js > variable data.json
ok
