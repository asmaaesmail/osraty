$(document).ready(function () {
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 63) {
            $(".navbar").addClass('fixd-navbar');
        } else {
            $(".navbar").removeClass('fixd-navbar');
        }
    });
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $(".my-nav").toggleClass("back");
        $(".body-overlay").toggleClass("back");
        $("body").toggleClass("body-over");
    });
    $(".body-overlay").click(function () {
        $(this).toggleClass("back");
        $('#nav-icon1').toggleClass('open');
        $(".my-nav").toggleClass("back");
        $("body").toggleClass("body-over");
    });
    
    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 50) {
            $('#header , .third-nav').addClass('active-fixed');
        } else {
            $('#header , .third-nav').removeClass('active-fixed');
        }
    });
});


  window.onload = function () {
		$(".loader").fadeOut(600);
	};
