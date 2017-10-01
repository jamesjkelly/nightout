//

var profile = if $("#driving") === true {
	profile = "mapbox/driving";
}

else $("#walking") === true {
	profile = "mapbox/walking";
}

else $("cycling") === true {
	profile = "mapbox/cycling";
};

var coordinates = {longitude},{latitude};

var mapQuery = "https://api.mapbox.com/directions/v5/{profile}/{coordinates}";


$.ajax ({
	url: mapQuery,
	method: 'GET'
}).done(function(response){
	var directions = response.data;
	console.log(response.data);
	$("#directions-container").prepend(directions);
})