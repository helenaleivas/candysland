function initMap() {
  var ifrs = {lat: -32.04064, lng: -52.088499};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: ifrs
  });
  var marker = new google.maps.Marker({
    position:ifrs,
    map: map
  });
}
