var timerButton = function(){
	var cfg = config; //设置配置参数
	enabled= cfg.enabled; //设置按钮状态,true为可用,false为不可用
	timer,                // 定时器对象
    i = cfg.duration,     // 按钮被禁用时长，单位秒
    $btn = $('<input class="timer-button" type="button">');
    
    $(cfg.container).append($btn);
    
    if(cfg.enabled) {
    	enableBtn();
  	} else {
    	disableBtn();
  	}
  	
  	function disableBtn(){
  		enabled = false;
  		$btn.attr('disabled','disabled');
  		setBtnText();
  		
  		timer = window.setInterval(function() {
      		i--;
      		setBtnText();
      		if(i === 0) enableBtn();
    	}, 1000);
  	}
  	
  	function enableBtn(){
  		enabled = true;
    	i = cfg.duration;
    	clearInterval(timer);
    	setBtnText();
    	$btn.removeAttr('disabled');
  	}
  	
  	function setBtnText(){
  		var txt = enabled ? cfg.text : cfg.text + ' (' + i + ' s)';
    	$btn.val(txt);
  	}
  	
  	 $btn.click(function() {
    	$btn.trigger('timer-button-click');
    	if(cfg.enabled) disableBtn();
  	});
  	return $btn; 
}
