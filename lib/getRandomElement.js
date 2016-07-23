"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRandomElement = function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.default = getRandomElement;