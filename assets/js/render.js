// global variables
var ResultsElm = document.querySelector("#result-content");
var eventData = sessionStorage.getItem("Events");
var data = JSON.parse(eventData);
var chosenThree = document.querySelector("#user-selection");
var storedInfo = sessionStorage.getItem("userSelection");
var keyInfo = JSON.parse(storedInfo)


function renderResults() {
  console.log(data)
  // To let user know what the last input received was.
  chosenThree.textContent = "Search results for " + keyInfo[2] + " within " + keyInfo[1] + " miles of " + keyInfo[0]
  // Creating elements for each event fetched with an image, link and date & time.
  data.forEach(function(object) {
    if (object.dates.status.code !== "cancelled" && object.dates.status.code !== "offsale") {
      var resultImg = document.createElement("img")
      var resultDate = document.createElement("p")
      var resultName = document.createElement("a")
      resultImg.src = object.images[0].url
      resultName.textContent = object.name
      resultDate.textContent = dayjs(object.dates.start.dateTime).format("ddd, MMM D, YYYY [at] hh:mm a")
      resultName.href = object.url
      ResultsElm.appendChild(resultImg)
      ResultsElm.appendChild(resultDate)
      ResultsElm.appendChild(resultName)
      }
  });
}

// To help prevent error, this gets events from session storage only if applicable
if (sessionStorage.getItem("Events")) {
  renderResults();
}


// Look at possibly getting the API return in order based on date, closest to furthest out