const getData = (str) => {
  return fetch(
    `https://o-zone-2c5d4-default-rtdb.firebaseio.com/goods.json?${
      str ? `search = ${str}` : ''
    }`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
