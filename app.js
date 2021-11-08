function weatherDataFetch( city ) {
	var key = '87dea71911a94f4e284d8bb0b86ff779';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	}) // Conver data to json
	.then(function(data) {
		console.log(data);
		drawWeather(data);
	})
	.catch(function() {
		//catch any errors
	});
}

function cityWeather(e) {
	weatherDataFetch( 'Tallinn' );
}

function drawWeather( data ) {
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var description = data.weather[0].description;

	document.querySelector('#description').innerHTML = description;
	document.querySelector('#temp').innerHTML = celcius + '&deg;';
	document.querySelector('#location').innerHTML = data.name;
}