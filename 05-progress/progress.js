var bar;
function progressBar(){
 var pg = document.getElementById('pg');
 bar = setInterval(function(e){
 if(pg.value!=100) pg.value++;
    else pg.value=100;
  },100);
}
function pause(){  
  clearInterval(bar); 
}
function reset(){
  var pg = document.getElementById('pg');
  pg.value=0;
  bar = setInterval(function(e){
    if(pg.value!=100) pg.value++;
    else pg.value=100;
  },100);
}

