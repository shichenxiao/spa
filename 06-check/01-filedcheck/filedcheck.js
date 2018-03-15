$(function(){
  
    $("#wide").blur(function(){
       if($("#wide").val()===""){
         $("#one").html("<br/>输入不能为空！");
         $("#one").css("color","red");
         $("#one").css("font-size","12px");

       }else{
         $("#one").html("");
       }
       
    });
$("#high").blur(function(){
      var reg = /^\d+(\.{0,1}\d+){0,1}$/;
       if($("#high").val()==""){

         $("#two").html("<br/>输入不能为空！");
         $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }else if(!reg.test($('#high').val())){
           $("#two").html("<br/>请输入数值！");
         $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }
       else{
         $("#two").html("");
       } 
    });

  $("#add").attr("disabled","false").css("background","#E0E0E0");
  $("#mutiply").attr("disabled","false").css("background","#E0E0E0")
  $("#btn").click(function(){
     var w = $("#wide").val();
     var h = $("#high").val();
     $("#add").val(w*2+h*2);
     $("#mutiply").val(w*h);


  });
});
