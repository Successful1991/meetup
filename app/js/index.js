function initMap() {
  var uluru = {lat: 50.4546600, lng: 30.5238000};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
function closePopup() {
  $('.map__popup-wrapper').css({'display':'none'});
}

function upScroll() {
  $('html, body').animate({scrollTop: 0},500);
  return false;
}
function menuClose() {
  $('.header nav').css({'display': 'none'});
}
function menuOpen() {
  $('.header nav').css({'display': 'block'});
}