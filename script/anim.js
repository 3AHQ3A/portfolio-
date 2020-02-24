$(function () {
  $('span').hover(function () {
    $(this).css({
      'color': 'red',
      'backgroundColor': 'black'
    })
  }, function () {
    $(this).css({
      'color': 'white',
      'backgroundColor': 'black'
    });
  });
});