"use strict";

//! START HERE! Then atm.js, then index.js

//! Remember to run npm init to create your Node application!  -DONE*

// **ran npm init and npm start and created package.json**

//TODO: Create variables for account balance & account pin -DONE*

let accountBalance = 4567
const accountPin = 1177

/*module.exports = {
    balance: accountBalance,
    pin: accountPin,
};
*/


//Export these variables -DONE*

function accountBalancePin() {
    return {
    balance: accountBalance,
    pin: accountPin,
    };
};
module.exports = {accountBalancePin};