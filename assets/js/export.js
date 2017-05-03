$(document).ready(function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  today = mm+'/'+dd+'/'+yyyy;
  $('#current-date').html('Reporte al '+today);
});

const msgLogForm = '<div id="msgLogStatus" class="form-control-feedback">:msg:</div>';

/***** Formulario de suscripcion ***/
$('#form').submit(function (e) {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: $(this).attr('action'),
    data: $(this).serialize(),
    success: function (msg) {
      resetForm();
      $('#inputuser').focus();
      if (msg == "pass_danger") {
        var mensaje = "Contraseña errónea, inténtelo nuevamente!";
        $('.form-group').addClass('has-danger');
        $('input').addClass('form-control-danger');
      } else if (msg == "user_danger") {
        var mensaje = "Usuario administrador no existe!";
        $('.form-group').addClass('has-danger');
        $('input').addClass('form-control-danger');
      } else {
        var mensaje = "Su descarga ha comenzado satisfactoriamente!";
        $('.form-group').addClass('has-success');
        $('input').addClass('form-control-success');
      }
      var msje = msgLogForm.replace(':msg:', mensaje);
      var $msje = $(msje);
      $('#msjeLog').append($msje);
    }
  })

});


//reset form
function resetForm() {
  $('#msgLogStatus').remove();
  $('input').removeClass();
  $('input').addClass('input-qincha form-control');
  $('.form-group').removeClass('has-danger');
  $('.form-group').removeClass('has-success');
  $('.form-group').removeClass('has-warning');
}
