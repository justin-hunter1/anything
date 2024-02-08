// global variables
var apiUrlCategories = "https://www.eventbriteapi.com/v3/categories/?token=E3MQ25YWXD72OMGLCRIX";
var apiUrlSubCategories = "https://www.eventbriteapi.com/v3/subcategories/?token=E3MQ25YWXD72OMGLCRIX";
https://app.ticketmaster.com/discovery/v2/suggest/?apikey=1NDtAAlaAaurhUi3CEDkXhVsZBc8vfgV
var interest = [];


function getInterest() {
    fetch(apiUrlSubCategories)
    .then(function(respon.) {
        return respon.json();
    })
    .then(function(data) {
        console.log();
        if (!data[0]) {
            alert("No information");
        }
        else {
            appendtolist(search);
        }
    })
}

function appendtolist(search) {
    localStorage.setItem("interest", json.stringify(interest));
}

getInterest();