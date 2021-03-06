'use strict';
if (!window.console) window.console = {};
if (!window.console.memory) window.console.memory = function() {};
if (!window.console.debug) window.console.debug = function() {};
if (!window.console.error) window.console.error = function() {};
if (!window.console.info) window.console.info = function() {};
if (!window.console.log) window.console.log = function() {};

(function(){
    $(".twentytwenty-in").twentytwenty({
        default_offset_pct: 0.7
    });

    $('.js-sameHeight').matchHeight();

    $('.tel-mask').mask('+9 (999) 999-99-99 ');
    //vlidation .tel-mask
    $('form').on('focusout', '.tel-mask', function(e){
        var val = $(this).val();
        if (val == '+_ (___) ___-__-__ ') {
            $(this).addClass('error-tel-mask');
            $(this).removeClass('valid-tel-mask');
        } else {
            $(this).addClass('valid-tel-mask');
            $(this).removeClass('error-tel-mask');
        }
    })
    setTimeout(function() {
        $('select').styler();
      }, 100)
    
      $(document).on('click', '.js-tab .tabs-blocks__head ul li span', function(event) {
          event.preventDefault();
          var tabId = $(this).data('tabs');
          $(this).parents('.js-tab').find('.active').removeClass('active');
          $(this).parents('.js-tab').find(tabId).addClass('active');
          $(this).parent().addClass('active');
      });
    
      $('.js-b-slider').slick({
        slidesToShow: 5,
        prevArrow: $('.js-b-prev'),
        nextArrow: $('.js-b-next'),
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            },
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
      });

    }());
var madeSliders = (function(){
    var sliderBig = $('.js-made-slider-b');
    var sliderRight = $('.js-made-slider');
    var filter = $('.made-in__filter li');

    sliderBig.slick({
        infinite: true,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.js-made-prev'),
        nextArrow: $('.js-made-next'),
        swipe: false
    });
    sliderRight.slick({
        infinite: true,
        slidesToShow: 2,
        vertical: true,
        initialSlide: 1,
        prevArrow: $('.js-made-prev'),
        nextArrow: $('.js-made-next'),
        swipe: false
    });

    filter.click(function(){
        var attr = $(this).attr('data-filter');
        switch(attr){
            case 'php':
                goToFirst(attr);
                break;
            case 'bitrix':
                goToFirst(attr);
                break;
            case 'b24':
                goToFirst(attr);
                break;
            case 'design':
                goToFirst(attr);
                break;
        }
    });

    function goToFirst(event){
        $('.js-made-slider-b, .js-made-slider').slick('slickUnfilter');
        $('.js-made-slider-b, .js-made-slider').slick('slickFilter','[data-filter-' + event +']');
        sliderRight.slick('slickGoTo', 1);
        sliderBig.slick('slickGoTo', 0);
    }
})();
var showLanguage = (function(){
    $('.js-show-language').on('click', function() {
        var $this = $(this);
        var $langList = $('.header__lang-list');
        $this.toggleClass('active');
        $langList.slideToggle(200);
    })
    $('body').on('click', function(e) {
		if($(e.target).closest('.js-show-language').length == 0 && $('.js-show-language').hasClass('active')) {
			$('.js-show-language').removeClass('active');
			$('.js-show-language').find('.header__lang-list').slideUp(200);
		}
	})
})();
var videoPop = (function() {
    var videoBtn = $('.js-show-video');
    var videoPopWrapper = $('.pop-up-wrapper');
    var videoWrapper = $('.pop-up-video__video-wrapper');
    var popUp = $('.pop-up-video');
    var closePop = $('.js-close-pop');

    videoBtn.on('click', function(e) {
        e.preventDefault();
        var videoLink = $(this).attr('href');
        showPopVideo(videoLink);
    })

    closePop.on('click', function(e) {
        e.preventDefault();
        closePopVideo();
    })

    function showPopVideo(videoLink) {
        var windowWidth = $(window).outerWidth();
        var windowHeight = $(window).outerHeight();
        videoPopWrapper.addClass('active');
        setTimeout(function() {
            popUp.addClass('active');
        }, 10)
        setTimeout(function() {
            videoWrapper.append('<iframe width="' + (windowWidth - 60) + '" height="' + (windowHeight - 96 - 50) + '" src="' + videoLink + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>')
        }, 500)
    }

    function closePopVideo() {
        popUp.removeClass('active');
        setTimeout(function() {
            videoPopWrapper.removeClass('active')
            videoWrapper.html('');
        }, 550)
    }

})(); 
var popUpMini = (function() {
    var btn = $('.js-pop-mini-open');
    var popup = $('.js-pop-mini')
    var closePop = $('.js-close-mini');
    var html = $('html');
    var overlay = $('.overlay');

  
    btn.click(function(e) {
		e.preventDefault();
		popup.addClass('active');
		html.addClass('hidden');
		overlay.addClass('active');
    })

    closePop.click(function(e) {
        e.preventDefault();
        close();
    })

    overlay.click(function(e) {
        e.preventDefault();
        close();
    })

    function close() {
        popup.removeClass('active');
        html.removeClass('hidden');
        overlay.removeClass('active');
    }

})();

var menu = (function() {
    var $menuBtn = $('.js-show-menu');
    var $menuWrapper = $('.mob-menu__wrap');
    var $menu = $('.mob-menu');
    var $menuDopBtn = $('.js-call-dopmenu');
    var $menuDop = $('.mob-menu__dop');
    var $closeDop = $('.mob-menu__dop-close');

    $(document).on('click touchstart', function () {
        if (!$menuWrapper.is(event.target) && $menuWrapper.has(event.target).length === 0 && !$menuBtn.is(event.target) && $menuBtn.has(event.target).length === 0)  {
            $menuBtn.removeClass('active');
            $menu.removeClass('active');
            $menuDop.removeClass('open');
            setTimeout(function() {
                $menuWrapper.hide().removeClass('active');
            }, 305);
        }
    });

    $menuDopBtn.click(function(e){
        e.preventDefault();
        $menuDop.toggleClass('open');
        $menuWrapper.toggleClass('dop');
    });

    $closeDop.click(function(e){
        e.preventDefault();
        $menuDop.removeClass('open');
    });

    $menuBtn.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);

        modalOpenFn();

        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $menu.removeClass('active');
            setTimeout(function() {
                $menuWrapper.hide().removeClass('active');
            }, 305);
            $menuDop.removeClass('open');
            $menuWrapper.removeClass('dop');

        } else {
            $this.addClass('active');
            $menuWrapper.show().addClass('active');
            setTimeout(function() {
                $menu.addClass('active');
            }, 10);
            $menuWrapper.removeClass('dop');
        }
    });

    function modalOpenFn() {
        if ($('.js-modal-wrapper').hasClass('active')) {
            var targetWrappet = $('.js-modal-wrapper.active');
            targetWrappet.find('.js-modal').removeClass('active');
            setTimeout(function() {
                targetWrappet.hide().removeClass('active');
                if (targetWrappet.hasClass('mob__menu__main-wrapper')) {
                    $('.js-show-menu').removeClass('active');
                }
            }, 350);
        }
    }
})();

var anchors = (function() {
    //bind events
    $(window).on('scroll', function() {
        var windowPosition = $(window).scrollTop() + 200;
        if (($('body').outerHeight() - $(window).scrollTop()) < 1300) {
            $('.anchors__link').removeClass('active');
            $('.anchors__link').eq(sectionPositions.length - 1).addClass('active');
            return false;
        }
        sectionPositions.forEach(function(value, key) {
            if (windowPosition > value && windowPosition < sectionPositions[key + 1]) {
                $('.anchors__link').removeClass('active');
                $('.anchors__link').eq(key).addClass('active');
            }
        });
    });

    $('.js-scroll-anchor').on('click', function(e) {
        e.preventDefault();
        var changePosition = 0;
        if ($.attr(this, 'href') == '#made-in') {
            changePosition = 75;
        }
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - changePosition
        }, 500);
    });

    //anchors function
    var sectionNames = [];
    var sectionPositions = [];

    $('.js-section').each(function() {
        var tempInfo = {};
        // console.log($(this));
        sectionNames.push($(this).attr('id'));
        sectionPositions.push($(this).offset().top);
    });

})();

var order = (function() {
    //cache  DOM
    var $html = $('html');
    var $orderBtn = $('.js-show-order');
    var $orderWrapper = $('.header__order-main-wrapper');
    var $order = $('.header__order-wrapper');
    var $closeOrder = $('.js-order-close');

        $(document).on('click touchstart',  function (event) {
            if (!$orderWrapper.is(event.target) && $orderWrapper.has(event.target).length === 0 && !$orderBtn.is(event.target) && $orderBtn.has(event.target).length === 0 && !$('.ignore').is(event.target) && $('.ignore').has(event.target).length === 0){
                if($order.hasClass('active')){
                    closeOrder();
                }
            }
        });

    $orderBtn.on('click', function(e) {
        e.preventDefault();
        //check other modal open
        modalOpenFn();
        $html.addClass('hidden');
        $('.page-wrapper').addClass('hidden');
        $('.pop-up-wrapper.hed').addClass('active');
        // $('html').animate().scrollTop(0);
        $orderWrapper.show().addClass('active');

        setTimeout(function() {
            $order.addClass('active');
        }, 10);

    });

    $($orderWrapper).on('hide', function(e){
        //$order.removeClass('active');
        $('.pop-up-wrapper.hed').removeClass('active');
        $html.removeClass('hidden');
        $('.page-wrapper').removeClass('hidden');
    });

    $closeOrder.on('click', function(e) {
        e.preventDefault();
        closeOrder();
    });

    function modalOpenFn() {
        if ($('.js-modal-wrapper').hasClass('active')) {
            var targetWrappet = $('.js-modal-wrapper.active');
            targetWrappet.find('.js-modal').removeClass('active');
            setTimeout(function() {
                targetWrappet.hide().removeClass('active');
                if (targetWrappet.hasClass('mob-menu__wrap')) {
                    $('.js-show-menu').removeClass('active');
                }
            }, 350);
        }
    };
    function closeOrder(){
        $order.removeClass('active');
        setTimeout(function() {
            $orderWrapper.hide().removeClass('active');
            $('.pop-up-wrapper.hed').removeClass('active');
            $html.removeClass('hidden');
            $('.page-wrapper').removeClass('hidden');
        }, 305);
    };
})();
var changeInput = (function(){
    $('.js-input-file').change(function() {
        var filename = $(this).val().split('\\').pop();
        var filePath = $(this).val();
        $(this).parent().parent().find('.send-file__name').append('<div class="send-file__item"><a href="#" class="js-remove-item send-file__remove ignore"></a>' + filename + '<input type="file" class="hidden" name="user_file[]" value=' + filePath + ' /> </div>');
        $(this).val('');
    });
    
    $(document).on('click', '.js-remove-item', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().remove();
    });
})();

var blog = (function(){
    var
        showText = $('.js-sub-text'),
        showBtn = $('.js-show-subform'),
        subscribe = $('.js-subform'),
        close = $('.js-sub-close')
    ;

    showBtn.click(function(e){
        e.preventDefault();
        showText.hide();
        subscribe.show();
    });

    close.click(function(e){
        e.preventDefault();
        showText.show();
        subscribe.hide();
    });

})();

var clientsSlider = (function(){
    var clientsCount = $('.js-bottom-slider .clients__bottom-slide').length - 1;

        $('.js-clients-slider').on('init', function() {
            $('.clients__client-info').eq(0).addClass('active')
        });

        $('.js-clients-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            asNavFor: '.js-bottom-slider',
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: false,
            pauseOnHover: true,
            responsive: [{
                    breakpoint: 1180,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true
                    }
                }
            ]
        });
        $('.js-bottom-slider').on('beforeChange', function(nextSlide){
            $('.clients__bottom-slide-text').removeClass('full');
        });

        $('.js-readmore').click(function() {
            $(this).prev('.clients__bottom-slide-text').addClass('full');
            $('.js-bottom-slider').slick('slickCurrentSlide', function(){
                console.log($(this));
            });
            $(this).hide();
        })

        $('.js-bottom-slider').slick({
            asNavFor: '.js-clients-slider',
            speed: 50,
            fade: true,
            arrows: false,
            pauseOnHover: true
        });

        $('.clients__bottom-wrapper').mouseover(function() {
            $('.js-clients-slider').slick('slickPause')
        });
        $('.clients__bottom-wrapper').mouseout(function() {
            $('.js-clients-slider').slick('slickPlay')
        });

        $('.js-clients-arrow').on('click', function(e) {
            e.preventDefault();
            $('.js-clients-slider').slick($(this).attr('data-slider'));
        });

        $('.js-bottom-slider').on('afterChange', function(slick, currentSlide) {
            $('.clients__client-info').removeClass('active');
            $('.clients__client-info').eq(currentSlide.currentSlide).addClass('active');
        });
})();

$(document).on('click', '.js-form-subscribe-top', function(e) {
    e.preventDefault();
    $(this).parents('.inner-page-head--blog').toggleClass('showsubscribe');
});

$(document).on('click', '.js-sup-show', function(e) {
    e.preventDefault();
    $('.js-sup').show();
    $('.js-sup-hide').hide();
});

$('form').each(function(){
    $.validator.addMethod("alphabetsnspace", function(value, element) {
        return this.optional(element) || /^[а-яА-ЯёЁіІa-zA-Z ]*$/.test(value);
    });
    $(this).validate({
        rules: {
            name: {
                required: true,
        
            },
            phone: {
                required: false,
            },
            email: {
                required: true,
                email: true
            },
            vacancy: {
                required: true
            }
        },
        messages: {
            name: {
                required: '',
                alphabetsnspace: false
            },
            phone: {
                required: ''
            },
            email: {
                required: '',
                email: ''
            },
            vacancy: {
                required: ''
            }
        }
    });
});

//contacts section fn
var contacts = (function() {
    //cache DOM
    var $changeTown = $('.js-change-town');
    var $townWrap = $('.contacts__city-info-wrap');
    //bind events
    $changeTown.on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return false;
        }
        var target = $(this).attr('href');
        var town = target.split('#')[1];
        $changeTown.removeClass('active');
        $(this).addClass('active');
        changeTownFn(target);
        //также поменяй город функцией ниже
        initMap(town);
    });
    //functions
    function changeTownFn(target) {
        $townWrap.removeClass('active');
        $(target).addClass('active');
    }
    //plugins
    //функционал табов + смена карты
	var pointsArray = JSON.parse($('#map').data('coorditats'));
	var latlng = new Array;
	latlng = pointsArray;

    function initMap(town) {
        var townlatlng = town == 'kiev' ? latlng[0] : latlng[1];
        var map;
        var myLatlng = new google.maps.LatLng(townlatlng[0], townlatlng[1]);

        map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(townlatlng[0], townlatlng[1]),
            zoom: 15,
            scrollwheel: false,
        });
        var marker = new google.maps.Marker({
            icon: new google.maps.MarkerImage('/img/map-icon.png', new google.maps.Size(47, 47)),
            position: myLatlng,
        });
        marker.setMap(map);
        map.setOptions({
            // styles: styles
        });
        google.maps.event.trigger(map, 'resize');
    };
    if ($('#map').length > 0) {
        initMap('kiev');
    }
    // по умолчанию показываем киев
})();

/* add 03.05.2018 (project-item.html) */
$(document).ready(function() {
    $('.js-screenshots-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-screenshots-slider-min',
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    asNavFor: false,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    });
    $('.js-screenshots-slider-min').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-screenshots-slider',
        prevArrow: '<div class="s-arrow-up"><svg width="46" height="46" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64"><g><path d="M3.352,48.296l28.56-28.328l28.58,28.347c0.397,0.394,0.917,0.59,1.436,0.59c0.52,0,1.04-0.196,1.436-0.59   c0.793-0.787,0.793-2.062,0-2.849l-29.98-29.735c-0.2-0.2-0.494-0.375-0.757-0.475c-0.75-0.282-1.597-0.107-2.166,0.456   L0.479,45.447c-0.793,0.787-0.793,2.062,0,2.849C1.273,49.082,2.558,49.082,3.352,48.296z"/></g></svg></div>',
        nextArrow: '<div class="s-arrow-down"><svg width="46" height="46" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg></div>',
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $(window).on('resize', function(){
        var rotEl = $('.js-screenshots-slider-min');
        var boxRotEl = $('.js-slider-min-box');
        if ($(window).width() >= 760) {
            rotEl.removeClass('remove-el');
            boxRotEl.removeClass('remove-el');
        } else {
            rotEl.addClass('remove-el');
            boxRotEl.addClass('remove-el');
        }
    });
});
/* END add 03.05.2018 (project-item.html) */