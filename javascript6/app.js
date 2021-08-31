$(function(){
  $('.box1').slideDown(1000, function(){
    $('.box1').css({
      'background-color':'blue',
      'width':'200px',
      'height':'100px'
    }).slideUp(1000);
  })
});
