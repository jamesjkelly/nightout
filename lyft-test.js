



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
  var placesQuery = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key="+ placesKey +"";
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

  })
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