$( document ).ready(function() {

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
var service;
var currentLat;
var currentLong;
var destLat;
var destLong;
var destPlaceId;

// GEOLOCATION
var geoOptions = {
  enableHighAccuracy: true,
  // timeout: 2000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  currentLat = crd.latitude;
  currentLong = crd.longitude;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  // $("#location-input").append(crd).val().trim();
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);

// GOOGLE MAPS DIRECTIONS
// google.maps.event.addDomListener(window, 'load', function () {
//             var places = new google.maps.places.Autocomplete(document.getElementById('location-input'));
//             google.maps.event.addListener(places, 'place_changed', function () {
//                 var place = places.getPlace();
//                 var address = place.formatted_address;
//                 var latitude = place.geometry.location.A;
//                 var longitude = place.geometry.location.F;
               
//             });
//         });

         google.maps.event.addDomListener(window, 'load', function () {
            var places = new google.maps.places.Autocomplete(document.getElementById('destination-input'));
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                var address = place.formatted_address;
                var latitude = place.geometry.location.A;
                var longitude = place.geometry.location.F;
                destPlaceId = place.place_id
                destLong = place.geometry.viewport.b.b
                destLat = place.geometry.viewport.f.f
               
            });
        });

var map = new google.maps.Map(document.getElementById('map'), {
  zoom:7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById('panel'));

$('#search-button').click(function() {
    event.preventDefault();
    var keyword = $('input[type]:checked').val();
    console.log(keyword);
    var address = $('#location-input').val(); 
    var destination = $('#destination-input').val()
    var request = {
        origin: address,
        destination: destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    console.log(currentLat + currentLong);
    
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
     var nearbyDestlocation = new google.maps.LatLng(destLat,destLong);

  var nearbyRequest = {
    location: nearbyDestlocation,
    radius: '500',
    keyword: [keyword]
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(nearbyRequest, callback);


function callback(results, status) {
  
  
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log(results[0])
     console.log(results)
     destPlace1 = results[0]
     destPlace2 = results[1]
     destPlace3 = results[2]
     destplace4 = results[3]
     destPlace5 = results[4]
  }
}

});


  // LYFT 
  //  var OPTIONS = {
  //   scriptSrc: 'lyftWebButton.min.js',
  //   namespace: 'NightOut',
  //   clientId: 'SdaJLP8lKGiU',
  //   clientToken: 'm4ecAnkznXazSfAWHsjKUTAVm3z8cRSUatVK/MklPRnjr8AS1YUBuqhPQ1tQKHkXGc/VR7VIgiKw1hzz42eXHWfHUrvCCgPYoxeWzHYSSLeFBuW25eT3vGw=',
  //   location: {
  //     pickup: {}, 
  //     destination: {
  //       latitude: destLat,
  //       longitude: destLong,
  //     },
  //   },
  //   parentElement: document.getElementById('lyft-web-button-parent'),
  //   queryParams: {
  //     credits: ''
  //   },
  //   theme: 'launcher-medium',
  // };
  // (function(t) {
  //   var n = this.window,
  //   e = this.document;
  //   n.lyftInstanceIndex = n.lyftInstanceIndex || 0;
  //   var a = t.parentElement,
  //   c = e.createElement("script");
  //   c.async = !0, c.onload = function() {
  //   n.lyftInstanceIndex++;
  //   var e = t.namespace ? "lyftWebButton" + t.namespace + n.lyftInstanceIndex : "lyftWebButton" + n.lyftInstanceIndex;
  //   n[e] = n.lyftWebButton, t.objectName = e, n[e].initialize(t)
  // }, c.src = t.scriptSrc, a.insertBefore(c, a.childNodes[0])
  // }).call(this, OPTIONS);


});

