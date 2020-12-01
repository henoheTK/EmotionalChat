const imgsPath='../images/'

let name='nomal';
let kind='left-eye';

function getName(){
  return name;
}
function setName(newName){
  name=newName;
}
function getKind(){
  return kind;
}
function setKind(newKind){
  kind=newKind
}

let imgsInfo={
  'face'      : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  'hair'      : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  'left-eye'  : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  'right-eye' : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  'nose'      : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
  'mouth'     : {posX : 0 , posY : 0 , sizeX : 1 , sizeY : 1 , rot : 0 , name : 'nomal'},
};

function setImgsInfo(kind,posX,posY,sizeX,sizeY,rot,name){
  imgsInfo[kind]={posX : posX , posY : posY , sizeX : sizeX , sizeY : sizeY , rot : rot , name : name};
}
function getImgsInfoEachAll(kind){
  return imgsInfo[kind];
}
function getImgsInfoEachOne(kind,valName){
  return imgsInfo[kind][valName];
}
function getImgsInfoAllAll(){
  return imgsInfo;
}
function getImgsInfoAllOne(valName){
  let resultArry;
  
  imgsInfo.forEach(info => {
    resultArry.append(info[valName])
  });
  return resultArry;
}

let parts_size={
  'face'      : {max : 500 , min : 100 , now : 500 },
  'hair'      : {max : 500 , min : 100 , now : 500 },
  'left-eye'  : {max : 50  , min : 10  , now : 30  },
  'right-eye' : {max : 50  , min : 10  , now : 30  },
  'mouth'     : {max : 50  , min : 30  , now : 40  },
  'nose'      : {max : 50  , min : 30  , now : 40  }
};

function setPartsNowSize(kind,value){
  parts_size[kind]['now']=value;
}
function getPartsSizes(kind){
  return parts_size[kind];
}
function getPartsMaxSize(kind){
  return parts_size[kind]['max'];
}
function getPartsMinSize(kind){
  return parts_size[kind]['min'];
}
function getPartsNowSize(kind){
  return parts_size[kind]['now'];
}


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
  let img = $('<img class="set-image ' + getKind() + '" src="' + imgsPath + getName() + '_' + getKind() + '.png"></img>');
  img.css('width' , size+'px');
  img.css('height' , size+'px');
  //img.css('transform' , 'rotate('+rot+'deg)');
  //img.css('transform' , '');
  img.css('transform' , 'translate('+(mouseX-img.width() / 2)+'px,'+(mouseY-img.width() / 2)+'px)');

  $('#icon-space').append(img);
  /***
  img.css({
    left: mouseX - ($('.set-image').width() / 2),
    top: mouseY - ($('.set-image').height() / 2)
  })
  ***/
  setImgsInfo(getKind(), e.pageX , e.pageY , size , size , rot , getName());
  console.log(getImgsInfoEachAll(getKind()));
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
    getImgsInfoAllAll(),
    data => {
      console.log(data);
    })
})

function changeSrc(newName,newKind){
  setPartsNowSize(getKind(),$('#size-num').val());

  setKind(newKind);
  setName(newName);

  $('#size-num').val(getPartsNowSize(newKind));
  $('#size-num').attr('max',getPartsMaxSize(newKind));
  $('#size-num').attr('min',getPartsMinSize(newKind));

  $('#trace-image').attr('src'  , imgsPath + newName + '_' + newKind + '.png');
}