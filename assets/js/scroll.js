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
var categoryChoice = document.querySelector("#category-choice")
var theModal = document.querySelector("#genre-modal")
var outModal = document.querySelector("#out")
var exitModal = document.querySelector("#exit")
var saveModal = document.querySelector("#save")
var cancelModal = document.querySelector("#cancel")

categoryChoice.addEventListener("click", function() {
  theModal.classList.add("is-active")
})

outModal.addEventListener("click", function() {
  theModal.classList.remove("is-active")
})

exitModal.addEventListener("click", function() {
  theModal.classList.remove("is-active")
})

saveModal.addEventListener("click", function() {
  theModal.classList.remove("is-active")
})

cancelModal.addEventListener("click", function() {
  theModal.classList.remove("is-active")
})

artsValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "All Arts & Theatre "
  if (!artsValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    artsValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (artsValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    artsValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

broadwayValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Broadway "
  if (!broadwayValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    broadwayValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (broadwayValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    broadwayValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

childrensValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Children's Theatre "
  if (!childrensValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    childrensValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (childrensValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    childrensValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

circusValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Circus & Specialty Acts "
  if (!circusValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    circusValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (circusValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    circusValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

classicalValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Classical "
  if (!classicalValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    classicalValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (classicalValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    classicalValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

comedyValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Comedy "
  if (!comedyValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    comedyValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (comedyValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    comedyValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

culturalValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Cultural "
  if (!culturalValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    culturalValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (culturalValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    culturalValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

danceValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Dance "
  if (!danceValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    danceValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (danceValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    danceValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

espectaculoValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Espectaculo "
  if (!espectaculoValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    espectaculoValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (espectaculoValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    espectaculoValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

fashionValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Fashion "
  if (!fashionValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    fashionValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (fashionValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    fashionValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

fineValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Fine Art "
  if (!fineValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    fineValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (fineValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    fineValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

magicValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Magic & Illusion "
  if (!magicValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    magicValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (magicValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    magicValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

miscellaneousValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Miscellaneous "
  if (!miscellaneousValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    miscellaneousValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (miscellaneousValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    miscellaneousValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

multimediaValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Multimedia "
  if (!multimediaValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    multimediaValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (multimediaValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    multimediaValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

musicValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Music "
  if (!musicValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    musicValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (musicValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    musicValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

operaValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Opera "
  if (!operaValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    operaValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (operaValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    operaValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

performanceValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Performance Art "
  if (!performanceValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    performanceValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (performanceValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    performanceValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

puppetryValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Puppetry "
  if (!puppetryValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    puppetryValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (puppetryValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    puppetryValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

spectacularValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Spectacular "
  if (!spectacularValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    spectacularValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (spectacularValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    spectacularValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

theatreValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Theatre "
  if (!theatreValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    theatreValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (theatreValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    theatreValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})

varietyValue.addEventListener("click", function() {
  userCategories.textContent = userCategories.textContent + "Variety "
  if (!varietyValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    varietyValue.classList.add("has-background-primary-light", "has-text-primary")
    return
  }
  if (varietyValue.classList.contains("has-background-primary-light", "has-text-primary")) {
    varietyValue.classList.remove("has-background-primary-light", "has-text-primary")
    return
  }
})
