<?php
include_once 'connection.php';
include 'sendmailreservas.php';

//get parameters
$variables='';
$values='';
foreach ($_POST as $key => $value) {
    $variables.="$key,";
    $values.="'$value',";
}
$variables = substr($variables,0,-1);
$values= substr($values,0,-1);

//table data
$table = 'reservas';
# code...
$insertar = "INSERT INTO $table ($variables) VALUES ($values)";
mysqli_query($conexion,$insertar);

$bool = sendEmail($variables, $values);
if ($bool) {
  # code...
  $message = 'success';
} else {
  $message = 'danger';
}

mysqli_close($conexion);

echo $message;
?>
