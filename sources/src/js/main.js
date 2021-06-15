$(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-list').slideToggle(350);
    })

    $('.reviews-section__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.reviews-section__arrow-next'),
        prevArrow: $('.reviews-section__arrow-prev'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    })

    $('.calculate-section__cart-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: $('.calculate-section__arrow-next'),
        prevArrow: $('.calculate-section__arrow-prev'),
    })

    $('.questions-section__row-header').on('click', function () {
        questionClick(this)
    })

    questionClick($('.questions-section__row-header').eq(0));

    function questionClick(object) {
        if (!$(object).parent('.questions-section__row').hasClass('active')) {
            $('.questions-section__row-header').parent('.questions-section__row').removeClass('active');
            $('.questions-section__row-header').next(' .questions-section__row-body').slideUp(350);

            $(object).parent('.questions-section__row').addClass('active');
            $(object).next(' .questions-section__row-body').slideToggle(350);
        } else {
            $(object).parent('.questions-section__row').removeClass('active');
            $(object).next(' .questions-section__row-body').slideUp(350);
        }
    }

    $('.open-popup').on('click', function (){
        $('#popup').addClass('active');
    })

    $('.popup-close').on('click', function (){
        $('#popup').removeClass('active');
        $('#popup2').removeClass('active');
    })


    $('.js-mask').mask("+7 (999) 999-99-99");

    $('[data-href]').on('click', function (event){
        event.preventDefault()
        var getLink = $(this).attr("data-href");
        var positionElemY = $(getLink)[0].offsetTop;
        $('html').animate({scrollTop: positionElemY - 150}, 1100);
    })


    $('.reviews-section__slide-inner').magnificPopup({type:'image'});





// забираем utm из адресной строки и пишем в sessionStorage, чтобы отправить их на сервер при form submit
    var utms = parseGET();
// проверяем есть ли utm в адресной строке, если есть то пишем в sessionStorage
    if (utms && Object.keys(utms).length > 0) {
        window.sessionStorage.setItem('utms', JSON.stringify(utms));
    } else {
        // если нет то берем utm из sessionStorage
        utms = JSON.parse(window.sessionStorage.getItem('utms') || "[]");
    }


// забирает utm тэги из адресной строки
    function parseGET(url) {
        var namekey = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

        if (!url || url == '') url = decodeURI(document.location.search);

        if (url.indexOf('?') < 0) return Array();
        url = url.split('?');
        url = url[1];
        var GET = {}, params = [], key = [];

        if (url.indexOf('#') != -1) {
            url = url.substr(0, url.indexOf('#'));
        }

        if (url.indexOf('&') > -1) {
            params = url.split('&');
        } else {
            params[0] = url;
        }

        for (var r = 0; r < params.length; r++) {
            for (var z = 0; z < namekey.length; z++) {
                if (params[r].indexOf(namekey[z] + '=') > -1) {
                    if (params[r].indexOf('=') > -1) {
                        key = params[r].split('=');
                        GET[key[0]] = key[1];
                    }
                }
            }
        }

        return (GET);
    };

// Отправка формы
    $(".ajax-submit").click(function (e) {
        var $form = $(this).closest('form');
        var $requireds = $form.find(':required');
        var formValid = true;

// проверяем объязательные (required) поля этой формы
        $requireds.each(function () {
            $elem = $(this);

// если поле пусто, то ему добавляем класс error
            if (!$elem.val() || !checkInput($elem)) {
                $elem.addClass('error');
                formValid = false;
            }
        });

        if (formValid) {
            // создаем скрытые поля для utm внутрии формы
            if (Object.keys(utms).length === 0) {
                utms['utm_source'] = "https://deluxeservice.kz/";
            }

            // console.log(utms)

            // СЃРѕР·РґР°РµРј СЃРєСЂС‹С‚С‹Рµ РїРѕР»СЏ РґР»СЏ utm РІРЅСѓС‚СЂРёРё С„РѕСЂРјС‹
            for (var key in utms) {
                var input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = utms[key];
                $form[0].appendChild(input);
                console.log(utms)
            }
        } else {
            e.preventDefault();
        }
    });

    $(".form-submit").on("submit", function (event) {
        event.preventDefault();

        const form = new FormData($(this)[0]);

        console.log($(this)[0])

        var valid = true;

        var noChars = ["!", "@", "№", "$", ";", "%", "^", ":", "&", "?", "*", "(", ")",
            "_", "-", "+", "=", "<", ">", "'", ",", "/", "|", "]", "[", "{", "}", "`", "~", "'",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "#"];

        for (var [name, val] of form) {
            console.log(name + " - " + val)
        }

        if (form.has("tel")) {
            var str = form.get("tel")
            str = str.split("-").join("");
            str = str.split("(").join("");
            str = str.split(")").join("");
            str = str.split("+").join("");
            str = str.split(" ").join("");

            if (str.length != 11) {
                $(this).find("input[name='tel']").removeClass("yes-valid")
                $(this).find("input[name='tel']").addClass("no-valid");
                valid = false;
            } else {
                $(this).find("input[name='tel']").removeClass("no-valid")
                $(this).find("input[name='tel']").addClass("yes-valid");
            }

        }

        if (form.has("email")) {
            var str = form.get("email");

            if(str){
                console.log('email - yes')
                if(str.indexOf('@') !== -1){
                    $(this).find("input[name='email']").addClass("yes-valid");
                }else{
                    valid = false;
                    $(this).find("input[name='email']").addClass("no-valid");
                }
            }else{
                valid = false;
                $(this).find("input[name='email']").addClass("no-valid");
            }
        }

        if (form.has("name")) {

            if (!form.get("name")) {
                $(this).find("input[name='name']").addClass("yes-valid");
            }

            var str = form.get("name").split("");
            for (var i = 0; i < str.length; i++) {
                for (var i1 = 0; i1 < noChars.length; i1++) {
                    if (str[i] === noChars[i1]) {
                        $(this).find("input[name='name']").removeClass("yes-valid");
                        $(this).find("input[name='name']").addClass("no-valid");
                        valid = false;
                    } else {
                        console.log("sdfsdf")
                        $(this).find("input[name='name']").removeClass("no-valid");
                        $(this).find("input[name='name']").addClass("yes-valid");
                    }
                }
            }
        }

        console.log('___valid___')
        console.log(valid)


        if (valid){
            var outUtms = '';
            for(var key in utms){
                outUtms += (key + " - " + utms[key] +  "\n");
            }
            form.append("utms", outUtms);

            const xml = new XMLHttpRequest();
            xml.open("POST", "../php/form.php");
            xml.send(form);

            xml.onload = () => {
                if (xml.status != 200){
                }else{
                    window.open("thanks.html", false)
                    // console.log("Все хорошо")
                    $(this).find("input[type='text']").val("")
                }
            }

        }
    });




    $('[data-tab]').on('click', function (){
        clickTab(this)
        $('.calculate-section__cart-slider').slick('setPosition')
    })

    clickTab($('[data-tab]').eq(0))

    function clickTab(object){
        var tab$Index = $(object).attr('data-tab');
        $('.tab-all').removeClass('active')
        $(`.${tab$Index}`).addClass('active')
    }




    $('.form-get').on('click', function (){
        var ss = $('#calculate__form-submit')
        var form = new FormData(ss[0])

        var typeServices = '';
        for (var [name, val] of form) {
            if(name === 'type-cart'){
                typeServices += `${val},`;
            }
        }
        for (var [name, val] of form) {
            console.log(name + ' === ' + val)
        }

        $('#popup2').addClass('active');
    })
});

setTimeout(function(){
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU&onload=getYaMap';
    document.getElementById('map').appendChild(elem);
}, 2000);

function getYaMap(){
    var myMap = new ymaps.Map("map",{center: [43.264440, 76.947567],zoom: 15});
    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.264440, 76.947567]
        },
    }, {
        preset: 'islands#blackStretchyIcon',

        draggable: true
    })
    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([43.264440, 76.947567], {
            iconCaption: 'ВАШ БУХГАЛТЕР - Бугалтерия в Алматы',
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#F54A16'
        }))
}