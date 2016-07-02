export default const getURLSlug = (words) => (
  words
    .replace(/\s+/g, '-')
    .toLowerCase()
);
