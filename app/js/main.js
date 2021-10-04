$(function(){

  // Каталог продуктов
  $('.product-catalog__btn').on('click', function () {
    $('.product-catalog__list').toggleClass('product-catalog__list--active');
    $('.product-catalog__btn').toggleClass('product-catalog__btn--active');
  });

  // top-slider
  $('.top-slider__slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
  });

  // MixItUp для топовых товаров
  var mixer = mixitup('.goods-top__content');
  
});