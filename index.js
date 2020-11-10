$('#happy-button').on('click',function(){
  $('#right-eye').attr('src', './images/happy-right-eye.png');
  $('#left-eye').attr('src', './images/happy-left-eye.png');
  $('#mouth-image').attr('src', './images/happy-mouth.png');
});
$('#nomal-button').on('click',function(){
  $('#right-eye').attr('src', './images/nomal-right-eye.png');
  $('#left-eye').attr('src', './images/nomal-left-eye.png');
  $('#mouth-image').attr('src', './images/nomal-mouth.png');
});
$('#angry-button').on('click',function(){
  $('#right-eye').attr('src', './images/angry-right-eye.png');
  $('#left-eye').attr('src', './images/angry-left-eye.png');
  $('#mouth-image').attr('src', './images/angry-mouth.png');
});

$(window).on('load',function(){
  randomMoveTimer('#face-image'  , 1000);
  randomMoveTimer('#hair-image'  , 1000);
  randomMoveTimer('#nose-image'  , 1000);
  randomMoveTimer('#mouth-image' , 1000);
  randomMoveTimer('#left-eye'    , 1000);
  randomMoveTimer('#right-eye'   , 1000);
});

function randomMoveTimer(name , time){
  let moveMax=10;
  setInterval(function(){
    randomMove(name , moveMax , moveMax);
  } , time);
};

function randomMove(name , topmax , leftmax){
  $(name).css('top' , getRandomInt( topmax ) + 'px');
  $(name).css('left' , getRandomInt( leftmax ) + 'px');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor( max ) ) - ( max / 2 );
}
