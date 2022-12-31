const firstCase = (sentence, transform = 'upper') => {
  const words = transform === 'upper'
    ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
    : sentence.charAt(0).toLowerCase() + sentence.slice(1);

  return words;
};

export default firstCase;
