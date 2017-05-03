<?php
//Base de datos
$conexion = new mysqli('localhost','root','root','qincha');

//fecha de la exportación
$fecha = date("d-m-Y");
$consulta= "SELECT * FROM suscribed";
$resultado= $conexion->query($consulta);

//Inicio de la instancia para la exportación en Excel
header('Content-type: application/vnd.ms-excel');
header("Content-Disposition: attachment; filename=Reporte_Qincha_suscripcion_$fecha.xls");
header("Pragma: no-cache");
header("Expires: 0");

echo "<table border=1> ";
echo "<tr> ";
echo  "<th colspan='6'>REPORTE DE SUSCRIPCIONES - QINCHA WEB </th> ";
echo "</tr> ";
echo "<tr> ";
echo  "<th>N&deg;</th> ";
echo  "<th>Nombre</th> ";
echo 	"<th>Correo electrónico</th> ";
echo 	"<th>Teléfono</th> ";
echo  "<th>Cumpleaños</th> ";
echo 	"<th>Fecha de suscripción</th> ";
echo "</tr> ";

while($row = mysqli_fetch_array($resultado)){

	$id = $row['id'];
	$nombre = $row['nombre'];
	$email = $row['email'];
	$phone = $row['telefono'];
  $cumple = $row['cumpleanos'];
	$fecha = $row['fecha_suscribcion'];

	echo "<tr> ";
	echo 	"<td>".$id."</td> ";
	echo 	"<td>".$nombre."</td> ";
	echo 	"<td>".$email."</td> ";
	echo 	"<td>".$phone."</td> ";
  echo 	"<td>".$cumple."</td> ";
	echo 	"<td>".$fecha."</td> ";
	echo "</tr> ";

}
echo "</table> ";

?>
