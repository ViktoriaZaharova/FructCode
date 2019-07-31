$(document).ready(function() {

    // animate
    new WOW().init();

    // slide
    $('.main__slider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        appendDots: $('.slider-nav'),
        appendArrows: $('.slider-nav'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.our-customers__slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        appendArrows: $('.our-customers-arrows'),
        slidesToShow: 5,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.sentence__slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        appendArrows: $('.sentence-arrows'),
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1035,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.project__slider').slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]
    });

    // mask phone
    $("input[name='phone']").mask("8(999) 999-99-99");


    // form mail
    $("form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("form").trigger("reset");
        });
        return false;
    });


});

// modal
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
