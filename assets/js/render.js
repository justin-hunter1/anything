// global variables
var ResultsElm = document.querySelector("#result-content");
var eventData = sessionStorage.getItem("Events");
var data = JSON.parse(eventData);

function renderResults() {
  console.log(data)

  data.forEach(function(object) {
    var resultName = document.createElement("a")
    var resultDate = document.createElement("p")
    resultName.textContent = object.name
    resultName.href = object.url
    resultDate.textContent = ""
    ResultsElm.appendChild(resultName)
    ResultsElm.appendChild(resultDate)
  });
}

if (sessionStorage.getItem("Events")) {
  renderResults();
}

// following additional preferences in order
// possibly access dates.start for date and time
// possibly access dates.status to ignore canceled events
// possibly access images[0] for main image