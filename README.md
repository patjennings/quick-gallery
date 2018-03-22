# Tableau-tactile

## Requirements
Image Magick
PHP


## export images
/files

## automator pour thumbs
Créer dossier `thumbs`
    for file in *.{jpg,jpeg,JPG,png,PNG,bmp,BMP};do convert $file -thumbnail 480x480^ -gravity center -extent 480x480 thumbs/$file; done

populer data.json w/ utils/listFiles2Json.php - copier coller code ds js/init.js > variable data.json
ok

wrapper
    cell
        link
            img.source
            img.thumbs
