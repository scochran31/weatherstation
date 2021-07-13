var savedCities = [];
var citySearch = "";
var currInfoEl = $('#currInfo');
var weatherCardEl = $('weatherCards');
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

    $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=minute&exclude=hourly&appid=df2a82e2a64dedd7fb12e7dc77b85bea',
        function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data);
            // currWeath(data)
            // weathCard(data)
        })
        .catch(function (error) {
            alert(error)
        })
}