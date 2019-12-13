// Scroll to Top
// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(200);    // Fade in the arrow
//     } else {x
//         $('#return-to-top').fadeOut(200);   // Else fade out the arrow
//     }
// });
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
var timer; 
$('.no-loader').bind('mousemove touchmove tap swipeleft swipeup swipedown swiperight', function(e) { 
    if ($(window).scrollTop() < 40) return;
    var circle= $('#return-to-top');
    if (timer) clearTimeout(timer);
    if (!circle.is(":visible")) {
        circle.fadeIn('slow');
    }    
    timer = setTimeout(function(){ circle.fadeOut('slow') }, 2000);
}); 