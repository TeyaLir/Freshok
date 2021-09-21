$(function(){

  // Каталог продуктов
  $('.product-catalog__title').on('click', function () {
    $('.product-catalog__list').toggleClass('product-catalog__list--active');
    $('.product-catalog__title').toggleClass('product-catalog__title--active');
  });
  
});