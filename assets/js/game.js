let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;


// You can also log multiple values at once like this


let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

console.log(playerName, playerAttack, playerHealth, enemyName);

let fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};

fight();