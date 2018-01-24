/*

Template explained:

Index   | This is the index of the question, not directly related
to the actual index in the quests, it's line an ID.
Display | This text will be displayed as an question or text.
Options | You can have an unlimited amount of options, these are the
JumpTo  | This is what happenes when the player clicks the option,
you need as many jumpto's as options.
Special | For a pure javascript function, this is usefull to give an Item or
do something custom. Keep in mind if it's not the first option in the "options" you will need to
insert a null before it so it will have the correct index.


Template:

,{
  index: INDEX,
  display: "TEXT",
  options: ["OPTION_1", "OPTION_2"],
  jumpto: [JUMPTO_1, JUMPTO_2],
  special: [null, function(){ giveItem(23) // Any Javascript }]
}


*/

var quests = [{
  index: 0,
  display: "Welcome to Textu Adventuru (Working Title) v.0.2! Hit the \"Start Game\" choice to.. start the game!",
  options: ["Start Game", "... ?"],
  jumpto: [2, 1]
},{
  index: 1,
  display: "Why wont you start the game?? It's a lot of fun!",
  options: ["Back to Main Menu", "Exit the website"],
  jumpto: [2, 0],
  special: [null, function(){
    console.log("Closing website");
  }]
}

]
