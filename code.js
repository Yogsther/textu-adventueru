/* Test adventure game, w/ Eggman */

var area = document.getElementById("area"); /* Text area */


var save = 0;
var questsDisplayed = 0;
var questIndex = save;

function run(){
  /* Start the game. */
  displayMessage(save)
}

var questReadingSpeed = 1;

function choose(id){
  var lastQuest = questIndex;
  questIndex = quests[questIndex].jumpto[id];
  displayMessage(questIndex);
  document.getElementById("choices_insert").innerHTML = "Choices: ";
  var displayElements = document.getElementsByClassName("display-message");
  displayElements[displayElements.length-2].style.color = "grey";
}


function displayMessage(questID){
  clearInterval(newInterval) // To be sure
  /* Quest ID is the index of the question displayed */
  for(var i = 0; i < quests.length; i++){
    if(questID == quests[i].index){
      area.innerHTML += "<span id='display_" + questsDisplayed +"' class='display-message'></span>"
      window.writtenChars = 0;
      var choices = "<span style='color: #444444;'> Choices: ";
      for(var l = 0; l < quests[i].options.length; l++){
        choices += "<a href='javascript:choose(" + l + ")'>[" + quests[i].options[l] + "]</a> ";
      }
      choices += "</span>";
      window.currentDisplayPhrase = quests[i].display.split("");
      var newInterval = setInterval(function(){
        if(currentDisplayPhrase[writtenChars] == undefined) {
          document.getElementById("choices_insert").innerHTML = choices;
          clearInterval(newInterval);
          questsDisplayed++;
          area.scrollTo(0,document.body.scrollHeight);
          return;
        };
        document.getElementById("display_" + questsDisplayed).innerHTML += currentDisplayPhrase[writtenChars];
        area.scrollTo(0,document.body.scrollHeight);
        writtenChars++;
      }, questReadingSpeed);
      return;
    }
  }
  console.warn("Quest ID: " + questID + " was not found!");
}

function convert(){
  var input = document.getElementById("input");
  document.getElementById("output").value = JSON.stringify(input.value);
}



run(); // Run on load
