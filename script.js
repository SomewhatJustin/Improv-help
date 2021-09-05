function checkHttps(req, res, next) {
  // protocol check, if http, redirect to https

  if (req.get('X-Forwarded-Proto').indexOf("https") != -1) {
    return next()
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.all('*', checkHttps);

const generateScene = function () {

  // LOCATIONS

  // Store the values
  var locationsInput = document.getElementById("locations").value;

  // Turn it into an array
  locationsList = locationsInput.split(",");

  // Remove spaces
  for (var i = 0; i < locationsList.length; i++) {
    locationsList[i] = locationsList[i].replace('', '');
  }
  // Pick a random value
  randomLocation = locationsList[Math.floor(Math.random() * locationsList.length)];

  // THINGS

  // Store the values
  var thingsInput = document.getElementById("things").value;

  // Turn it into an array
  thingsList = thingsInput.split(",");

  // Remove spaces
  for (var i = 0; i < thingsList.length; i++) {
    thingsList[i] = thingsList[i].replace('', '');
  }
  // Pick a random value
  randomThing = thingsList[Math.floor(Math.random() * thingsList.length)];


  // EMOTIONS

  // Store the values
  var emotionsInput = document.getElementById("emotions").value;

  // Turn it into an array
  emotionsList = emotionsInput.split(",");

  // Remove spaces
  for (var i = 0; i < emotionsList.length; i++) {
    emotionsList[i] = emotionsList[i].replace('', '');
  }
  // Pick a random value
  randomEmotion = emotionsList[Math.floor(Math.random() * emotionsList.length)];




  // SCENE ARRAY AND CREATE PARAGRAPHS
  var randomScene = [randomLocation, randomThing, randomEmotion];
  var sceneParagraph = document.createElement("p");

  for (var i = 0; i < randomScene.length; i++) {
    var thisSetup = document.createTextNode(randomScene[i]);
    sceneParagraph.appendChild(thisSetup);
    sceneParagraph.appendChild(document.createElement("br"))
  }

  // SEND TO DOM
  var resultsDiv = document.getElementById("resultsZone");

  if (resultsDiv.hasChildNodes()) {
    var oldParagraph = resultsDiv.firstChild;
    resultsDiv.replaceChild(sceneParagraph, oldParagraph);
  } else {
    resultsDiv.appendChild(sceneParagraph);
  }

  // CLEANUP
  var textarea = document.querySelector("#locations");
  textarea.value = '';

  var textarea = document.querySelector("#things");
  textarea.value = '';

  var textarea = document.querySelector("#emotions");
  textarea.value = '';

}