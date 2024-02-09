// global variables
var TMapiBaseUrl = "https://app.ticketmaster.com/discovery/v2/";
var TMapiKey = "apikey=1NDtAAlaAaurhUi3CEDkXhVsZBc8vfgV";
var SubmitBtn = document.querySelector("#submit");

// Search for event using TicketMaster Event search API
function getInterest(location) {
    var radius = document.querySelector("#radius");
    var interest = document.querySelector("#user-categories");

    var api = TMapiBaseUrl + "events.json?keyword=" + interest.textContent + "&geoPoint=" + location.lat + "," + location.lon + "&radius=" + radius.value + "&" + TMapiKey;
    
    fetch(api)
    .then(function(respon) {
        return respon.json();
    })
    .then(function(respon) {
        if (respon.page.totalElements == 0) {
// create modal for no events
            alert("No Events found.");
        }
        else {
            window.location.replace("./scroll.html");

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
function getLocationGeo() {
    var city = document.querySelector("#city");
    var url1 = "https://api.openweathermap.org/geo/1.0/direct?q="; 
    var url2 = "&limit=5&appid=cedfc15c5d9805b46699f39b13fc40c7";

    var apiurl = url1 + city.value + url2;


    fetch(apiurl)
        .then(function (respon) {
            return respon.json();
        })
        .then(function (data) {
            if (!data[0]) {
// create modal for no city                
                alert('No Location not found City you entered!');
            }
            else {
                addLocalStorage(data[0]);
                getInterest(data[0]);
            }
        })
}

if (window.location.href.includes("index.html")) {
    SubmitBtn.addEventListener("click", getLocationGeo);
}