



var destination = $("#destination-input").val();
var origin = $("#location-input").val();


$("#search-button").on("click", function(event){
  console.log("Working");
  event.preventDefault();



// MAPQUEST DIRECTIONS
  // var mapKey = "gpFOjCK1DZeRpMnJG6W0DDiGPu8cj25X";
  // var mapQuery = "http://www.mapquestapi.com/directions/v2/route?key="+ mapKey +"&from="+ origin +"&to="+ destination +"";
  // $.ajax({
  //   url: mapQuery,
  //   method: 'GET'
  // }).done(function(response){
  //   console.log(response);
  //   var directions = response.data;
  //   $("#directions-container").html(response.data);
  // });

  // GOOGLE MAPS DIRECTION
  var placesKey = "AIzaSyBEozSg5YXg1aZy_bRN1jzb_KnugOMdGMQ";
  var placesQuery = "https://maps.googleapis.com/maps/api/place/textsearch/output?parameters";
    $.ajax({
    url: placesQuery,
    dataType: 'jsonp',    
    jsonp: 'callback',
    crossDomain: true, 
    jsonp:false,
    jsonpCallback: "json_callback",
    method: 'GET',
    success: function() { console.log('Success!'); },                                                                                                                                                                                       
    error: function() { console.log('Uh Oh!'); },
  });

//Google Places API

// var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// };

  // })
    // .done(function(response){
    // console.log(response);
    // // var directions = response.data;
    // $("#directions-container").html(response.data);
  // });

  // LYFT 
  //  var OPTIONS = {
  //   scriptSrc: 'lyftWebButton.min.js',
  //   namespace: 'NightOut',
  //   clientId: 'SdaJLP8lKGiU',
  //   clientToken: 'm4ecAnkznXazSfAWHsjKUTAVm3z8cRSUatVK/MklPRnjr8AS1YUBuqhPQ1tQKHkXGc/VR7VIgiKw1hzz42eXHWfHUrvCCgPYoxeWzHYSSLeFBuW25eT3vGw=',
  //   location: {
  //     pickup: {}, 
  //     destination: {
  //       latitude: '37.776503000',
  //       longitude: '-122.392038500',
  //     },
  //   },
  //   parentElement: document.getElementById('lyft-web-button-parent'),
  //   queryParams: {
  //     credits: ''
  //   },
  //   theme: 'multicolor large',
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