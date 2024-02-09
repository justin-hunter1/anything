// global variables
var TMapiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"
var TMapiKey = "apikey=1NDtAAlaAaurhUi3CEDkXhVsZBc8vfgV";
var interest = "Theater";
var city = document.querySelector("#city");
var radius = document.querySelector("#radius");
var interest = document.querySelector("#genre");
var SubmitBtn = document.querySelector("#submit");



// Search for event using TicketMaster Event search API
function getInterest(location) {

    var api = TMapiBaseUrl + "events.json?keyword=" + interest + "&geoPoint=" + location.lat + "," + location.lon + "&radius=" + radius + "&" + TMapiKey;
    
    fetch(api)
    .then(function(respon) {
        return respon.json();
    })
    .then(function(respon) {
        if (respon.page.number <= 0) {
            alert("No information");
        }
        else {
            alert("I have events");

        }
    })
    .catch(function(err) {
        console.error(err);
    });
}

// Add city search information to local storage
function addLocalStorage(search) {
    data = search.name + ";" + search.lat + ";" + search.lon;
    localStorage.setItem("PreviousLocation", data);
}


// Get GeoLocation for City from user supplied input
// uses openweathermap GEO API to get Lat and Lon of Location
function getLocationGeo(city) {
    var url1 = "https://api.openweathermap.org/geo/1.0/direct?q="; 
    var url2 = "&limit=5&appid=cedfc15c5d9805b46699f39b13fc40c7";
    var city = "Denver";
    var apiurl = url1 + city + url2;
    console.log(apiurl);
    fetch(apiurl)
        .then(function (respon) {
            return respon.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert('No Location not found City you entered!');
            }
            else {
                addLocalStorage(data[0]);
                getInterest(data[0]);
            }
        })
}

getLocationGeo(city);