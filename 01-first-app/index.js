$(function(){
  var $width = $('.width');
  var $height = $('.height');
    $calc.click(function(){
       var width = $width.val();
       var height = $height.val();
      $('.perimeter').val(perimeter(width,height));
      $('.area').val(area(width,height));
    });
    
});

function perimeter(x,y){
  var lenX=(x.split('.').length ===2)?x.split('.')[1].length:0;
  var lenY=(y.split('.').length ===2)?y.split('.')[1].length:0;
  var max = Math.max(lenX,lenY);
  return (x*(10**max)+y*(10**max))*2/(10**max);
}
function area(x,y){
  var lenX=(x.split('.').length ===2)?x.split('.')[1].length:0;
  var lenY=(y.split('.').length ===2)?y.split('.')[1].length:0;
  var max = Math.max(lenX,lenY);
  return (x*(10**max)+y*(10**max))/(10**max);
}


