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
       if($("#high").val()==""){

         $("#two").html("<br/>输入不能为空！");
         $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }else{
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
