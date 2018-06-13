jQuery(function($) {
// Slider
    $('.pr-slidesmall').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        infinite: true,
        draggable: true,
	autoplay: true,
  	autoplaySpeed: 5000,
    	speed: 2000,
        prevArrow: "<div class='slarleft'><a class='starleft uk-slidenav uk-slidenav-previous'></a></div>",
        nextArrow: "<div class='slarright'><a class='starleft uk-slidenav uk-slidenav-next'></div>",
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

// Animate for Order button
    $(".button_order").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, "slow");
    });

// Animate for Price block
    $(".price_block").mouseenter(function() {
        $(this).addClass("hover");
        $(this).find(".button_order").animate({}, 100);
    });
    $(".price_block").mouseleave(function() {
        $(this).removeClass("hover");
        $(this).find(".button_order").animate({}, 100);
    });

// Last-modification
    var x = new Date(document.lastModified);
    $("head").append("<meta http-equiv='last-modified' content='" + x + "' />");
});