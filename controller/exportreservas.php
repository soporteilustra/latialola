<?php
//Base de datos
$conexion = new mysqli('localhost','root','root','qincha');

//fecha de la exportación
$fecha = date("d-m-Y");
$consulta= "SELECT * FROM reservas";
$resultado= $conexion->query($consulta);

//Inicio de la instancia para la exportación en Excel
header('Content-type: application/vnd.ms-excel');
header("Content-Disposition: attachment; filename=Reservas_Qincha_$fecha.xls");
header("Pragma: no-cache");
header("Expires: 0");

echo "<table border=1> ";
echo "<tr> ";
echo  "<th colspan='6'>REPORTE DE RESERVAS - QINCHA.PE </th> ";
echo "</tr> ";
echo "<tr> ";
echo  "<th>N&deg;</th> ";
echo  "<th>Nombre</th> ";
echo 	"<th>Correo electrónico</th> ";
echo 	"<th>Cumpleaños</th> ";
echo 	"<th>Teléfono</th> ";
echo 	"<th>Reserva a nombre de</th> ";
echo  "<th>Fecha de reserva</th> ";
echo  "<th>Hora de reserva</th> ";
echo  "<th>Número de personas</th> ";
echo 	"<th>Fecha de registro</th> ";
echo "</tr> ";

while($row = mysqli_fetch_array($resultado)){

	$id = $row['id'];
	$nombre = $row['nombre'];
	$correo = $row['correo'];
	$cumpleanos = $row['cumpleanos'];
  	$telefono = $row['telefono'];
	$reserva = $row['reserva'];
   $fecha = $row['fecha'];
	$hora = $row['hora'];
   $personas = $row['personas'];
	$date = $row['fecha_registro'];

	echo "<tr> ";
	echo 	"<td>".$id."</td> ";
	echo 	"<td>".$nombre."</td> ";
	echo 	"<td>".$correo."</td> ";
	echo 	"<td>".$cumpleanos."</td> ";
	echo 	"<td>".$telefono."</td> ";
	echo 	"<td>".$reserva."</td> ";
	echo 	"<td>".$fecha."</td> ";
	echo 	"<td>".$hora."</td> ";
  echo 	"<td>".$personas."</td> ";
	echo 	"<td>".$date."</td> ";
	echo "</tr> ";

}
echo "</table> ";

?>
