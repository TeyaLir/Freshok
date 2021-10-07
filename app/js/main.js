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

  // Слайдер брендов
  $('.brands__list').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    // autoplay: true
  });



  // MixItUp
  var containerEl1 = document.querySelector('[data-ref="mixfilter-1"]');
  var containerEl2 = document.querySelector('[data-ref="mixfilter-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  
});