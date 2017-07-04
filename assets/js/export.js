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
  $('#current-date').html(today);
  $('#time').html(today);
});

const msgLogForm = '<div id="msgLogStatus" class="form-control-feedback">:msg:</div>';

/***** Formulario de suscripcion ***/
$('#accessform').submit(function (e) {
  e.preventDefault();
  $('#accessform').hide(200);
  $('#process-access').show(200);
  $.ajax({
    method: 'POST',
    url: $(this).attr('action'),
    data: $(this).serialize(),
    success: function (msg) {
      resetForm();
      setTimeout(function(){
         $('#inputuser').focus();
         if (msg == "pass") {
            $('#accessform').show();
            $('#process-access').hide(100);
            var mensaje = "Contraseña errónea, inténtelo nuevamente!";
            $('.form-group').addClass('has-danger');
            $('input').addClass('form-control-danger');
         } else if (msg == "user") {
            $('#accessform').show();
            $('#process-access').hide(100);
            var mensaje = "Usuario administrador no existe!";
            $('.form-group').addClass('has-danger');
            $('input').addClass('form-control-danger');
         } else {
            $('#process-access').hide(100);
            $('#success-access').show(500);
         }
         $('#msg-access').html(mensaje);
      }, 3000);
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
