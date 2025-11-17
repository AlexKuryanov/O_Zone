const getData = () => {
  return fetch(
    'https://o-zone-2c5d4-default-rtdb.firebaseio.com/goods.json'
  ).then((response) => {
    return response.json();
  });
};

export default getData;
