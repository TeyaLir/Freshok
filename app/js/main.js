$(function(){

  // Каталог продуктов
  $('.product-catalog__title').on('click', function () {
    $('.product-catalog__list').toggleClass('product-catalog__list--active');
    $('.product-catalog__title').toggleClass('product-catalog__title--active');
  });

  // top-slider
  $('.top-slider__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="стрелка вправо"></button>',
    // autoplay: true,
    // autoplaySpeed: 5000,
  });

  // MixItUp для топовых товаров
  var mixer = mixitup('.goods__content');
  
});