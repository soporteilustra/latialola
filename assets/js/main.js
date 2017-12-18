//Scroll main view section
$('#call-action').click(function() {
  $('body').css('overflow','scroll');
  $('#main').fadeIn("slow").delay(500).addClass('showed');
  $('#landscape').addClass('hidden');
});
//redirect to index
$('#img-brand').click(function() {
  window.open('./','_self');
});
//maps
function initMap() {
  var uluru = {lat: -14.0794951, lng: -75.7235735};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
//Function auto initi
$(document).ready(function () {
  initMap();
})

//tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Styling hashtags
jQuery.fn.highlight = function(pattern) {
    var regex = typeof(pattern) === "string" ? new RegExp(pattern, "i") : pattern; // assume very LOOSELY pattern is regexp if not string
    function innerHighlight(node, pattern) {
        var skip = 0;
        if (node.nodeType === 3) { // 3 - Text node
            var pos = node.data.search(regex);
            if (pos >= 0 && node.data.length > 0) { // .* matching "" causes infinite loop
                var match = node.data.match(regex); // get the match(es), but we would only handle the 1st one, hence /g is not recommended
                var spanNode = document.createElement('span');
                spanNode.className = 'highlight'; // set css
                var middleBit = node.splitText(pos); // split to 2 nodes, node contains the pre-pos text, middleBit has the post-pos
                var endBit = middleBit.splitText(match[0].length); // similarly split middleBit to 2 nodes
                var middleClone = middleBit.cloneNode(true);
                spanNode.appendChild(middleClone);
                // parentNode ie. node, now has 3 nodes by 2 splitText()s, replace the middle with the highlighted spanNode:
                middleBit.parentNode.replaceChild(spanNode, middleBit);
                skip = 1; // skip this middleBit, but still need to check endBit
            }
        } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) { // 1 - Element node
            for (var i = 0; i < node.childNodes.length; i++) { // highlight all children
                i += innerHighlight(node.childNodes[i], pattern); // skip highlighted ones
            }
        }
        return skip;
    }

    return this.each(function() {
        innerHighlight(this, pattern);
    });
};

jQuery.fn.removeHighlight = function() {
    return this.find("span.highlight").each(function() {
        this.parentNode.firstChild.nodeName;
        with (this.parentNode) {
            replaceChild(this.firstChild, this);
            normalize();
        }
    }).end();
};

const msgForm = '<div id="msgStatus" class="form-control-feedback">:msg:</div>';

/***** Formulario de suscripcion ***/
$('#form-suscribe').submit(function (e) {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: $(this).attr('action'),
    data: $(this).serialize(),
    success: function (msg) {
      resetForm();
      $('#inputmail').focus();
      if (msg == "success") {
        var mensaje = "Bienvenido. Ya eres parte del mundo Qincha!"
        $('.form-group').addClass('has-success');
        $('input').addClass('form-control-success');
        $('input').val('');
        $('#inputname').focus();
      } else if (msg == "warning") {
        var mensaje = "Ya te encuentras registrado."
        $('.form-group').addClass('has-warning');
        $('input').addClass('form-control-warning');
      } else {
        var mensaje = "Tuvimos un problema, inténtalo más tarde."
        $('.form-group').addClass('has-danger');
        $('input').addClass('form-control-danger');
      }
      var msje = msgForm.replace(':msg:', mensaje);
      var $msje = $(msje);
      $('#formmail').append($msje);
    }
  })

});

//reset form
function resetForm() {
  $('#msgStatus').remove();
  $('input').removeClass();
  $('input').addClass('input-qincha form-control');
  $('.form-group').removeClass('has-danger');
  $('.form-group').removeClass('has-success');
  $('.form-group').removeClass('has-warning');
}


//view high gallery
$('.gallery-item').click(function () {
  if ($(this).hasClass('col-md-4')) {
    $('.gallery-item').removeClass('col-md-12');
    $(this).removeClass('col-md-4').addClass('col-md-12');
  } else {
    $(this).removeClass('col-md-12').addClass('col-md-4');
  }
});

/***** Formulario de reservas ***/
$('#reservaform').submit(function (e) {
  e.preventDefault();

  var $formInput = $(this).find('input');
  var cont = 0;

  $formInput.each(function () {
    if ( $.trim( $(this).val() ) == '' && $(this).attr('required')) {
      console.log(cont);
    } else {
      cont++;
      console.log(cont);
    }
  });
  var $fechaReserva = $('input[name="fecha"]').val();
  console.log($fechaReserva);
  var reservaDate = convertDateFormat($fechaReserva);
  console.log(reservaDate)
  if(checkDate(reservaDate)) {
      alert('Reservas no disponibles para el '+ reservaDate+' por evento privado');
  } else if (cont==8) {
     $('#personal-data').hide();
     $('#reservation-data').hide();
     $('#btn-submit').hide();
     $('#process-msg').show(500);
     $.ajax({
        method: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function (msg) {
          setTimeout(function(){
             $('#process-msg').hide(500);
             if (msg == "success") {
                $('#success-msg').show(500);
             } else  {
                $('#error-msg').show(500);
             }
          }, 2000);
       }
    })
  } else {
     alert('Ingrese correctamente los datos.');
  }

});

//Check date between

function checkDate(date) {
	var bolean = false;
    var dateFrom = "28/07/2017";
    var dateTo = "29/07/2017";
    var dateCheck = date;

    var d1 = dateFrom.split("/");
    var d2 = dateTo.split("/");
    var c = dateCheck.split("/");

    var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
    var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
    var check = new Date(c[2], parseInt(c[1])-1, c[0]);

    if(check >= from && check <= to) {
		bolean = true;
	}
     var days = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
     var d = new Date(check);
     var dayName = days[d.getDay()];
     console.log(dayName);
     if (dayName == 'Lunes') {
          bolean = true;
     }
	return bolean;
}

function convertDateFormat(string) {
  var info = string.split('-');
  return info[2] + '/' + info[1] + '/' + info[0];
}
