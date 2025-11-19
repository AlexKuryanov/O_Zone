import getData from './getData';
import renderGoods from './renderGoods';
import { categoryFilter, priceFilter, hotsaleFilter } from './filters';

const catalog = () => {
  const catalogBtn = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = catalogModal.querySelectorAll('.catalog li');
  const catalogPriceRange = document.querySelector('.filter-price_range');
  const catalogPriceMin = catalogPriceRange.querySelector('#min');
  const catalogPriceMax = catalogPriceRange.querySelector('#max');
  const checkboxInput = document.getElementById('discount-checkbox');
  const checkboxSpan = document.querySelector('.filter-check_checkmark');

  let isOpen = false;

  catalogBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = 'block';
    } else {
      catalogModal.style.display = '';
    }
  });

  catalogModalItems.forEach((item) => {
    item.addEventListener('click', () => {
      const text = item.textContent;
      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      });
    });
  });

  catalogPriceRange.addEventListener('input', () => {
    const minPrice = Number(catalogPriceMin.value);
    const maxPrice = Number(catalogPriceMax.value);

    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotsaleFilter(data, checkboxInput.checked),
          minPrice,
          maxPrice
        )
      );
    });
  });

  checkboxInput.addEventListener('change', () => {
    const minPrice = Number(catalogPriceMin.value);
    const maxPrice = Number(catalogPriceMax.value);
    if (checkboxInput.checked) {
      checkboxSpan.classList.add('checked');
    } else {
      checkboxSpan.classList.remove('checked');
    }
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotsaleFilter(data, checkboxInput.checked),
          minPrice,
          maxPrice
        )
      );
    });
  });
};
export default catalog;
