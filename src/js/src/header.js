var Header = function(){
	function scrollHeader(){
		var $header = $("#header");
		var safeTop = 200;
		var hiddenTop = 160;

		$(window).scroll(function (e) {
			if ($(this).scrollTop() > hiddenTop && $(this).scrollTop() < safeTop){
				$header.addClass("hidden");
			} else{
				$header.removeClass("hidden");
      }
      
			if ($(this).scrollTop() > safeTop){
				$header.addClass("scroll");
			} else{
				$header.removeClass("scroll");
			}
		});
	}
	
	function start(){
		scrollHeader();
	}
	
	return{
		start:start
	}
}();

$(function(){
	Header.start();
});