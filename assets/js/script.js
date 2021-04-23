var city = "Ivins"

$.getJSON('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=f44447ea0651e8a915b6acf9c822cdf5', function(data) {
    console.log(data);
})

var searchEl = document.querySelector('#search');
var citySearch = document.querySelector('#city-search');
var searchHistory = document.querySelector('#search-history');

searchEl.addEventListener('submit', function (event) {
    event.preventDefault();

    if (citySearch.value.length === '') return;
    searchHistory.innerHTML += '<li>' + citySearch.value + '</li>';

    citySearch.value = '';
    
    localStorage.setItem('citySearch', searchHistory.innerHTML);
}, false);

var saved = localStorage.getItem('citySearch');

if (saved) {
    searchHistory.innerHTML = saved;
}