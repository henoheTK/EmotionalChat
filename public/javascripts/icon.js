let src='./images/icon/nomal-left-eye.png';

$('#icon-space').on('mouseleave',function(){
  $('#trace-image').hide();  
});

$('#icon-space').on('mouseover',function(){
  $('#trace-image').show();
});

$('#icon-space').on('mousemove', function(e) {
  let mouseX = e.pageX;
  let mouseY = e.pageY;
  $('#trace-image').css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - ($('#trace-image').width() / 2),
    top: mouseY - ($('#trace-image').height() / 2)
  });
});

$('#icon-space').on('click', function(e) {
  let mouseX = e.pageX;
  let mouseY = e.pageY;
  console.log(mouseX,mouseY);
  let img=$('<img class="set-image" src="'+src+'"></img>');
  $('#icon-space').append(img);
  img.css({
    left: mouseX - ($('.set-image').width() / 2),
    top: mouseY - ($('.set-image').height() / 2)
  })
});

$('.icon-button').on('click',function(){
  changeSrc($(this).data("partsname")+"-"+$(this).parent().data("partskind"));
})

function changeSrc(newSrc){
  src='./images/icon/'+newSrc+'.png';
  $('#trace-image').attr('src'  , src);
}
