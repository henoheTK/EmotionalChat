$('#happy-button').on('click',function(){
  $('.right-eye').attr('src', './images/happy-right-eye.png');
  $('.left-eye').attr('src', './images/happy-left-eye.png');
  $('.mouth-image').attr('src', './images/happy-mouth.png');
});
$('#nomal-button').on('click',function(){
  $('.right-eye').attr('src', './images/nomal-right-eye.png');
  $('.left-eye').attr('src', './images/nomal-left-eye.png');
  $('.mouth-image').attr('src', './images/nomal-mouth.png');
});
$('#angry-button').on('click',function(){
  $('.right-eye').attr('src', './images/angry-right-eye.png');
  $('.left-eye').attr('src', './images/angry-left-eye.png');
  $('.mouth-image').attr('src', './images/angry-mouth.png');
});
$( 'input[name="emotion"]:radio' ).change( function() {
  var radioval = $(this).val();
  $('.right-eye').attr('src', './images/'+radioval+'-right-eye.png');
  $('.left-eye').attr('src', './images/'+radioval+'-left-eye.png');
  $('.mouth-image').attr('src', './images/'+radioval+'-mouth.png');
});  


$(window).on('load',function(){
  for(let i = 0; i <100; i++){
    let div=
    $('<div class="face">'+
    '<img class="face-image" src="./images/face.png"></img>'+
      '<img class="hair-image" src="./images/hair.png"></img>'+
      '<img class="left-eye" src="./images/nomal-left-eye.png"></img>'+
      '<img class="right-eye" src="./images/nomal-right-eye.png"></img>'+
      '<img class="mouth-image" src="./images/nomal-mouth.png"></img>'+
      '<img class="nose-image" src="./images/noma-nose.png"></img>'+
    '</div>');

    randomMoveTimer(div , 1000);

    $('#faces').append(div);
  }
});

function randomMoveTimer(object , time){
  let moveMax=5;
  setInterval(function(){
    randomMove(object , moveMax , moveMax);
  } , time);
};

function randomMove(object , topmax , leftmax){
  object.css('top' , getRandomInt( topmax ) + 'px');
  object.css('left' , getRandomInt( leftmax ) + 'px');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor( max ) ) - ( max / 2 );
}
