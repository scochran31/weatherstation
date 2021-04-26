var searchEl = document.querySelector('#city');
var citySearch = document.querySelector('#search');
var history = document.querySelector('#history');

searchEl.addEventListener('submit', function(event) {
    event.preventDefault();

    if (citySearch.value.length === '') return;
    history.innerHTML = citySearch.value;

    citySearch.value = ''

    localStorage.setItem('searchHist', JSON.stringify(history.innerHTML));

}, false);





var city = 'Bountiful'

$.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=40.8894&lon=-111.8808&units=imperial&exclude=minutely&exclued=hourly&appid=f44447ea0651e8a915b6acf9c822cdf5', 
function(data) {
    console.log(data);

    var icon1 = "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
    var weather1 = data.daily[0].weather[0].main;
    var maxTemp1 = Math.floor(data.daily[0].temp.max);  
    var minTemp1 = Math.floor(data.daily[0].temp.min);
    
            $('.i1').attr('src', icon1);
            $('.w1').append(weather1);
            $('.t1').append(maxTemp1 + '</br>' + minTemp1);

    var icon2 = "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
    var weather2 = data.daily[1].weather[0].main;
    var maxTemp2 = Math.floor(data.daily[1].temp.max);  
    var minTemp2 = Math.floor(data.daily[1].temp.min);
    
            $('.i2').attr('src', icon2);
            $('.w2').append(weather2);
            $('.t2').append(maxTemp2 + '</br>' + minTemp2);

    var icon3 = "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
    var weather3 = data.daily[2].weather[0].main;
    var maxTemp3 = Math.floor(data.daily[2].temp.max);  
    var minTemp3 = Math.floor(data.daily[2].temp.min);
    
            $('.i3').attr('src', icon3);
            $('.w3').append(weather3);
            $('.t3').append(maxTemp3 + '</br>' + minTemp3);

    var icon4 = "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
    var weather4 = data.daily[3].weather[0].main;
    var maxTemp4 = Math.floor(data.daily[3].temp.max);  
    var minTemp4 = Math.floor(data.daily[3].temp.min);
    
            $('.i4').attr('src', icon4);
            $('.w4').append(weather4);
            $('.t4').append(maxTemp4 + '</br>' + minTemp4);

    var icon5 = "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
    var weather5 = data.daily[4].weather[0].main;
    var maxTemp5 = Math.floor(data.daily[4].temp.max);  
    var minTemp5 = Math.floor(data.daily[4].temp.min);
    
            $('.i5').attr('src', icon5);
            $('.w5').append(weather5);
            $('.t5').append(maxTemp5 + '</br>' + minTemp5);
});
