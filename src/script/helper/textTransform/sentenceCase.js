const sentenceCase = (sentence, transform = 'upper') => {
  const array = sentence.split(' ');

  let words = [];
  array.forEach((w) => {
    let word = w;
    word = transform === 'upper'
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word.charAt(0).toLowerCase() + word.slice(1);

    words.push(word);
  });

  words = words.join(' ');

  return words;
};

export default sentenceCase;
