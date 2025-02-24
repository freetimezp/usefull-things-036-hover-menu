var $cursor = $(".cursor");
var $overlay = $(".project-overlay");

function moveCircle(e) {
    TweenLite.to($cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
};

$(".p-1").hover(function () {
    $(".cursor").css({ "background-image": "url('./assets/images/image-01.jpg')" });
});
$(".p-2").hover(function () {
    $(".cursor").css({ "background-image": "url('./assets/images/image-02.jpg')" });
});
$(".p-3").hover(function () {
    $(".cursor").css({ "background-image": "url('./assets/images/image-03.jpg')" });
});
$(".p-4").hover(function () {
    $(".cursor").css({ "background-image": "url('./assets/images/image-04.jpg')" });
});

var flag = false;

$($overlay).mousemove(function () {
    flag = true;
    TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
    $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function () {
    flag = false;
    TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});














