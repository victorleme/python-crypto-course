function getURLSlug(words) {
  return words
    .replace(/\s+/, '-')
    .toLowerCase();
}
