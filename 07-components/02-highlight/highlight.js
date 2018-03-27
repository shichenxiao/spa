$(function() {
  var editor = new Behave({
    textarea: $('#one textarea').get(0),
    replaceTab: true,
    softTabs: true,
    tabSize: 2,
    autoOpen: true,
    overwrite: true,
    autoStrip: true,
    autoIndent: true,
    fence: false
  });

  $('button').click(function() {
  	//console.log("1");
    var $highlight = $('<div><pre class="javascript"></pre></div>'),
      $data = $('#data');
		//console.log("2");
      $highlight.find('pre').html($data.val());
      //console.log('3');
      hljs.highlightBlock($highlight.find('pre').get(0));
      $('#one').append($highlight);
  });
});