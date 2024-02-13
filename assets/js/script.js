// global variables
var TMapiBaseUrl = "https://app.ticketmaster.com/discovery/v2/";
var TMapiKey = "apikey=1NDtAAlaAaurhUi3CEDkXhVsZBc8vfgV";
var SubmitBtn = document.querySelector("#submit");
var errorModal = document.querySelector("#error-modal");
var modalText = document.querySelector("#error-modal-text");
var city = document.querySelector("#city");
var radius = document.querySelector("#radius");
var interest = document.querySelector("#user-categories");
var randomizer = ['arts', 'broadway', 'childrens', 'circus', 'classical', 'comedy', 'cultural', 'dance', 'espectaculo', 'fashion', 'fine', 'magic', 'miscellaneous', 'multimedia', 'music', 'opera', 'performance', 'puppetry', 'spectacular', 'theatre', 'variety'];

// Adding users input to storage to present on scroll.html
function userSelectStorage() {
    // This is to set it as an array for easier use, as well make sure the user type city is in proper case
    var userSelection = [city.value.charAt(0).toUpperCase() + city.value.slice(1).toLowerCase(), radius.value, interest.textContent];
    sessionStorage.setItem("userSelection", JSON.stringify(userSelection));
}

// Search for event using TicketMaster Event search API
function getInterest(location) {
    if (interest.textContent == "Random") {
        interest.textContent = randomizer[getRandomInt(0, randomizer.length)];
    }
console.log(interest.textContent);
    var api = TMapiBaseUrl + "events.json?size=50&keyword=" + interest.textContent + "&geoPoint=" + location.lat + "," + location.lon + "&radius=" + radius.value + "&sort=date,asc&" + TMapiKey;

    fetch(api)
    .then(function(respon) {
        return respon.json();
    })
    .then(function(data) {
        // activate "error" modal to signify that there is no results
        if (data.page.totalElements == 0) {
            modalText.textContent = "Your selection has unfortunately produced no results. :("
            errorModal.classList.add("is-active")
        }
        else {
            addLocalStorage(data);
            userSelectStorage();
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

// generator for random number between 0 and Randomizer array length
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Get GeoLocation for City from user supplied input
// uses openweathermap GEO API to get Lat and Lon of Location
function getLocationGeo() {
    var url1 = "https://api.openweathermap.org/geo/1.0/direct?q="; 
    var url2 = "&limit=5&appid=cedfc15c5d9805b46699f39b13fc40c7";

    var apiurl = url1 + city.value + url2;


    fetch(apiurl)
        .then(function (respon) {
            return respon.json();
        })
        .then(function (data) {
            // activates "error" modal to signify issues wwith users city input
            if (!data[0]) {
                modalText.textContent = "Unable to find the City you are selecting. :("
                errorModal.classList.add("is-active")
            }
            else {
                getInterest(data[0]);
            }
        })
}

SubmitBtn.addEventListener("click", getLocationGeo);
