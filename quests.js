/*

Template explained:

Index   | This is the index of the question, not directly related
to the actual index in the quests, it's line an ID.
Display | This text will be displayed as an question or text.
Options | You can have an unlimited amount of options, these are the
JumpTo  | This is what happenes when the player clicks the option,
you need as many jumpto's as options.


Template:

,{
  index: INDEX,
  display: "TEXT",
  options: ["OPTION_1", "OPTION_2"],
  jumpto: [JUMPTO_1, JUMPTO_2]
}


*/

var quests = [{
    index: 0,
    display: "Welcome to the Game, let's a go!",
    options: ["Start the game!"],
    jumpto: [1]
  }, {
    index: 1,
    display: "*You woke up*",
    options: ["Stand up", "Go back to sleep"],
    jumpto: [2, 1]
  }, {
    index: 2,
    display: "*You stood up*",
    options: ["Look around", "Go back to sleep", "Masturbate"],
    jumpto: [6, 1, 3]
  }, {
    index: 3,
    display: "It feels good",
    options: ["Stop it", "Get some help"],
    jumpto: [4, 5]
  }, {
    index: 6,
    display: "You see a knife",
    options: ["Grab the knife", "Keep looking"],
    jumpto: [7, 8]
  }, {
    index: 7,
    display: "What do you want to do with the knife?",
    options: ["Put it in your pocket", "Circumsize", "Kill yourself"],
    jumpto: [9, 10, 11]
  }, {
    index: 10,
    diszplay: "oof",
    options: ["..."],
    jumpto: [13]
  }, {
    index: 13,
    display: "...",
    options: ["..."],
    jumpto: [13]
  }, {
    index: 11,
    display: "You are dead, not big surprise",
    options: ["Try again"],
    jumpto: [0]
  }

]
