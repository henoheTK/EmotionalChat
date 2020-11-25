const imgsPath='../images/'

let name='nomal';
let kind='left-eye';

let imgsInfo={
  face      : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  hair      : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  left_eye  : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  right_eye : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  nose      : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  mouth     : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
};


$('#icon-space').on('mouseleave' , function(){
  $('#trace-image').hide();  
});

$('#icon-space').on('mouseover' , function(){
  $('#trace-image').show();
});

$('#icon-space').on('mousemove' , function(e) {
  let mouseX = e.pageX;
  let mouseY = e.pageY;
  $('#trace-image').css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - ($('#trace-image').width() / 2),
    top: mouseY - ($('#trace-image').height() / 2)
  });
});

$('#icon-space').on('click' , function(e) {
  let mouseX = e.pageX;
  let mouseY = e.pageY;
  let size = $('#size-num').val();
  let rot = $('#rot-num').val();
  console.log(size);
  console.log(mouseX , mouseY);
  let img = $('<img class="set-image " src="' + imgsPath+name + '-' + kind + '.png"></img>');
  img.css('transform' , 'scale(0,0)');
  img.css('transform' , 'rotate('+rot+'deg)');
  
  $('#icon-space').append(img);
  img.css({
    left: mouseX - ($('.set-image').width() / 2),
    top: mouseY - ($('.set-image').height() / 2)
  })
  imgsInfo[kind]={posx : e.pageX , posy : e.pageY , size : size , rot : rot , name : name};
  console.log(imgsInfo['head']);
});

$('.icon-button').on('click' , function(){
  changeSrc($(this).data("partsname"),$(this).parent().data("partskind"));
})


$(window).on('hashchange' , function(){ 
  var page = 'set';
});

$('#make-icon').on('click' , function(){
  $.post(
    `/makeIcon/set`,
    imgsInfo,
    data => {
      console.log(data);
    }
  ); 
})

function changeSrc(newKind,newName){
  kind = newKind;
  src = newName;

  $('#trace-image').attr('src'  , imgsPath + newName + '-' + newKind + '.png');
}