const renderQuery = (search) => {
  const obj = {};
  if (search) {
    const newSearch = search.replace('?', '').split('&');
    newSearch.forEach((el) => {
      const data = el.split('=');
      const [key, value] = data;
      obj[key] = value;
    });
  }
  return obj;
};

export default renderQuery;
