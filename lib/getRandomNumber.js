"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.default = getRandomNumber;