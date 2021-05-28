// tabs
$('.card').on('click', function() {
    let currTub = ($(this).parent().index())
    $('.card').removeClass('card-active')
    $(this).addClass('card-active')

    $('.tab-content').removeClass('active')
    $('.tab-content').eq(currTub).addClass('active')
})

// hamburger
$('.hamburger').on('click', function() {
    $('.head__menu').toggle()
})

$('.menu-close').on('click', function() {
    $('.head__menu').hide()
})

// parallax

let scene = document.getElementById('scene')
let parallaxInstanse = new Parallax(scene)

// slider

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    stopOnLastSlide: false,
    autoplay : {
        delay: 1000
    }
});

// map

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7,
            controls: ['zoomControl', 'geolocationControl']
        });
}

// validate 

$.validator.addMethod('regex', function(value, element, regexp){
    let regExsp = new RegExp(regexp)
    return regExsp.test(value)
}, 'Please check youe input')

$('form').validate({
    rules : {
        firstName : {
            required: true,
            regex: "[A-Za-z]{1,32}"
        },
        phoneNumber : {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
    messages: {
        firstName: 'Введите имя правильно',
        phoneNumber: 'Введите ваш номер'
    }
})