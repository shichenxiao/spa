$(function(){
  $("#btn").mouseover(function(){
    if($("#password").attr("type")=="password"){
      $("#password").attr("type","text");
    }
});
$("#btn").mouseout(function(){
  $("#password").attr("type","password");
})

});
