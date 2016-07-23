'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getURLSlug = function getURLSlug(words) {
  return words.replace(/\s+/g, '-').toLowerCase();
};

exports.default = getURLSlug;