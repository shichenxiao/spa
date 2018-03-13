
function progressBar(){
  var pg = document.getElementById('pg');
  setInterval(function(e){
    if(pg.value!=100) pg.value++;
    else pg.value=100;
  },100);
}

function reset(){
  var pg=0;
  setInterval(function(e){
    if(pg.value!=100) pg.value++;
    else pg.value = 100;
  },100);
}

