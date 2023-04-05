// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/05/2023
// This file contains the JS functions for index.html

"use strict";

// This function converts CAD to GBP and EUR.
function convertCanadianDollars () {
  // Get the user input
  let amountCanadianDollars = parseFloat(document.getElementById("amount-canadian-dollars").value);

  // Perform mathematical equations
  let amountBritishPounds = amountCanadianDollars * 0.60
  let amountEuros = amountCanadianDollars * 0.68

  // Display calculations back to user
  document.getElementById("calculations").innerHTML = "The value of your money in British pounds sterling is £" + amountBritishPounds.toFixed(2) + ", and the the value in Euros is €" + amountEuros.toFixed(2) + "."
}