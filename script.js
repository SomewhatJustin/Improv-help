// Convert to arrays
function toArray(longString) {
  return longString.split(",")
}

// Remove spaces
function unSpace(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].replace(' ', '')
  }
  return array
}

// Return random item
function pickItem(cleanArray) {
  randomItem = cleanArray[Math.floor(Math.random() * cleanArray.length)]
  return randomItem
}

function generateSceneTwo() {
  // Get raw inputs
  let rawLocations = document.getElementById("locations").value
  let rawThings = document.getElementById("things").value
  let rawEmotions = document.getElementById("emotions").value


  // Clean up and pick random element
  let randLocation = pickItem(unSpace(toArray(rawLocations)))
  let randEmotion = pickItem(unSpace(toArray(rawEmotions)))
  let randItem = pickItem(unSpace(toArray(rawThings)))

  // Send to DOM
  let resultsZone = document.getElementById("results-zone")
  resultsZone.innerHTML = "<p>Here's the scene.</p><p>You are at <strong>" + randLocation + "</strong> with a <strong>" + randItem + "</strong>, feeling <strong>" + randEmotion + "</strong></p>"
}