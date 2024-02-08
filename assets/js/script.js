// global variables
var TMapiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"
var TMapiKey = "apikey=1NDtAAlaAaurhUi3CEDkXhVsZBc8vfgV";
var apiUrlEventSearch = "events.json";
var interest = "Theater";
var radius = "25";

function getInterest(location) {
    console.log(location.lat);
    console.log(location.lon);

    api = TMapiBaseUrl + "events.json?keyword=" + interest + "&geoPoint=" + location.lat + "," + location.lon + "&radius=" + radius + "&" + TMapiKey;
    
    console.log(api);

    fetch(api)
    .then(function(respon) {
        return respon.json();
    })
    .then(function(events) {
        console.log(events);
        if (!events[0]) {
            alert("No information");
        }
        else {
            alert("I have events");

        }
    })
}

// Add city search information to local storage
function addLocalStorage(search) {
    console.log(search);
    data = search.name + ";" + search.lat + ";" + search.lon;
    localStorage.setItem("PreviousLocation", data);

}




// Get GeoLocation for City from user supplied input
function getLocationGeo(location) {
    var url1 = "https://api.openweathermap.org/geo/1.0/direct?q="; 
    var url2 = "&limit=5&appid=cedfc15c5d9805b46699f39b13fc40c7";
    var location = "Denver";
    var apiurl = url1 + location + url2;
    console.log(apiurl);
    fetch(apiurl)
        .then(function (respon) {
            return respon.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert('Location not found');
            }
            else {
                addLocalStorage(data[0]);
                getInterest(data[0]);
            }
        })
}

// getInterest();
getLocationGeo();