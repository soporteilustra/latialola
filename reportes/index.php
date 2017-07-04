<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="#c1282f"/>
  <title>Qincha | Suscripciones</title>
  <link rel="shorcut icon" href="assets/media/ico.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/css/main.css">
  <link rel="stylesheet" href="../assets/css/normalize.css">
</head>
<body>

  <section id="logReport">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-12 col-md-7 col-lg-5 p-4">
          <div class="card text-center" id="card-log">
            <div class="card-header">
              <img class="img-fluid" src="../assets/media/ico.png" alt="">
              Qincha | Reportes
            </div>
            <div id="access-content" class="card-block">
               <div class="container h-100">
                  <div class="row h-100 align-items-center justify-content-center">
                     <div id="process-access"class="col-12">
                        <h1><i class="fa fa-circle-o-notch fa-spin text-warning"></i></h1>
                        <h5 class="text-qincha">Ingresando ...</h5>
                     </div>
                     <div id="success-access"class="col-12">
                        <h5 class="title">Seleccione reporte que desea descargar</h5>
                        <a class="btn btn-outline-qincha"href="http://localhost:8000/controller/export.php">Reporte de suscripciones</a>
                        <a class="btn btn-outline-qincha mt-2"href="http://localhost:8000/controller/exportreservas.php">Reporte de reservas</a>
                        <p class="text-qincha mt-4">Todos los reportes son al <span id="time"></span></p>
                     </div>
                     <div class="col-12">
                        <form id="accessform" action="../controller/authenticate.php" method="post">
                          <div class="form-group">
                            <label class="textual">Ingrasa los datos para descargar los reportes</label>
                            <input type="text" class="input-qincha form-control " required="" name="user" autofocus="" placeholder="usuario">
                          </div>
                          <div class="form-group">
                            <input type="password" class="input-qincha form-control " required="" name="password" placeholder="contraseña">
                            <div id="msg-access"class="form-control-feedback">
                            </div>
                          </div>
                          <div class="form-group">
                            <button type="submit" class="btn btn-outline-qincha" name="button">Ingresar</button>
                          </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div class="card-footer text-muted" id="current-date">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <?php session_destroy() ?>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  <script src="../assets/js/export.js" charset="utf-8"></script>
</body>
</html>
