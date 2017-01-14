$(function(){
  setTimeout(function(){
  introStuff();
  }, 2000);

  thumbStuff();
  setInterval(function(){
  testStuff();
}, 1000);


});

function testStuff() {
  var randNum = Math.floor(Math.random() * $('.test-unit').length) + 1;

  $('.test-unit').eq(randNum).addClass('active').siblings().removeClass('active');

}


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.projects').offset().top - ($(window).height() / 1.8)){
    setTimeout(function(){
    $('.main-wrapper').addClass('active');
  }, 500);
  }

  if(wScroll > $('.main-wrapper').offset().top - ($(window).height()/ 1.9)) {

    $('.unit').each(function(i){
      setTimeout(function(){
          $('.unit').eq(i).addClass('show');
      }, (200 * i));

    });

  }

});

function introStuff() {
  $('.content').addClass('move');
  setTimeout(function(){
  $('.button').addClass('show-it');
  $('.card').addClass('show-it');
}, 400);

}

function thumbStuff() {
  $('.main-unit').first().addClass('active');
  $('.unit').first().addClass('active');

  $('.unit').on('click', function(){
     var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);
      $('.main-unit').eq(position).addClass('active').siblings().removeClass('active');
      $this.addClass('active').siblings().removeClass('active');
  });
}
