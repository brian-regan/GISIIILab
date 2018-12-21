// Based on https://codepen.io/nxworld/pen/OyRrGy

// Function for animated scrolling
$(function() {
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 250, 'linear');
    });
  });