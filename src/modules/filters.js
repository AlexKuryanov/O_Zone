export const searchFilter = (goods, value) => {
  return goods.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
};
