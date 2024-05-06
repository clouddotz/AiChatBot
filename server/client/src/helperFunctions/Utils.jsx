// Convert to Sentence case function
const sentenceCase = (word) => {
  const input = word.trim().replace(/ /g, "");
  const output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  return output;
};

// Trim out white spaces function
const trimSpaces = (word) => {
  return word.trim().replace(/ /g, "");
};

export { sentenceCase, trimSpaces };
