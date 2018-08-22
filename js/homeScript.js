$(function() {
    // 翻书
    var windowWidth = $(window).width();
    var windowH = $(window).height();
    var navHeight = $(".nav-path").height();
    var headerHeight = $(".header").height();
    var currentH = $(".stylish-design").offset().top;
    $("#flipbook").hide();

    function getDesign() {
        var scroll_top = $(window).scrollTop();
        var allHeight;
        if (windowWidth < 786) {
            allHeight = scroll_top + windowH - headerHeight - navHeight;
        } else {
            allHeight = scroll_top + windowH - navHeight;
        }
        if (allHeight >= currentH) {
            designZoom();
        } else {
            $("#flipbook").show();
            $('.stylish-design .pc-show img').attr("src", "");
            $('.stylish-design .mobile-show img').attr("src", "");
            console.log($('.mobile-show img').attr("src"));
        }
    }

    function designZoom() {
        if ($('.design-start').attr("src")) {
            console.log($("#flipbook").css("display"))
            return;
        } else {
            if ($("#flipbook").css("display") == 'block') {
                $("#flipbook").hide();
            }
            $('.design-start').show();
            $(".stylish-design>.commom-header").show();
            $('.stylish-design .pc-show img').attr("src", "images/design/design-index.gif");
            $('.stylish-design .mobile-show img').attr("src", "images/design/design-mobile.gif");
            setTimeout(function() {
                $("#flipbook").show();
                $('.design-start').hide();
                $(".stylish-design>.commom-header").hide();
                var swiper = new Swiper('.my-swiper', {
                    effect: 'fade',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });

            }, 6000);
        }

    }
    $(window).scroll(function() {
        getDesign();

    })
    $(window).resize(function() {
        getDesign();
    });


    // Roaming js
    // 判断窗体大小
    // var WH;
    getWidth();
    $(".main-img").hide();
    $(".active-move").hide();

    function getWidth() {
        var mySwiper = new Swiper('.roaming-intro .swiper-container', {
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        $(".swiper-pagination").on("click", "span", function() {
            var index = $(this).index();
            if (index == 1) {
                executeMove();
            }
        })
    }
    // $(window).resize(function() {
    //     getWidth();
    // });

    function executeMove() {
        $(".main-img").show();
        setTimeout(function() {
            $(".list-2").addClass("active");
            nextMove();
        }, 2000)
    }

    function nextMove() {
        setTimeout(function() {
            $(".list-3").addClass("active");
            $(".inactive-move").hide();
            $(".active-move").show();
        }, 2000)
    }
    /**
     * cloud 动画set
     */


    var cloudIntro = $(".cloud-intro").offset().top;
    $(window).scroll(function() {
        var scroll_top = $(window).scrollTop() + windowH;
        if (scroll_top > cloudIntro) {
            // console.log("123");
        }
    })



    $(".cloud-left").hide();
    $(".cloud-right").hide();

    $(".move-title .span1").click(function() {
        $(".cloud-left").show();
        $(".default-move").hide();
        $(".cloud-right").hide();

    })
    $(".move-title .span2").click(function() {
        $(".cloud-right").show();
        $(".cloud-left").hide();
        $(".default-move").hide();
    })
})