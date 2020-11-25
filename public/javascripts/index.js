const img_path='../images/'


$('input[name="emotion"]:radio').change( function() {
  var radioval = $(this).val();
  $('.right-eye').attr('src'  , radioval + '-right-eye.png');
  $('.left-eye').attr('src'   , radioval + '-left-eye.png');
  $('.mouth-image').attr('src', radioval + '-mouth.png');
});  


$(window).on('load',function(){
  makeFace(0);
});


function makeFace(faceId){
  const faceParts=[
    'face',
    'hair',
    'left-eye',
    'right-eye',
    'nose',
    'mouth'
  ];
  
  let div=$('<div class = "face"></div>');
  /***
  for(let i = 0; i < faceParts.length; i++){
    let parts = $('<img class = "' + faceParts[i] + '-image" src ="'+"'" + img_path + "'" +'+icon[' + faceId + ']['+"'dataValues'"+']['+"'" + faceParts[i]+'_name' +"'"+ ']+' + "'" +'_' + faceParts[i] + '.png'+ "'" + '" style = '
      +'"width:" + icon[' + faceId + ']["dataValues"]["' + faceParts[i] + '_size"] + "px;" + "height:" + (icon[' + faceId + ']["dataValues"]["' + faceParts[i] + '_size"] * 100) + px;'
      +'transform: translateX("+icon[' + faceId + ']["dataValues"]["' + faceParts[i] + '_posX"] + "px) translateY(" + icon[' + faceId + ']["dataValues"]["' + faceParts[i] + '_posY"] + "px)"></img>');
    randomMoveTimer(parts , 1000);
    div.append(parts);
  }
  ***/


  let faceImage       = $('<img class="face-image"  src="'+img_path+'face.png" style = '
      +'"width:" + icon[0]["dataValues"]["face_size"] + "px;" + "height:" + (icon[0]["dataValues"]["face_size"] * 100) + px;'
      +'transform:translateX("+icon[0]["dataValues"]["face_posX"] + "px) translateY("+icon[0]["dataValues"]["face_posX"] + "px)"></img>');
    let hairImage     = $('<img class="hair-image"  src="'+img_path+'hair.png" style = '
      +'"width:" + icon[0]["dataValues"]["hair_posX"] + "px;" + "height:" + (icon[0]["dataValues"]["hair_size"] * 100) + px;'
      +'transform:translateX("+icon[0]["dataValues"]["hair_posX"] + "px) translateY("+icon[0]["dataValues"]["hair_posX"] + "px)"></img>');
    let leftEyeImage  = $('<img class="left-eye" src="'+img_path+'nomal-left-eye.png" style = '
      +'"width:" + icon[0]["dataValues"]["left-eye_posX"] + "px;" + "height:" + (icon[0]["dataValues"]["left-eye_size"] * 100) + px;'
      +'transform:translateX("+icon[0]["dataValues"]["left-eye_posX"] + "px) translateY("+icon[0]["dataValues"]["left-eye_posX"] + "px)"></img>');
    let rightEyeImage = $('<img class="right-eye" src="'+img_path+'nomal-right-eye.png" style = '
      +'"width:" + icon[0]["dataValues"]["right-eye_posX"] + "px;" + "height:" + (icon[0]["dataValues"]["right-eye_size"] * 100) + px;'
      +'transform:translateX("+icon[0]["dataValues"]["right-eye_posX"] + "px) translateY("+icon[0]["dataValues"]["right-eye_posX"] + "px)"></img>');
    let mouthImage    = $('<img class="mouth-image" src="'+img_path+'nomal-mouth.png" style = '
      +'"width:" + icon[0]["dataValues"]["mouth_posX"] + "px;" + "height:" + (icon[0]["dataValues"]["mouth_size"] * 100) + px;'
      +'transform:translateX("+icon[0]["dataValues"]["mouth_posX"] + "px) translateY("+icon[0]["dataValues"]["mouth_posX"] + "px)"></img>');
    let noseImage     = $('<img class="nose-image"  src="'+img_path+'nomal-nose.png" style = '
      +'"width:" + icon[0]["dataValues"]["nose_posX"] + "px;" + "height:" + (icon[0]["dataValues"]["nose_size"] * 100) + px;'
      +'transform:translateX("+icon[0]["dataValues"]["nose_posX"] + "px) translateY("+icon[0]["dataValues"]["nose_posX"] + "px)"></img>');
  
    div.append( faceImage );
    div.append( hairImage );
    randomMoveTimer(hairImage , 1000);
    div.append( leftEyeImage );
    randomMoveTimer(leftEyeImage , 1000);
    div.append( rightEyeImage );
    randomMoveTimer(rightEyeImage , 1000);
    div.append( mouthImage );
    randomMoveTimer(mouthImage , 1000);
    div.append( noseImage );
    randomMoveTimer(noseImage , 1000);


  randomMoveTimer(div , 1000);

  $('#faces').append( div );
}

function randomMoveTimer(object , time){
  let moveMax=3;
  setInterval(function(){
    randomMove(object , moveMax , moveMax);
  } , time);
};

function randomMove(object , topmax , leftmax){
  object.css('transform' , 'translateX(' + getRandomInt( topmax ) + 'px)');
  object.css('transform' , 'translateY(' + getRandomInt( leftmax ) + 'px)');
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor( max ) ) - ( max / 2 );
}
