/* Test adventure game, w/ Eggman */

var area = document.getElementById("area"); /* Text area */


var save = 0;
var questsDisplayed = 0;
var questIndex = save;
var inventory = new Array(); // Start Empty
var bank = 0;

function save() {
  // Save progress
  // TODO: Save quest and Inventory
}

function run() {
  /* Start the game. */
  // TODO: Load save file
  displayMessage(save);
}

var questReadingSpeed = 30;

function choose(id) {
  /* This function called when the player chooses one of the options. */
  var lastQuest = questIndex;
  try {
    quests[questIndex].special[questIndex]();
  } catch (e) {}
  questIndex = quests[questIndex].jumpto[id];

  displayMessage(questIndex);
  document.getElementById("choices_insert").innerHTML = "Choices: ";
  var displayElements = document.getElementsByClassName("display-message");
  displayElements[displayElements.length - 2].style.color = "grey";
}


function displayMessage(questID) {
  /* Display a new message on the screen */
  clearInterval(newInterval) // To be sure
  /* Quest ID is the index of the question displayed */
  for (var i = 0; i < quests.length; i++) {
    // TODO: Implement getQuest instead of this mess.
    if (questID == quests[i].index) {
      area.innerHTML += "<span id='display_" + questsDisplayed + "' class='display-message'></span>"
      window.writtenChars = 0;
      var choices = "<span style='color: #444444;'> Choices: ";
      for (var l = 0; l < quests[i].options.length; l++) {
        choices += "<a href='javascript:choose(" + l + ")'>[" + quests[i].options[l] + "]</a> ";
      }
      choices += "</span>";
      window.currentDisplayPhrase = quests[i].display.split("");
      var newInterval = setInterval(function() {
        if (currentDisplayPhrase[writtenChars] == undefined) {
          document.getElementById("choices_insert").innerHTML = choices;
          clearInterval(newInterval);
          questsDisplayed++;
          area.scrollTo(0, document.body.scrollHeight);
          return;
        };
        document.getElementById("display_" + questsDisplayed).innerHTML += currentDisplayPhrase[writtenChars];
        area.scrollTo(0, document.body.scrollHeight);
        writtenChars++;
      }, questReadingSpeed);
      return;
    }
  }
  console.warn("Quest ID: " + questID + " was not found!");
}

function giveItem(id) {
  var item = loadItem(id);
  if(item === false) return;
  inventory.push(item);
}

function loadItem(id){
  /* Load item (obj) from ID */
  for(var i = 0; i < items.length; i++){
    if(items[i].id == id){
      return items[i];
    }
  }
  return false;
}

function hasItem(id) {
  /* Check if player has a specefic item, boolean */
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id == id) return true;
  }
  return false;
}

function bankBalance(){
  return bank;
}

function addBank(amount){
  /* Add money to bank */
  bank += amount;
}

function getQuest(index) {
  for (var i = 0; i < quests.length; i++) {
    if (quests[i].index == index) {
      return quests[i]
    }
  }
  return false;
}

/* Devtools */

function checkQuests() {
  var missingQuests = new Array();
  for (var i = 0; i < quests.length; i++) {
    for (var l = 0; l < quests[i].jumpto.length; l++) {
      var checkIndex = quests[i].jumpto[l];
      if (getQuest(checkIndex) === false) {
        missingQuests.push({
          index: checkIndex,
          option: quests[i].options[l]
        });
      }
    }
  }
  document.getElementById("insert-missing-quests").innerHTML = "Missing Quests: (" + missingQuests.length + ")";
  for (var i = 0; i < missingQuests.length; i++) {
    document.getElementById("insert-missing-quests").innerHTML += "<br> Option: " + missingQuests[i].option + " INDEX: " + missingQuests[i].index;
  }
}

function checkAvalibleIndex() {
  document.getElementById("insert-missing-quests").innerHTML = "Loading...";
  var avalibleIndex = new Array();
  for (var i = 0; i < 100; i++) avalibleIndex[i] = i;
  for (var i = 0; i < avalibleIndex.length; i++) {
    if (getQuest(i) !== false) avalibleIndex[i] = null;
  }
  document.getElementById("insert-missing-quests").innerHTML = "Avalible index:";
  for (var i = 0; i < avalibleIndex.length; i++) {
    if (avalibleIndex[i] !== null) {
      document.getElementById("insert-missing-quests").innerHTML += "<br>" + i;
    }
  }
}

function disableDev() {
  // TODO: toggle devmode
}

function convert() {
  /* For devtools */
  var input = document.getElementById("input");
  document.getElementById("output").value = JSON.stringify(input.value);
}



run(); // Run on load
