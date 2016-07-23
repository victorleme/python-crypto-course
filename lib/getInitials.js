'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getInitials = function getInitials(name) {
  return name.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + '.';
  }).join('');
};

exports.default = getInitials;