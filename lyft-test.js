// $("#search-button").on("click", function(event){
//   console.log("Working");
//   event.preventDefault();

  // GOOGLE MAPS DIRECTION
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
var service;
var currentLat;
var currentLong;
var destLat;
var destLong;

google.maps.event.addDomListener(window, 'load', function () {
            var places = new google.maps.places.Autocomplete(document.getElementById('address'));
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                var address = place.formatted_address;
                currentLat = place.geometry.location.A;
                currentLong = place.geometry.location.F;
               
            });
        });
         google.maps.event.addDomListener(window, 'load', function () {
            var places = new google.maps.places.Autocomplete(document.getElementById('destination'));
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                var address = place.formatted_address;
                destLat = place.geometry.location.A;
                destLong = place.geometry.location.F;
               
            });
        });

var map = new google.maps.Map(document.getElementById('map'), {
  zoom:7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById('panel'));

$('#submit').click(function() {
    var address = $('#address').val(); 
    var destination = $('#destination').val()
    var request = {
        origin: address,
        destination: destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
      function initialize() {
  var details = new google.maps.LatLng(destLat,destLong);

    var placesRequest = {
        location: details,
        radius: '500',
      query: "restaurant"
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(placesRequest, callback);
 }

function callback(results, status) {
  console.log(results)
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
});


  // LYFT 
   var OPTIONS = {
    scriptSrc: 'lyftWebButton.min.js',
    namespace: 'NightOut',
    clientId: 'SdaJLP8lKGiU',
    clientToken: 'm4ecAnkznXazSfAWHsjKUTAVm3z8cRSUatVK/MklPRnjr8AS1YUBuqhPQ1tQKHkXGc/VR7VIgiKw1hzz42eXHWfHUrvCCgPYoxeWzHYSSLeFBuW25eT3vGw=',
    location: {
      pickup: {}, 
      destination: {
        latitude: '37.776503000',
        longitude: '-122.392038500',
      },
    },
    parentElement: document.getElementById('lyft-web-button-parent'),
    queryParams: {
      credits: ''
    },
    theme: 'multicolor large',
  };
  (function(t) {
    var n = this.window,
    e = this.document;
    n.lyftInstanceIndex = n.lyftInstanceIndex || 0;
    var a = t.parentElement,
    c = e.createElement("script");
    c.async = !0, c.onload = function() {
    n.lyftInstanceIndex++;
    var e = t.namespace ? "lyftWebButton" + t.namespace + n.lyftInstanceIndex : "lyftWebButton" + n.lyftInstanceIndex;
    n[e] = n.lyftWebButton, t.objectName = e, n[e].initialize(t)
  }, c.src = t.scriptSrc, a.insertBefore(c, a.childNodes[0])
  }).call(this, OPTIONS);

// });