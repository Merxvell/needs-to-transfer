$(function() {
$(".chan").hover(function() {
    if (!$("#chan-list").hasClass('hide')) {
        $("#chan-list").fadeOut(250).css({
            "display": "inline"
        }).addClass('hide');
    } else {
        $("#chan-list").fadeIn(550).css({
            "display": "inline"
        }).removeClass('hide');

    }
});
$(".music").hover(function() {
    if (!$("#music-list").hasClass('hide')) {
        $("#music-list").fadeOut(250).css({
            "display": "inline"
        }).addClass('hide');
    } else {
        $("#music-list").fadeIn(550).css({
            "display": "inline"
        }).removeClass('hide');
    }
});
$(".resources").hover(function() {
    if (!$("#resource-list").hasClass('hide')) {
        $("#resource-list").fadeOut(250).css({
            "display": "inline"
        }).addClass('hide');
    } else {
        $("#resource-list").fadeIn(550).css({
            "display": "inline"
        }).removeClass('hide');
    }
});
$(".school").hover(function() {
    if (!$("#school-list").hasClass('hide')) {
        $("#school-list").fadeOut(250).css({
            "display": "inline"
        }).addClass('hide');
    } else {
        $("#school-list").fadeIn(550).css({
            "display": "inline"
        }).removeClass('hide');
    }
});
$(".work").hover(function() {
    if (!$("#work-list").hasClass('hide')) {
        $("#work-list").fadeOut(250).css({
            "display": "inline"
        }).addClass('hide');
    } else {
        $("#work-list").fadeIn(550).css({
            "display": "inline"
        }).removeClass('hide');
    }
});
});
