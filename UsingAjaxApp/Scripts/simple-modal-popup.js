var clicked;
$(document).ready(function () {
    $(".item").click(function () {
        clicked = this;
        setPrevNextBtn(clicked);
        var address = $(this).attr("src");
        $(".lightbox").fadeIn("slow");
        $("#lightbox").attr("src", address);
    });
    $(".close").click(function () {
        $(".lightbox").fadeOut("slow");
    });
    $(".next").click(function () {
        $('#ajaxBusy').show();
        $.ajax({
            url: "/Home/AjaxSleep",
            type: 'GET',
            success: function () {
                var src = $(clicked).next('img').attr("src");
                clicked = $(clicked).next('img');
                $("#lightbox").attr("src", src);
                $("#lightbox").attr("width", "540");
                setPrevNextBtn(clicked);
                $('#ajaxBusy').hide();
            }
        });

    });
    $(".prev").click(function () {
        $('#ajaxBusy').show();
        $.ajax({
            url: "/Home/AjaxSleep",
            type: 'GET',
            success: function () {
                var src = $(clicked).prev('img').attr("src");
                clicked = $(clicked).prev('img');
                $("#lightbox").attr("src", src);
                $("#lightbox").attr("width", "540");
                setPrevNextBtn(clicked);
                $('#ajaxBusy').hide();
            }
        });
    });
});

function setPrevNextBtn(img) {
    if ($(img).next('img').length == 0) {
        $(".next").css({ "display": "none" });
        $(".prev").css({ "display": "block" });
    } else {
        if ($(img).prev('img').length == 0) {
            $(".prev").css({ "display": "none" });
            $(".next").css({ "display": "block" });
        } else {
            $(".prev").css({ "display": "block" });
            $(".next").css({ "display": "block" });
        }
    }
}
