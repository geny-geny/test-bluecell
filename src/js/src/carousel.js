var JuryCarousel = function(){
	function start(){
		var options = {};
    options.mouseDrag = false;
    options.autoWidth = true;
    options.nav = true;
    options.margin = 0;
    options.loop = true;
    options.center = true;
    

    options.responsive = {};
    options.responsive[0] = {};
    options.responsive[768] = {};
    options.responsive[1300] = {};

    options.responsive[0].center = true;
    options.responsive[768].center = true;
    options.responsive[1300].center = false;

    options.navText = ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"];

    $('.juryCarousel').owlCarousel(options);
	}

	return{
		start:start
	};

}();

$(function(){
	JuryCarousel.start();
});
