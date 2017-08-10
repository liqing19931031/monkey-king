require('css/belt.less');

$(window).scroll(function(e){
	if ($(window).scrollTop() > 900) {
		$('.nav-bar').css('opacity', 1)
		$('.nav-bar').css('display', 'block')
	} else {
		$('.nav-bar').css('opacity', 0)
	}
});
