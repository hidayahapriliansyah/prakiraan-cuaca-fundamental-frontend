function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
    return images;
  });
  return images;
}

const images = importAll(require.context('../../assets/img/weather-icon', false, /\.(png|jpe?g|svg)$/));

export default images;
