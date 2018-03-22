<?php
	$date = date("Y-m-d H:i:s");
	$time = time('h:i:s');
	$filesList = array();
	$dir = "files/";
	$currentFilesArray = array();
	$checkAdd = false;
	$checkDelete = false;
	$id = 0;
	$output;
	//$nodesToDelete = array();

	//Contrôle du dossier

	$output .= "{";

	if($dossier = opendir($dir))
	{
		while(false !== ($fichier = readdir($dossier)))
		{
			if($fichier != '.' && $fichier != '..' && $fichier != 'index.php' && $fichier != ".DS_Store" && $fichier != "thumbs")
			{
				if($id != 0){
					$output .= ",";
				}
				$output .= "\"".$id."\": \"".$fichier."\"";
				$id++;
			}
		}

		closedir($dossier);
	}
	else
	{
		$output = 'Le dossier n\' a pas pu être ouvert';
	}

	$output .= "}";
	echo $output;

?>
