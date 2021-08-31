$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });

  $('.reset').on('click', function(){
    $('ul').children().css('color','black');
  });
});