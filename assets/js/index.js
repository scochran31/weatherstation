var savedCities = [];
var citySearch = "";
var currInfoEl = $('#currInfo');
var weatherCardEl = $('#weatherCards');
var date = dayjs().format('M/D/YY');

$('#srchBtn').on('click', function (event) {
    event.preventDefault();
    var searchEL = $('#citySearch')
    var findCity = $(searchEL).val().trim()

    coordSearch(findCity)

    $(searchEL).val('')
});

function coordSearch(findCity) {

    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + findCity + '&appid=df2a82e2a64dedd7fb12e7dc77b85bea',
        function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            // console.log(data);
            var lat = data.coord.lat;
            var lon = data.coord.lon;

            cityName = data.name
            // recentSearch(findCity)

            weatherCall(lat, lon);
        })
        .catch(function (error) {
            alert(error)
        })
}

function weatherCall(lat, lon) {

    $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=minute&excluded=hourly&appid=df2a82e2a64dedd7fb12e7dc77b85bea',
        function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data);
            currWeath(data)
            weathCard(data)
        })
        .catch(function (error) {
            alert(error)
        })
}

function currWeath(data) {
    var currIcon = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    $('#city').html(`${cityName}` + '  ' + `(${date})` + '  ' + `<img src="${currIcon}" alt="">`).addClass('has-text-white')
    $('#currInfo').addClass('has-background-white')
    $('#temp').text('Temp: ' + data.current.temp + '°F')
    $('#wind').text('Wind: ' + data.current.wind_speed + 'MPH')
    $('#humidity').text('Humidity: ' + data.current.humidity + '%')
    $('#UVI').text('UV Index: ' + data.current.uvi)
}

function weathCard(data) {
    $('#future').addClass('has-text-white pt-20').text('5 Day Forecast: ')
    for (var i = 1; i < 6; i++) {
        var icon = data.daily[i].weather[0].icon
        var iconImg = "http://openweathermap.org/img/w/" + icon + ".png"
        var col = $('<div>').addClass('column has-background-link')
        var card = $('<div>').addClass('card')
        var cardContent = $('<div>').addClass('card-content')
        // var cardDate = $('<h4>').text()
        var cardIcon = $('<div>').append($('<img>').attr('src', iconImg))
        var temp = $('<p>').text('Temp: ' + Math.floor(data.daily[i].temp.max) + '°F')
        var wind = $('<p>').text('Wind: ' + data.daily[i].wind_speed + 'MPH')
        var humidity = $('<p>').text('Humidity: ' + data.daily[i].humidity + '%')

        $(cardContent).append(cardIcon, temp, wind, humidity)
        $(card).append(cardContent)
        $(col).append(card)
        $(weatherCardEl).append(col)
    }
}