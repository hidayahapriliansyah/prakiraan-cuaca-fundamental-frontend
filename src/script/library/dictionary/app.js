const id = require('./language/id.json');
const en = require('./language/en.json');

const getDictionary = (_lang) => {
  const data = _lang.toLowerCase() === 'id' ? id : en;

  return data;
};

const getTranslate = (lang, word) => {
  const dictionary = getDictionary(lang);

  return dictionary[word];
};

export default getTranslate;
