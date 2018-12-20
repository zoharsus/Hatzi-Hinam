$(document).ready(function() {
    $("#slick-images").slick({
        rtl: true,
        dots: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 4000,
    });

    $("#email").submit(function(e) {
        e.preventDefault();
        $("#newsletter").hide(1000);
        $("#submitted").show();
    });
});
