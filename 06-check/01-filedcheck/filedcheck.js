$(function(){
    var reg = /^-?(0|[1-9]\d*)(\.\d)?([eE][+-]?\d+)?$/;
    $("#wide").blur(function(){
       if($("#wide").val()===""){
         $("#one").html("<br/>输入不能为空！");
         $("#one").css("color","red");
         $("#one").css("font-size","12px");

       }else if(!reg.test($('#wide').val())){
           $("#one").html("<br/>请输入数值！");
         $("#one").css("color","red");  
          $("#one").css("font-size","12px");

       }else if($("#wide").val()<0){
         $("#one").html("<br/>请输入大于0的数！");
        $("#one").css("color","red");  
          $("#one").css("font-size","12px");

       }


       else{
         $("#one").html("");
       }
       
    });
$("#high").blur(function(){
        
       if($("#high").val()==""){

         $("#two").html("<br/>输入不能为空！");
         $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }else if(!reg.test($('#high').val())){
           $("#two").html("<br/>请输入数值！");
         $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }else if($("#high").val()<0){
         $("#two").html("<br/>请输入大于0的数！");
        $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }
       else{
         $("#two").html("");
       } 
    });

  $("#add").attr("disabled","false").css("background","#E0E0E0");
  $("#mutiply").attr("disabled","false").css("background","#E0E0E0");
  $("#btn").click(function(){
          var reg = /(^\d+(\.{0,1}\d+){0,1})|(e)$/;
     var w = $("#wide").val();
     var h = $("#high").val();
     if((w>0 && w !='' && reg.test(w)) && (h>0 && reg.test(h) && h!='')){
        $("#add").val(w*2+h*2);
        $("#mutiply").val(w*h);

     }else if(w == 'e' && h == 'e'){
       w = 2.7182818;
       h = 2.7182818;
       $("#add").val(2*w+h*2);
       $("#mutiply").val(w*h);
     }
     else if(w == 'e'){
       w = 2.7182818;
       $("#add").val(2*w+h*2);
       $("#mutiply").val(w*h);
     }else if(h == 'e'){
       h = 2.7182818;
       $("#add").val(2*w+h*2);
       $("#mutiply").val(w*h);
     }
     else{
        $("#add").val("");
        $("#mutiply").val("");

     }
     

  });
});
