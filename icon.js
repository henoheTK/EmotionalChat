let src='./images/icon/nomal-left-eye.png';
let direction='left';
let radioval='nomal'
let item='eye'

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

$('input[name="eye-parts"]:radio').change( function() {
  radioval = $(this).val();
  item='eye';
  changeSrc();
});  
$('input[name="mouth-parts"]:radio').change( function() {
  radioval = $(this).val();
  item='mouth';
  changeSrc();
});  


$('#direction').on('click', function() {
  if(direction==='left'){
    $('#direction').text('左');
    $('#direction').val('right');
    direction='right';
  }
  else{
    $('#direction').text('右');
    $('#direction').val('left');
    direction='left';
  }
  changeSrc();
});

function changeSrc(){
  if(item==='eye'){
    src='./images/icon/'+radioval+'-'+direction+'-'+item+'.png';
  }else{
    src='./images/icon/'+radioval+'-'+item+'.png';  
  }
  $('#trace-image').attr('src'  , src);
}