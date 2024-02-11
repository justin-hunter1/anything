// global variables
var TMapiBaseUrl = "https://app.ticketmaster.com/discovery/v2/";
var TMapiKey = "apikey=1NDtAAlaAaurhUi3CEDkXhVsZBc8vfgV";
var SubmitBtn = document.querySelector("#submit");
var errorModal = document.querySelector("#error-modal")
var modalText = document.querySelector("#error-modal-text")

// Search for event using TicketMaster Event search API
function getInterest(location) {
    var radius = document.querySelector("#radius");
    var interest = document.querySelector("#user-categories");

    var api = TMapiBaseUrl + "events.json?keyword=" + interest.textContent + "&geoPoint=" + location.lat + "," + location.lon + "&radius=" + radius.value + "&" + TMapiKey;
    
    fetch(api)
    .then(function(respon) {
        return respon.json();
    })
    .then(function(data) {
        if (data.page.totalElements == 0) {
            modalText.textContent = "Your selection has unfortunately produced no results"
            errorModal.classList.add("is-active")
        }
        else {
            addLocalStorage(data);
            window.location.assign("./scroll.html");
        }
    })
    .catch(function(err) {
        console.error(err);
    });
}

// Add city search information to local Session Storage
function addLocalStorage(data) {
    Eventsvalue = JSON.stringify(data._embedded.events);
    // JSON.stringify(data.dates)
    sessionStorage.setItem("Events", Eventsvalue);
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
                modalText.textContent = "Unable to find the City you are selecting"
                errorModal.classList.add("is-active")
            }
            else {
                getInterest(data[0]);
            }
        })
}

SubmitBtn.addEventListener("click", getLocationGeo);
