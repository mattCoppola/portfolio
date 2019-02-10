/*jslint node: true */
/*global $ */

'use strict';

///////////////////////////////////////////
//on.click Button Scroll to Sections     //
///////////////////////////////////////////

$('.scroll').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 500, 'linear');
});
