"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

const atm = require("./atm")
 
atm.validatePin();

 function mainMenu() {
  let prompt = require("prompt-sync")();
  let menu = parseInt(prompt("Hello!, What would you like to do today? Please choose a number. 1. - Check balance 2. - Make a withdrawal 3. - Make a deposit 4. -restart 5. - quit"));
  switch(menu){
    case 1: 
    atm.getBalance();
    mainMenu();
    case 2: 
    atm.withdraw()
    mainMenu();
    case 3:
    atm.deposit();
    mainMenu();
    case 4:
    atm.restart();
    mainMenu();
    case 5:
    console.log("Goodbye");
    process.exit()
  }
}

mainMenu()

//   let validated = false
//   while(validated === false) {
//     let userInput = prompt("What is your Pin Code?")
//     validated = validate(userInput)
//   }
// } 
// accessATM

// //  Call accessATM funtion

// function mainMenu() {
  
//   // Set up a main menu.  Prompt users for ATM selection to do the following:
//   // we should keep prompting the user for options until they quit!
//   //Get current balance
//   //Make a deposit
//   //Make a withdrawal
//   //Restart
//   //Quit
//   let complete = false;
//   while(complete === false){
//     let userInput = prompt("Which option? 1 - balance 2 - deposit 3 - withdrawal 4 - restart 5 - quit")
//     switch(userInput){
//       case "1":
//         console.log(getBalance())
//         break;
//         case "2":
//           let depositAmount = prompt("Amount you would you like to deposit?");
//           deposit(depositAmount);
//           break;
//           case "3":
//             let withdrawAmount = prompt("Amount you would you like to withdraw?")
//             withdraw(withdrawAmount);
//     };
//   };
// }
 // Call mainMenu function to start our app!
