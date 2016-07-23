const getURLSlug = (words) => (
  words
    .replace(/\s+/g, '-')
    .toLowerCase()
);

export default getURLSlug;
