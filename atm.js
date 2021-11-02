"use strict";
//TODO: Import necessary values from account.js
function {balance, accountPin}; = require ("accountBalancePin");
console.log("4567");
console.log("1177");

function balance(accountBalance) {
  return accountBalance
  //TODO: Return the customer's acct. balance};
};
function withdraw(num1, num2) {
  return 4567 - 3298; 
};
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
function deposit(num1, num2) {
  return 1269 + 3482;     
};
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
function accountPin(num1) {
  return 1177;
}; 
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.=
  
//TODO: Export these functions
module.exports = {
 getbalance: accountBalance,
 withdraw: subtractFunds,
 deposit: addFunds,
 validatePin: accountPin,
};