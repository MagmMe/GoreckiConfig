$(document).ready(function () {
    var active_auto = "bmw",
        active_color = "orange",
        default_rim_url = "images/kolpaki_bez_opon" + $(".slider .slick-slide:first-child").find("img").attr("src").split("images/kolpaki")[1];

    // Show rims
    setTimeout(function () {
        $("#left-rim").fadeIn(1000);
        $("#right-rim").fadeIn(1000);
    }, 500)

    // Show arrow
    $("#showArrow").on("click", function () {
        if ($(".top-bar .choosers .arrow").hasClass("hidden")) {
            $(".top-bar .choosers .arrow").removeClass("hidden");
        } else {
            $(".top-bar .choosers .arrow").addClass("hidden");
        }
    });

    // Set default rims
    $("#left-rim").attr("src", default_rim_url).addClass("left-rim-1");
    $("#right-rim").attr("src", default_rim_url).addClass("right-rim-1");
    $(".slider .slick-slide:first-child").addClass("active-rim");

    // Menu
    $(".top-bar .choosers span").on("click", function () {

        if ($(this).data("menu") != 3) {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $("#menu nav.menu-" + $(this).data("menu")).show();
                $(".main-content #main-car").animate({
                    width: "100%",
                }, 1000)
            } else {
                $(".top-bar .choosers span").removeClass("active")
                $(this).addClass("active")
                $("#menu nav").hide();
                $("#menu nav.menu-" + $(this).data("menu")).show();
                $(".main-content #main-car").animate({
                    width: "91.319166667vw",
                }, 1000)
            }
        }

    });

    // Show active slider
    $(".slider-" + $(".top-bar .logos li.active").data("menu")).css("height", "100%");

    // Logos menu
    $(".top-bar .logos li").on("click", function () {
        var img_url = "",
            company = "";

        company = $(this).data("name");
        img_url = "images/logo2/" + company + ".png";

        if (!$(this).hasClass("inactive")) {
            $(".top-bar .logos li").removeClass("active");
            $(this).addClass("active");
            $(".slider-box").css("height", 0);
            $(".slider-" + $(this).data("menu")).css("height", "100%");
            $(".bottom-bar .col-2 img").attr("src", img_url);
        }
    });

    // Set rims
    $(".slider img").on("click", function () {
        var company = 0,
            rim = 0,
            url = "",
            company_image = "",
            rim_name = "",
            rim_colour = "",
            rim_size = "",
            active_car = "",
            that = this,
            isCamaro = false;

        active_car = $("#menu .menu-1 a.active").data("itemName");

        $("#left-rim, #right-rim").fadeOut(500);

        if ($(this).data("name") == "camaro") {
            isCamaro = true;
        }

        setTimeout(function () {
            if (active_car != "bus_scania" && active_car != "truck") {
                if (isCamaro) {
                    $(".bottom-bar .col-2 img").attr("src", "images/logo2/j-tec.png");
                } else {
                    //$(".bottom-bar .col-2 img").attr("src", "images/logo2/van.png");
                }
                company = $(that).parent().data("company");
                rim = $(that).parent().data("rim");
                url = "images/kolpaki_bez_opon" + $(that).attr('src').split("images/kolpaki")[1];
                rim_name = $(that).parent().find(".title-1").text();
                rim_colour = $(that).parent().find(".sub-title").text();
                rim_size = $(that).parent().data("size");

                $("#left-rim").attr("src", url).removeClass().addClass("left-rim-" + rim);
                $("#right-rim").attr("src", url).removeClass().addClass("right-rim-" + rim);
                $(".bottom-bar .col-3 .title").text(rim_name);
                $(".bottom-bar .col-3 .sub-title").text(rim_colour);
                $(".bottom-bar .col-3 .details span").text(rim_size);
                $(".slider .slick-slide").removeClass("active-rim");
                $(that).parent().parent().addClass("active-rim");

                $("#left-rim, #right-rim").fadeIn(500);
            }
        }, 500);
    });

    // Open this rim
    $(".slider .add").on("click", function () {
        var url = "images/kolpaki_bez_opon" + $(this).prev().attr("src").split("images/kolpaki")[1],
            active_background = $("#background-changer li.active").find("img").data("src"),
            auto = active_auto,
            color = $("#menu .menu-2 a.active").data("color"),
            front = $(this).parent().data("front"),
            win = window.open("podglad.html?rim=" + url + "&background=" + active_background + "&auto=" + auto + "&color=" + color + "&front=" + front);
        
        if (win) {
            win.focus();
        } else {
            alert('Proszę zezwolić na otwieranie przez stronę nowej karty.');
        }
    });

    // Background changer
    $("#background-changer li").on("click", function () {
        var url = "";

        url = $(this).find("img").data("src");

        $(".main-content #main-car").css("background-image", "url(" + url + ")");

        $("#background-changer li").removeClass("active");

        $(this).addClass("active");
    });

    // Menu-1
    $("#menu .menu-1 a").on("click", function () {
        var item_name = "",
            img_url = "",
            that = this;
        item_name = $(this).data("itemName");
        img_url = "images/auto/" + item_name + "/" + active_color + ".png";
        $("#main-car .car").fadeOut(500);
        setTimeout(function () {
            $(".main-content #main-car img.img-responsive").attr("src", img_url);
            $("#menu .menu-1 a").removeClass("active");
            $(that).addClass("active");
            $(".main-content #main-car").removeClass();
            $(".main-content #main-car").addClass(item_name);
            active_auto = item_name;
            $("#left-rim").removeAttr("src");
            $("#right-rim").removeAttr("src");
            $(".slider .slick-slide").removeClass("active-rim");
            showMenuActiveRims(item_name);
        }, 500);
        $(this).addClass("active");
        $("#main-car .car").fadeIn(500);
        return false;
    });

    // Menu-2
    $("#menu .menu-2 a").on("click", function () {
        var color = "",
            img_url = "",
            that = this;

        color = $(this).data("color");
        img_url = "images/auto/" + active_auto + "/" + color + ".png";

        $("#main-car .car").fadeOut(500);

        setTimeout(function () {
            $(".main-content #main-car img.img-responsive").attr("src", img_url);
            $("#menu .menu-2 a").removeClass("active");
            $(that).addClass("active");https://mail.google.com/mail/u/0/#inbox
            active_color = color;
        }, 500);

        $("#main-car .car").fadeIn(500);

        return false;
    });


    function showMenuActiveRims (name) {
        var activemenu = $(".top-bar .logos li.active").data("menu"),
            rim_url = "",
            logo_url = "",
            company = "";

        if (name == "bus_scania" || name == "truck") {
            $(".top-bar .logos li").removeClass("active");
            $(".top-bar .logos li[data-menu='5']").addClass("active");
            $(".slider-box").css("height", 0);
            $(".slider-" + 5).css("height", "100%");
            company = $(".top-bar .logos li[data-menu='5']").data("name");
            logo_url = "images/logo2/" + company + ".png";
            $(".bottom-bar .col-2 img").attr("src", logo_url);
            $(".top-bar .logos li").removeClass("inactive");
            $(".top-bar .logos li[data-menu='1']").addClass("inactive");
            $(".top-bar .logos li[data-menu='2']").addClass("inactive");
            $(".top-bar .logos li[data-menu='3']").addClass("inactive");
            $(".top-bar .logos li[data-menu='4']").addClass("inactive");
            $(".top-bar .logos li[data-menu='6']").addClass("inactive");

            // Set default rims
            rim_url = $(".bottom-bar .slider-5 .default").parent().find("img").attr("src");
            $("#left-rim").attr("src", rim_url);
            $("#right-rim").attr("src", rim_url);
            $("#right-rim").removeClass();
            $("#right-rim").addClass("right-rim-1");
            $("#left-rim").removeClass();
            $("#left-rim").addClass("left-rim-1");
            $(".bottom-bar .slider-box").css("height", 0);
            $(".bottom-bar .slider-5").css("height", "100%");
            $(".bottom-bar .slider-5 .default").parent().addClass("active-rim");
            $(".col-3 .title").text("TB01");
            $(".col-3 .sub-title").text("silver & black");
            $(".col-3 .details span").text('22.5"');
        } else if (name == "minibus" || name == "van") {
            $(".top-bar .logos li").removeClass("active");
            $(".top-bar .logos li[data-menu='5']").addClass("active");
            $(".slider-box").css("height", 0);
            $(".slider-" + 5).css("height", "100%");
            company = $(".top-bar .logos li[data-menu='6']").data("name");
            logo_url = "images/logo2/" + company + ".png";
            $(".bottom-bar .col-2 img").attr("src", logo_url);
            $(".top-bar .logos li").removeClass("inactive");
            $(".top-bar .logos li[data-menu='1']").addClass("inactive");
            $(".top-bar .logos li[data-menu='2']").addClass("inactive");
            $(".top-bar .logos li[data-menu='3']").addClass("inactive");
            $(".top-bar .logos li[data-menu='4']").addClass("inactive");
            $(".top-bar .logos li[data-menu='5']").addClass("inactive");

            // Set default rims
            rim_url = $(".bottom-bar .slider-6 .default").parent().find("img").attr("src");
            rim_url = "images/kolpaki_bez_opon/" + rim_url.split("images/kolpaki")[1];
            $("#left-rim").attr("src", rim_url);
            $("#right-rim").attr("src", rim_url);
            $("#right-rim").removeClass();
            $("#right-rim").addClass("right-rim-1");
            $("#left-rim").removeClass();
            $("#left-rim").addClass("left-rim-1");
            $(".bottom-bar .slider-box").css("height", 0);
            $(".bottom-bar .slider-6").css("height", "100%");
            $(".bottom-bar .slider-6 .default").parent().addClass("active-rim");
            $(".col-3 .title").text("Speed VAN");
            $(".col-3 .sub-title").text("silver");
            $(".col-3 .details span").text('15" 16"');
        } else if (name == "bmw") {
            $(".top-bar .logos li").removeClass("active");
            $(".top-bar .logos li[data-menu='1']").addClass("active");
            $(".slider-box").css("height", 0);
            $(".slider-" + 2).css("height", "100%");
            company = $(".top-bar .logos li[data-menu='2']").data("name");
            logo_url = "images/logo2/" + company + ".png";
            $(".bottom-bar .col-2 img").attr("src", logo_url);
            $(".top-bar .logos li").removeClass("inactive");
            $(".top-bar .logos li[data-menu='5']").addClass("inactive");
            $(".top-bar .logos li[data-menu='6']").addClass("inactive");

            default_rim_url = "images/kolpaki_bez_opon/4racing/avalon_carbon_silver_black.png";

            // Set default rims
            $("#left-rim").attr("src", default_rim_url);
            $("#right-rim").attr("src", default_rim_url);
            $("#right-rim").removeClass();
            $("#right-rim").addClass("right-rim-1");
            $("#left-rim").removeClass();
            $("#left-rim").addClass("left-rim-1");
            $(".bottom-bar .slider-box").css("height", 0);
            $(".bottom-bar .slider-2").css("height", "100%");
            $(".slider .slick-slide:first-child").addClass("active-rim");
            $(".col-3 .title").text("AVALON CARBON");
            $(".col-3 .sub-title").text("silver & black");
            $(".col-3 .details span").text('13" 14" 15" 16"');
            $("#main-car .car").fadeIn(1000);
        } else {
            $(".top-bar .logos li").removeClass("active");
            $(".top-bar .logos li[data-menu='1']").addClass("active");
            $(".slider-box").css("height", 0);
            $(".slider-" + 1).css("height", "100%");
            company = $(".top-bar .logos li[data-menu='1']").data("name");
            logo_url = "images/logo2/" + company + ".png";
            $(".bottom-bar .col-2 img").attr("src", logo_url);
            $(".top-bar .logos li").removeClass("inactive");
            $(".top-bar .logos li[data-menu='5']").addClass("inactive");
            $(".top-bar .logos li[data-menu='6']").addClass("inactive");

            default_rim_url = "images/kolpaki_bez_opon/argo/advance.png";

            // Set default rims
            $("#left-rim").attr("src", default_rim_url);
            $("#right-rim").attr("src", default_rim_url);
            $("#right-rim").removeClass();
            $("#right-rim").addClass("right-rim-1");
            $("#left-rim").removeClass();
            $("#left-rim").addClass("left-rim-1");
            $(".bottom-bar .slider-box").css("height", 0);
            $(".bottom-bar .slider-1").css("height", "100%");
            $(".slider .slick-slide:first-child").addClass("active-rim");
            $(".col-3 .title").text("AVALON CARBON");
            $(".col-3 .sub-title").text("silver & black");
            $(".col-3 .details span").text('13" 14" 15" 16"');
        }
    }

    showMenuActiveRims("bmw")
});