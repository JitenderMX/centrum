
// Animation  on Scroll
AOS.init();

// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");
$(window).on('load', function () {
    $('#about-page .nav-logo img, #product-sub-page .nav-logo img, #product-page .nav-logo img').attr('src', 'image/logo-dark.png');
});
$(window).scroll(function () {
    let st = $(window).scrollTop();
    if (st > 0) {
        $(".ah-img").addClass("active");
        $('#about-page .nav-logo img, #product-sub-page .nav-logo img,  #product-page .nav-logo img').attr('src', 'image/logo-light.png');
    } else {
        $(".ah-img").removeClass("active");
        $('#about-page .nav-logo img, #product-sub-page .nav-logo img,  #product-page .nav-logo img').attr('src', 'image/logo-dark.png');
    }
})