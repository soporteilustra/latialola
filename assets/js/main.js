//Scroll main view section
$('#call-action').click(function() {
  $('body').css('overflow','scroll');
  $('#main').fadeIn("slow").delay(500).addClass('showed');
  $('#landscape').addClass('hidden');
});

//maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });

}
