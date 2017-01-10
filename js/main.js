$(function(){
  setTimeout(function(){
  introStuff();
  }, 2000);

});

function introStuff() {
  $('.content').addClass('move');
  setTimeout(function(){
  $('.button').addClass('show-it');
  $('.card').addClass('show-it');
}, 400);

}
