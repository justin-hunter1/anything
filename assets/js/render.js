// global variables
var resultsElm = document.querySelector("#result-content");
var eventData = sessionStorage.getItem("Events");
var data = JSON.parse(eventData);
var chosenThree = document.querySelector("#user-selection");
var storedInfo = sessionStorage.getItem("userSelection");
var keyInfo = JSON.parse(storedInfo);


function renderResults() {
  // To let user know what the last input received was.
  chosenThree.textContent = "Search results for " + keyInfo[2] + " within " + keyInfo[1] + " miles of " + keyInfo[0];
  // Creating elements for each event fetched with an image, link and date & time.
  data.forEach(function(object) {
    if (object.dates.status.code !== "cancelled" && object.dates.status.code !== "offsale") {
      var resultCard = document.createElement("div");
      resultCard.className = "card";

      var cardContent = document.createElement("div");
      cardContent.className = "card-content";

      var cardMedia = document.createElement("div");
      cardMedia.className = "media";

      var mediaLeft = document.createElement("div");
      mediaLeft.className = "media-left";

      var figureClass = document.createElement("figure");
      figureClass.className = "image is-48x48";

      var mediaContent = document.createElement("div");
      mediaContent.className = "media-content";

      var pDate = document.createElement("p");
      pDate.className = "subtitle is-6";

      var aName = document.createElement("a");
      aName.className = "title is-4";

      var cardImg = document.createElement("img");

      resultsElm.appendChild(resultCard);
      resultCard.appendChild(cardContent);
      cardContent.appendChild(cardMedia);
      cardMedia.appendChild(mediaLeft);
      mediaLeft.appendChild(figureClass);
      figureClass.appendChild(cardImg);
      cardMedia.appendChild(mediaContent);
      mediaContent.appendChild(pDate);
      mediaContent.appendChild(aName);


      
      cardImg.src = object.images[0].url;
      aName.textContent = object.name;
      pDate.textContent = dayjs(object.dates.start.dateTime).format("ddd, MMM D, YYYY [at] hh:mm a");
      aName.href = object.url;


    //   resultsElm.appendChild(cardImg);
    //   resultsElm.appendChild(pDate);
    //   resultsElm.appendChild(aName);
      }
  });
}

// To help prevent error, this gets events from session storage only if applicable
if (sessionStorage.getItem("Events")) {
  renderResults();
}
