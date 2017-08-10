require('css/searchResult.less');
var $ = require('jquery');
import { slide } from 'commonSlide';

$('.more-selected').on('click', function(){
	$(this).prev().hasClass('is-open') ? $(this).prev().removeClass('is-open') : $(this).prev().addClass('is-open')
	$(this).prev().hasClass('is-open') ? $(this).find('i').attr('class', 'glyphicon-download glyphicon') : $(this).find('i').attr('class', 'glyphicon-upload glyphicon')
})

$('.stroe-slide').each(function(index, item){
	var nowSlide = new slide($(this))
	nowSlide.init()
})