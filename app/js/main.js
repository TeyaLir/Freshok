$(function () {

  // Плавынй скролл
  $(".header__nav a, .logo, .menu-mobile a, .footer a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // Каталог продуктов
  // $('.product-catalog__btn').on('click', function (e) {
  //   $('.product-catalog__list').slideToggle("300");
  //   $('.product-catalog__list').toggleClass('product-catalog__list--active');
  //   $('.product-catalog__btn').toggleClass('product-catalog__btn--active');
  // });

  // Каталог продуктов, закрытие при щелчке вне открытого списка
  $('.product-catalog__btn').click(function () {
    $('.product-catalog__list').slideToggle("300");
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.product-catalog').length) {
      $('.product-catalog__list').hide();
    }
    e.stopPropagation();
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

  // Фильтры на мобильных версиях (появление / скрытие)
  $('.catalog-content__filters-button, .filters__close').on('click', function () {
    $('.filters').toggleClass('filters--active');
    $('.filters__overlay').toggleClass('filters__overlay--active');
  });

  // Открытие|закрытие пунктов у фильтров на странице Каталог товаров
  $('.filters__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('filters__title--hide');
  });

  // Стилизация выбора сортировки товара (select) на странице Каталог товаров ("По названию", "по 12")
  $('.select-style').styler();

  // Переключение стиля отображения товаров на странице Каталог товаров
  $('.catalog-content__filters-btn').on('click', function () {
    $('.catalog-content__filters-btn').removeClass('catalog-content__filters-btn--active');
    $(this).addClass('catalog-content__filters-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.catalog-content__list').addClass('btn-list');
  });

  $('.button-grid').on('click', function () {
    $('.catalog-content__list').removeClass('btn-list');
  });


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

  function updateInputs(data) {
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


  // Пагинация на странице Каталог товаров
  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  // Слайдер товара на странице Товара
  $('.product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-left"></use></svg><span class="sr-only">стрелка влево</span></button>',
    nextArrow: '<button class="slick-next" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-right"></use></svg><span class="sr-only">стрелка вправо</span></button>',

    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  // Слайдер товара на странице Товара в модальном окне
  $('.modal__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button class="slick-prev" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-left"></use></svg><span class="sr-only">стрелка влево</span></button>',
    nextArrow: '<button class="slick-next" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-right"></use></svg><span class="sr-only">стрелка вправо</span></button>',
  });

  // Звёздный рейтинг на странице Товара
  $('.stars').rateYo({
    starSvg: '<svg><use xlink:href="images/sprite.svg#star-rateyo"></use></svg>',
    starWidth: "16px",
    normalFill: "#f6f6f6",
    ratedFill: "#ffb800",
    spacing: "6px",
    readOnly: true
  });

  // Изменяемый Звёздный рейтинг на странице Товара в заполняемой форме-отзыве
  $('.stars__form').rateYo({
    starSvg: '<svg><use xlink:href="images/sprite.svg#star-rateyo"></use></svg>',
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#ffb800",
    spacing: "6px"
  });

  // Переключение табов на странице Товара
  $('.tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-link').removeClass('tabs__top-link--active');
    $(this).addClass('tabs__top-link--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  // Слайдер сопутствующих товаров на странице Товара
  $('.related__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-left"></use></svg><span class="sr-only">стрелка влево</span></button>',
    nextArrow: '<button class="slick-next" type="button"><svg><use xlink:href="../images/sprite.svg#arrow-right"></use></svg><span class="sr-only">стрелка вправо</span></button>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
    ]
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

// Модальное окно товара на странице Товара
class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = [
      'a[href]',
      'input',
      'button',
      'select',
      'textarea',
      '[tabindex]'
    ];
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest('[data-path]');
        if (clickedElement) {
          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.modal__close')) {
          this.close();
          return;
        }
      }.bind(this));

      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }

        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }

      }.bind(this));

      this.modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
          this.close();
        }
      }.bind(this));
    }
  }

  open() {
    this.previousActiveElement = document.activeElement;

    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();

    this.modalContainer.classList.add('modal-open');
    this.modalContainer.classList.add(this.animation);

    setTimeout(() => {
      this.options.isOpen(this);
      this.modalContainer.classList.add('animate-open');
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');

      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();
    }
  }

  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    if (this.isOpen) {
      focusable[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}

const modal = new Modal({
  isOpen: (modal) => {
    console.log(modal);
    console.log('opened');
  },
  isClose: () => {
    console.log('closed');
  },
});