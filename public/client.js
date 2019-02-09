

///////////////////////////////////////////
//on.click Button Scroll to Sections     //
///////////////////////////////////////////

$('.scroll').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500, 'linear');
});

///////////////////////////////////////////
//on.click Hamburger Icon                //
///////////////////////////////////////////

$('.fa-bars').on('click', function (e) {
    e.preventDefault();
    $('.main-nav li').toggleClass('responsive');
});
