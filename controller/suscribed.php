<?php
include_once 'connection.php';

//get parameters
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$cumple = $_POST['date'];


//table data
$table = 'suscribed';

if (!userExists($email, $conexion)) {
  # code...
  $insertar = "INSERT INTO $table (nombre,email,telefono,cumpleanos) VALUES ('$name','$email','$phone','$cumple')";
  mysqli_query($conexion,$insertar);
  $message = 'success';
} else {
  # code...
  $message = 'warning';
}


function userExists($user, $conexion)
{
  $band = false;
  $consulta= "SELECT * FROM suscribed WHERE email = '$user'";
  $resultado = mysqli_query($conexion,$consulta);
  $row = mysqli_fetch_row($resultado);
  if (sizeof($row) > 0) {
    $band = true;
  }
  return $band;
}

mysqli_close($conexion);

echo $message;
?>
