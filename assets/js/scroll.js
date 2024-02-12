// querySelectors for all modal categories
var artsValue = document.querySelector("#arts")
var broadwayValue = document.querySelector("#broadway")
var childrensValue = document.querySelector("#childrens")
var circusValue = document.querySelector("#circus")
var classicalValue = document.querySelector("#classical")
var comedyValue = document.querySelector("#comedy")
var culturalValue = document.querySelector("#cultural")
var danceValue = document.querySelector("#dance")
var espectaculoValue = document.querySelector("#espectaculo")
var fashionValue = document.querySelector("#fashion")
var fineValue = document.querySelector("#fine")
var magicValue = document.querySelector("#magic")
var miscellaneousValue = document.querySelector("#miscellaneous")
var multimediaValue = document.querySelector("#multimedia")
var musicValue = document.querySelector("#music")
var operaValue = document.querySelector("#opera")
var performanceValue = document.querySelector("#performance")
var puppetryValue = document.querySelector("#puppetry")
var spectacularValue = document.querySelector("#spectacular")
var theatreValue = document.querySelector("#theatre")
var varietyValue = document.querySelector("#variety")
var userCategories = document.querySelector("#user-categories")
var userChosen = document.querySelector("#user-chosen")
var categoryChoice = document.querySelector("#category-choice")
var theModal = document.querySelector("#genre-modal")
var outModal = document.querySelector("#out")
var exitModal = document.querySelector("#exit")
var saveModal = document.querySelector("#save")
var outyModal = document.querySelector("#outy")
var xitModal = document.querySelector("#xit")
var okayModal = document.querySelector("#okay")
var homepageButton = document.querySelector("#home")
var scrollButton = document.querySelector("#scroll")
var errorModal = document.querySelector("#error-modal")

// the following are all event listeners for...

// navbar
scrollButton.addEventListener("click", function() {
  window.location.replace("./scroll.html")
})

homepageButton.addEventListener("click", function() {
  window.location.replace("./index.html")
})

// activating/deactivating the modals
categoryChoice.addEventListener("click", function() {
  theModal.classList.add("is-active")
})

outModal.addEventListener("click", function() {
  userCategories.textContent = ""
  userChosen.textContent = ""
  theModal.classList.remove("is-active")
})

exitModal.addEventListener("click", function() {
  userCategories.textContent = ""
  userChosen.textContent = ""
  theModal.classList.remove("is-active")
})

saveModal.addEventListener("click", function() {
  theModal.classList.remove("is-active")
})

outyModal.addEventListener("click", function() {
  errorModal.classList.remove("is-active")
})

xitModal.addEventListener("click", function() {
  errorModal.classList.remove("is-active")
})

okayModal.addEventListener("click", function() {
  errorModal.classList.remove("is-active")
})

// category selection
artsValue.addEventListener("click", function() {
  userCategories.textContent = "All Arts & Theatre"
  userChosen.textContent = "All Arts & Theatre"
})

broadwayValue.addEventListener("click", function() {
  userCategories.textContent = "Broadway"
  userChosen.textContent = "Broadway"
})

childrensValue.addEventListener("click", function() {
  userCategories.textContent = "Children's Theatre"
  userChosen.textContent = "Children's Theatre"
})

circusValue.addEventListener("click", function() {
  userCategories.textContent = "Circus & Specialty Acts"
  userChosen.textContent = "Circus & Specialty Acts"
})

classicalValue.addEventListener("click", function() {
  userCategories.textContent = "Classical"
  userChosen.textContent = "Classical"
})

comedyValue.addEventListener("click", function() {
  userCategories.textContent = "Comedy"
  userChosen.textContent = "Comedy"
})

culturalValue.addEventListener("click", function() {
  userCategories.textContent = "Cultural"
  userChosen.textContent = "Cultural"
})

danceValue.addEventListener("click", function() {
  userCategories.textContent = "Dance"
  userChosen.textContent = "Dance"
})

espectaculoValue.addEventListener("click", function() {
  userCategories.textContent = "Espectaculo"
  userChosen.textContent = "Espectaculo"
})

fashionValue.addEventListener("click", function() {
  userCategories.textContent = "Fashion"
  userChosen.textContent = "Fashion"
})

fineValue.addEventListener("click", function() {
  userCategories.textContent = "Fine Art"
  userChosen.textContent = "Fine Art"
})

magicValue.addEventListener("click", function() {
  userCategories.textContent = "Magic & Illusion"
  userChosen.textContent = "Magic & Illusion"
})

miscellaneousValue.addEventListener("click", function() {
  userCategories.textContent = "Miscellaneous"
  userChosen.textContent = "Miscellaneous"
})

multimediaValue.addEventListener("click", function() {
  userCategories.textContent = "Multimedia"
  userChosen.textContent = "Multimedia"
})

musicValue.addEventListener("click", function() {
  userCategories.textContent = "Music"
  userChosen.textContent = "Music"
})

operaValue.addEventListener("click", function() {
  userCategories.textContent = "Opera"
  userChosen.textContent = "Opera"
})

performanceValue.addEventListener("click", function() {
  userCategories.textContent = "Performance Art"
  userChosen.textContent = "Performance Art"
})

puppetryValue.addEventListener("click", function() {
  userCategories.textContent = "Puppetry"
  userChosen.textContent = "Puppetry"
})

spectacularValue.addEventListener("click", function() {
  userCategories.textContent = "Spectacular"
  userChosen.textContent = "Spectacular"
})

theatreValue.addEventListener("click", function() {
  userCategories.textContent = "Theatre"
  userChosen.textContent = "Theatre"
})

varietyValue.addEventListener("click", function() {
  userCategories.textContent = "Variety"
  userChosen.textContent = "Variety"
})
