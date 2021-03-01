$(document).ready(function () {
    var rim = "",
        background = "",
        auto = "",
        color = "",
        auto_url = "",
        front = "";

    rim = getUrlParameter("rim");
    background = getUrlParameter("background");
    auto = getUrlParameter("auto");
    color = getUrlParameter("color");
    front = getUrlParameter("front");

    auto_url = "images/auto/" + auto + "/" + color + ".png";

    // Set actual rim
    $("#preview-rim .rim").attr("src", rim);

    // Set actual background
    $("#preview-rim").css("background-image", "url(" + background + ")");

    // Set actual car
    $("#preview-rim .auto").attr("src", auto_url);

    // Add class to #car
    $("#car").addClass(auto);

    // If front == 1
    if (front == 0) {
        $("#car").addClass("back");
    }

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
});