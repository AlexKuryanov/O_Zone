export const searchFilter = (goods, value) => {
  return goods.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((item) => {
    return item.category === value;
  });
};

export const priceFilter = (goods, minValue, maxValue) => {
  return goods.filter((item) => {
    if (minValue && maxValue) {
      return item.price >= minValue && item.price <= maxValue;
    } else if (minValue && !maxValue) {
      return item.price >= minValue;
    } else if (!minValue && maxValue) {
      return item.price <= maxValue;
    } else {
      return item.price > 0;
    }
  });
};

export const hotsaleFilter = (goods, value) => {
  return goods.filter((item) => {
    if (value) {
      return item.sale === true;
    } else {
      return item;
    }
  });
};
