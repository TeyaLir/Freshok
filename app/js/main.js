$(function () {

  // Каталог продуктов
  $('.product-catalog__btn').on('click', function () {
    $('.product-catalog__list').slideToggle("300");
    $('.product-catalog__list').toggleClass('product-catalog__list--active');
    $('.product-catalog__btn').toggleClass('product-catalog__btn--active');
  });

  // Корзина
  $('.user-nav__basket, .basket__close').on('click', function () {
    $('.basket__overlay').toggleClass('basket__overlay--active');
  });

  // Поиск на мобильных
  $('.user-nav__item--search').on('click', function () {
    $('.search-mobile').toggleClass('search-mobile--active');
  });

  // Меню бургер
  $('.burger, .menu-mobile__close').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active');
    $('.menu-mobile__overlay').toggleClass('menu-mobile__overlay--active');
  });

  // Слайдер на главной странице
  $('.top-slider__slider').slick({
    prevArrow: '<button class="slick-prev" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-left"></use></svg><span class="sr-only">стрелка влево</span></button>',
    nextArrow: '<button class="slick-next" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-right"></use></svg><span class="sr-only">стрелка вправо</span></button>',
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

  // Числовое поле - прибавление/убавление количества товара в корзине
  $('.basket__num').styler();


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