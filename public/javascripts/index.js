$('input[name="emotion"]:radio').change( function() {
  var radioval = $(this).val();
  $('.right-eye').attr('src'  , './images/emotion/'+radioval+'-right-eye.png');
  $('.left-eye').attr('src'   , './images/emotion/'+radioval+'-left-eye.png');
  $('.mouth-image').attr('src', './images/emotion/'+radioval+'-mouth.png');
});  


$(window).on('load',function(){
  for(let i = 0; i <100; i++){
    let div=
    $('<div class="face">'+
    '</div>');
    let faceImage=$('<img class="face-image"  src="./images/emotion/face.png"></img>');
    let hairImage=$('<img class="hair-image"  src="./images/emotion/hair.png"></img>');
    let leftEyeImage=$('<img class="left-eye"    src="./images/emotion/nomal-left-eye.png"></img>');
    let rightEyeImage=$('<img class="right-eye"   src="./images/emotion/nomal-right-eye.png"></img>');
    let mouthImage=$('<img class="mouth-image" src="./images/emotion/nomal-mouth.png"></img>');
    let noseImage=$('<img class="nose-image"  src="./images/emotion/noma-nose.png"></img>');
  
    div.append(faceImage);
    div.append(hairImage);
    randomMoveTimer(hairImage , 1000);
    div.append(leftEyeImage);
    randomMoveTimer(leftEyeImage , 1000);
    div.append(rightEyeImage);
    randomMoveTimer(rightEyeImage , 1000);
    div.append(mouthImage);
    randomMoveTimer(mouthImage , 1000);
    div.append(noseImage);
    randomMoveTimer(noseImage , 1000);

    /***
    let div=
    $('<div class="face">'+
      '<img class="face-image"  src="./images/emotion/face.png"></img>'+
      '<img class="hair-image"  src="./images/emotion/hair.png"></img>'+
      '<img class="left-eye"    src="./images/emotion/nomal-left-eye.png"></img>'+
      '<img class="right-eye"   src="./images/emotion/nomal-right-eye.png"></img>'+
      '<img class="mouth-image" src="./images/emotion/nomal-mouth.png"></img>'+
      '<img class="nose-image"  src="./images/emotion/noma-nose.png"></img>'+
    '</div>');
***/

    
    randomMoveTimer(div , 1000);

    $('#faces').append(div);
  }
});

function randomMoveTimer(object , time){
  let moveMax=3;
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
