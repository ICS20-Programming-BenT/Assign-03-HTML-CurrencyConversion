// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/05/2023
// This file contains the JS functions for index.html

"use strict";

// This function converts CAD to GBP and EUR.
function convertCanadianDollars () {
  // Get the user input in Canadian Dollars.
  let amountCanadianDollars = parseFloat(document.getElementById("amount-canadian-dollars").value);

  // Perform mathematical equations to convert to pounds and euros with conversion rates
  let amountBritishPounds = amountCanadianDollars * 0.5967
  let amountEuros = amountCanadianDollars * 0.6791

  // Display converted amounts in GBP and EUR back to user
  document.getElementById("calculations").innerHTML = "The value of your money in British pounds sterling is £" + amountBritishPounds.toFixed(2) + ", and the value in Euros is €" + amountEuros.toFixed(2) + "."
}