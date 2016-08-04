(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.carousel').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initialize() {
  var myLatLng = {lat:47.611780, lng: -122.289885}
  var mapProp = {
    center:new google.maps.LatLng(47.611780,-122.289885),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: myLatLng,
    title: 'Hello World',
    map: map
  })
}
google.maps.event.addDomListener(window, 'load', initialize);