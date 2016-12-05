$(document).ready(function(){
  $('#about').click(function(){
    $('.showing').not('.bio').toggle('slide', {direction:'down'}, 800).toggleClass('showing');
    $('.bio.top').toggle('slide',{direction:'down'}, 800).toggleClass('showing');
    $('.bio.bottom').toggle('slide', {direction:'up'}, 800).toggleClass('showing');
  });

  $('#contact').click(function(){
    $('.showing').not('.contact').toggle('slide', {direction:'down'}, 800).toggleClass('showing');
    $('.contact').toggle('slide', {direction:'up'}, 800).toggleClass('showing');
  });

  $('#skills').click(function(){
    $('.showing').not('.skills').toggle('slide', {direction:'down'}, 800).toggleClass('showing');
    $('.skills').toggle('slide', {direction:'up'}, 800).toggleClass('showing');
  });

  $('#work').click(function(){
    $('.showing').not('.work').toggle('slide', {direction:'down'}, 800).toggleClass('showing');
    $('.work.top').toggle('slide', {direction: 'down'}, 1000).toggleClass('showing');
    $('.work.bottom').toggle('slide', {direction: 'up'}, 1000).toggleClass('showing');
  });

  $('.title').click(function(){
    $('.showing').toggle('slide', {direction:'down'},800).toggleClass('showing');
  });
});
