$(document).ready(function () {
        $('#searchBtn').click(function (event) {
                event.preventDefault();
                var location = $('#search').val();

                //Search for City
                $.getJSON('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=f44447ea0651e8a915b6acf9c822cdf5',
                        function (data) {
                                // console.log(data)
                                var lat = data.city.coord.lat;
                                // console.log(lat);
                                var lon = data.city.coord.lon;
                                // console.log(lon);
                                var city = data.city.name;
                                var dt = dayjs().format('M/D/YY');

                                //Use coordinate information to populate weather data

                                $.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=minutely&excluded=hourly&appid=f44447ea0651e8a915b6acf9c822cdf5',
                                        function (data) {
                                                // console.log(data);

                                                var currIcon = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
                                                var currTemp = data.current.temp;
                                                var currWind = data.current.wind_speed;
                                                var currHumid = data.current.humidity;
                                                var currUV = data.current.uvi;

                                                $('#currCity').html(`${city}` + '  ' + `(${dt})` + '  ' + `<img src="${currIcon}" alt="">`);
                                                $('.currTemp').html('Temp:' + '  ' + currTemp + '°F');
                                                $('.currWind').html('Wind:' + '  ' + currWind + 'MPH');
                                                $('.currHumid').html('Humidity:' + '  ' + currHumid + '%');
                                                $('.currUV').html('UV Index:' + '  ' + currUV);

                                                var icon1 = "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
                                                var wind1 = data.daily[0].wind_speed;
                                                var maxTemp1 = Math.floor(data.daily[0].temp.max);
                                                var humidity1 = data.daily[0].humidity;

                                                $('.i1').attr('src', icon1);
                                                $('.w1').html(wind1 + 'MPH');
                                                $('.t1').html(maxTemp1 + '°F');
                                                $('.h1').html(humidity1 + '%');

                                                var icon2 = "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
                                                var wind2 = data.daily[1].wind_speed;
                                                var maxTemp2 = Math.floor(data.daily[1].temp.max);
                                                var humidity2 = data.daily[1].humidity;

                                                $('.i2').attr('src', icon2);
                                                $('.w2').html(wind2 + 'MPH');
                                                $('.t2').html(maxTemp2 + '°F');
                                                $('.h2').html(humidity2 + '%');

                                                var icon3 = "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
                                                var wind3 = data.daily[2].wind_speed;
                                                var maxTemp3 = Math.floor(data.daily[2].temp.max);
                                                var humidity3 = data.daily[2].humidity;

                                                $('.i3').attr('src', icon3);
                                                $('.w3').html(wind3 + 'MPH');
                                                $('.t3').html(maxTemp3 + '°F');
                                                $('.h3').html(humidity3 + '%');

                                                var icon4 = "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
                                                var wind4 = data.daily[3].wind_speed;
                                                var maxTemp4 = Math.floor(data.daily[3].temp.max);
                                                var humidity4 = data.daily[3].humidity;

                                                $('.i4').attr('src', icon4);
                                                $('.w4').html(wind4 + 'MPH');
                                                $('.t4').html(maxTemp4 + '°F');
                                                $('.h4').html(humidity4 + '%');

                                                var icon5 = "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
                                                var wind5 = data.daily[4].wind_speed;
                                                var maxTemp5 = Math.floor(data.daily[4].temp.max);
                                                var humidity5 = data.daily[4].humidity;

                                                $('.i5').attr('src', icon5);
                                                $('.w5').html(wind5 + 'MPH');
                                                $('.t5').html(maxTemp5 + '°F');
                                                $('.h5').html(humidity5 + '%');
                                        });

                        })
        });
});

function addCity () {
        var location = document.getElementById('search');
        var cityList = document.getElementById('history');
        var savedCities = JSON.parse(localStorage.getItem('All Cities'));
        if (savedCities == null) savedCities = [];
        var newCity = location.value;
        
        localStorage.setItem('City', JSON.stringify(newCity));
        savedCities.push(newCity);
        localStorage.setItem('All Cities', JSON.stringify(savedCities));
        
        
        cityList.innerHTML += '<p>' + newCity + '</p></br>';
        location.value = '';
};

document.getElementById('searchBtn').addEventListener('click', function () {
        addCity();
}, false);

// window.onload = function cityHistory () {
//         var cityList = document.getElementById('history');
//         var cityHist = JSON.parse(localStorage.getItem('All Cities'));
//         for (var i = 0; i < cityHist.length; i ++)
//         cityList.innerHTML =+ '<p>' + cityHist[i] + '</p></br>'
// }