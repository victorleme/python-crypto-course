'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

var getMonthName = function getMonthName(place) {
  return months[place];
};

exports.default = getMonthName;