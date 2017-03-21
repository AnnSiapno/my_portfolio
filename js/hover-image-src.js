$(document).ready(function() {

  $('.imageClick').on('mouseover', function() {
  	var image = $(this).find('img');
  	var hoverURL = image.data('hoverSrc');
  	image.attr('src', hoverURL);
  });


  $('.imageClick').on('mouseleave', function() {
  	var image = $(this).find('img');
  	var originalURL = image.data('originalSrc');
  	image.attr('src', originalURL);
  });


});
