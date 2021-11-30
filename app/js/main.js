$(function () {

  // Плавынй скролл
  $(".header__nav a, .logo, .menu-mobile a, .footer a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

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
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  // Слайдер брендов
  $('.brands__list').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  // Числовое поле - прибавление/убавление количества товара в корзине
  $('.basket__num').styler();

  // Стилизация выбора сортировки товара на странице Каталог товаров ("По названию", "по 12")
  $('.select-style').styler();


  // Ползунок цены на старнице Каталог товаров
  var $range = $(".filters-price__input-slider"),
    $inputFrom = $(".filter-price__from"),
    $inputTo = $(".filter-price__to"),
    instance,
    min = 0,
    max = 1300,
    from = 0,
    to = 0;

  $('.filters-price__input-slider').ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });

  instance = $range.data("ionRangeSlider");
    
  function updateInputs (data) {
      from = data.from;
      to = data.to;
  
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
  }
  
  $inputFrom.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
  
      instance.update({
          from: val
      });
  
      $(this).prop("value", val);
  
  });
  
  $inputTo.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
  
      instance.update({
          to: val
      });
  
      $(this).prop("value", val);
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