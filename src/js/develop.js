var showLanguage = (function(){
    $('.js-show-language').on('click', function() {
        var $this = $(this);
        var $langList = $('.header__lang-list');
        $this.toggleClass('active');
        $langList.slideToggle(200);
    })
})();

var showVideoPop = (function() {
    var videoBtn = $('.js-show-video');
    var videoLink = 'https://www.youtube.com/embed/0H6Wk5UaI_U';
    var videoPopWrapper = $('.pop-up-wrapper');
    var videoWrapper = $('.pop-up-video__video-wrapper');
    var popUp = $('.pop-up-video');
    var closePop = $('.js-close-pop');


    videoBtn.on('click', function(e) {
        e.preventDefault();
        showPopVideo();
    })

    closePop.on('click', function(e) {
        e.preventDefault();
        closePopVideo();
    })

    function showPopVideo() {
        var windowWidth = $(window).outerWidth();
        var windowHeight = $(window).outerHeight();
        videoPopWrapper.show();
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
            videoPopWrapper.hide();
            videoWrapper.html('');
        }, 550)
    }

})();

$(document).on('click', function(e) {
    var tempTarget = $(e.target);



    if ($(tempTarget).closest('.js-modal-wrapper').length > 0 || $(tempTarget).closest('.js-show-pop').length > 0 || ($(tempTarget[0]).hasClass('js-show-pop'))) {
        // console.log('dont close');
    } else {
        // console.log('close');
        if ($(tempTarget).closest('.js-show-menu').length > 0 || ($(tempTarget[0]).hasClass('js-show-menu'))) {
            return false;
        }
        modalOpenFn();
    }
});
//show menu function
var menu = (function() {
    //cache  DOM
    var $menuBtn = $('.js-show-menu');
    var $menuWrapper = $('.mob-menu__main-wrapper');
    var $menu = $('.mob-menu');
    //bind events

    $menuBtn.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);

        //check other modal open
        //check other modal open
        modalOpenFn();

        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $menu.removeClass('active');
            setTimeout(function() {
                $menuWrapper.hide().removeClass('active');
            }, 305);
        } else {
            $this.addClass('active');
            $menuWrapper.show().addClass('active');
            setTimeout(function() {
                $menu.addClass('active');
            }, 10);
        }

    });
})();
//order

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

    //check other modal open


    //bind events
    $orderBtn.on('click', function(e) {
        e.preventDefault();
        //check other modal open
        modalOpenFn();
        $html.addClass('hidden');
        $('.page-wrapper').addClass('hidden');
        $('.pop-up-wrapper').addClass('active');
        // $('html').animate().scrollTop(0);
        $orderWrapper.show().addClass('active');

        setTimeout(function() {
            $order.addClass('active');
        }, 10);

    });

    $closeOrder.on('click', function(e) {
        e.preventDefault();
        $order.removeClass('active');
        setTimeout(function() {
            $orderWrapper.hide().removeClass('active');
            $('.pop-up-wrapper').removeClass('active');
            $html.removeClass('hidden');
            $('.page-wrapper').removeClass('hidden');
        }, 305);
    });
})();

// check other modal open
// проверяем или есть еще открытые модалки при открытие новой модалке
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
//input file preview
$('.js-input-file').change(function() {
    var filename = $(this).val().split('\\').pop();;
    var filePath = $(this).val();
    // console.log(filename);
    $('.feed-form .file-field').append('<div class="header__order-file-item"><a href="#" class="js-remove-item header__order-remove"></a>' + filename + '<input type="file" class="hidden" name="user_file[]" value=' + filePath + ' /> </div>');
    $(this).val('');
});

//remove preview file
$(document).on('click', '.js-remove-item', function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.closest('.header__order-file-item').remove();

});

/* var styles = [{
    "featureType": "landscape",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 65
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "poi",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 51
    }, {
        "visibility": "simplified"
    }]
}, {
    "featureType": "road.highway",
    "stylers": [{
        "saturation": -100
    }, {
        "visibility": "simplified"
    }]
}, {
    "featureType": "road.arterial",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 30
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "road.local",
    "stylers": [{
        "saturation": -100
    }, {
        "lightness": 40
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "transit",
    "stylers": [{
        "saturation": -100
    }, {
        "visibility": "simplified"
    }]
}, {
    "featureType": "administrative.province",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }, {
        "lightness": -25
    }, {
        "saturation": -100
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "hue": "#000"
    }, {
        "lightness": -25
    }, {
        "saturation": 100
    }]
}, {
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#e1d9d7"
    }]
}];

//Стилизация карты выше

'use strict';
if (!window.console) window.console = {};
if (!window.console.memory) window.console.memory = function() {};
if (!window.console.debug) window.console.debug = function() {};
if (!window.console.error) window.console.error = function() {};
if (!window.console.info) window.console.info = function() {};
if (!window.console.log) window.console.log = function() {};


$(document).on('ready',function(){

    // placeholder
    //-----------------------------------------------------------------------------
    $('input[placeholder], textarea[placeholder]').placeholder();
    $('.js-slider').slick({
        fade: true,
        cssEase: 'linear',
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    // speed: 50,
                    fade: true,
                    adaptiveHeight: true
                    // slidesToShow: 1,
                    // variableWidth: true
                }
            }
        ]
    });
    $('.js-slider-arrow').on('click', function(e) {
        e.preventDefault();
        $('.js-slider').slick($(this).attr('data-slider'));
    });

    ///////////Clients slider//////////

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
                    variableWidth: true
                }
            }
        ]
    });

    $('.js-clients-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log(nextSlide);
        $('.js-readmore').prev('.clients__bottom-slide-text').removeClass('show-full');
        if ($(window).width() < 800) {
            $('.js-readmore').show();
        }
    });

    $('.js-bottom-slider').slick({
        asNavFor: '.js-clients-slider',
        speed: 50,
        fade: true,
        arrows: false,
        pauseOnHover: true,
        adaptiveHeight: true
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
        // console.log(currentSlide.currentSlide);
    });

    //валидация формы заказа проекта https://jqueryvalidation.org/
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");


    $('#orderform').validate({
        ignore: ".ignore",
        rules: {
            name: {
                required: true

            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        messages: {
            name: {
                required: 'Поле должно быть заполнено'
            },
            phone: {
                required: 'Поле должно быть заполнено',
                digits: 'Только цифры'
            },
            email: {
                required: 'Поле должно быть заполнено',
                email: 'Проверьте правильность вашего email'
            }
        }
    });

    $('#consultform').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: 'Поле должно быть заполнено',

            },
            phone: {
                required: 'Поле должно быть заполнено',
                digits: 'Только цифры'
            },
            email: {
                required: 'Поле должно быть заполнено',
                email: 'Проверьте правильность вашего email'
            }
        }
    });
    $('#consultformtop').validate({
        rules: {
            name: {
                required: true,

            },
            phone: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: 'Поле должно быть заполнено',

            },
            phone: {
                required: 'Поле должно быть заполнено'
            },
            email: {
                required: 'Поле должно быть заполнено',
                email: 'Проверьте правильность вашего email'
            }
        },
    });
    //language tab show
    


    $('.js-readmore').click(function() {
        $(this).prev('.clients__bottom-slide-text').addClass('show-full');
        $(this).hide();
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

    function showClientName(index) {

    }
    //google map


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
    var latlng = [
        [55.762553, 37.620266],
        [49.426637, 26.989452],
    ]

    function initMap(town) {
        var townlatlng = town == 'kiev' ? latlng[0] : latlng[1];
        var map;
        var myLatlng = new google.maps.LatLng(townlatlng[0], townlatlng[1]);

        map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(townlatlng[0], townlatlng[1]),
            zoom: 19,
            scrollwheel: false,
        });
        var marker = new google.maps.Marker({
            icon: new google.maps.MarkerImage('img/map-icon.png', new google.maps.Size(47, 47)),
            position: myLatlng,
        });
        marker.setMap(map);
        map.setOptions({
            styles: styles
        });
        google.maps.event.trigger(map, 'resize');
    };
    if ($('#map').length > 0) {
        initMap('kiev');
    }
    // по умолчанию показываем киев
})();









$(document).on('click', '.js-form-subscribe-top', function(e) {
    e.preventDefault();
    $(this).parents('.inner-page-head--blog').toggleClass('showsubscribe');
});

$(document).on('click', '.js-order-form-support-show', function(e) {
    e.preventDefault();
    $('.js-order-form-support').show();
    $('.js-order-form-support-hide').hide();
    return false;
});

$(window).on('load resize', function() {

    // $('.js-height-section').css('height', $(window).outerHeight() - $('header').outerHeight() + 27);
});




$(window).load(function() {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
        default_offset_pct: 0.7
    });
});
 */