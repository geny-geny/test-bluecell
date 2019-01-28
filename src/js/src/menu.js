var Menu = function(){
	function toggleMenu(event) {
		typeof event !== 'undefined' && event.preventDefault();
		if( $('#menu').hasClass('open') ) {
			closeMenu();
		}
		else {
			openMenu();
		}
  }
  
	function openMenu() {
		$("body").css("overflow", 'hidden');
		$('#menu').addClass('open');
	}

	function closeMenu() {
		$('#menu').removeClass('open');
		$("body").css("overflow", 'visible');
	}

	function start(){
		$('.toggleMenu').on('click', toggleMenu);
	}
	return{
		start:start
	};

}();

$(function(){
	Menu.start();
});