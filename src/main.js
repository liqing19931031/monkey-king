require('css/index.less');
var $ = require('jquery');
import { slide } from 'slide';
import { shopChange } from 'contentSlide';

var ableSlide = true;
$('.title-group').on('mouseenter', 'li', function(){
	$(this).parent().find('.open-belt').css('opacity', '0').css('bottom', '0px');
	$(this).find('.open-belt').css('opacity', '1').css('bottom', '-10px');
})

$('.search-input').on('change', 'select', function(){
	$(this).next().attr('placeholder', `请输入您要查找的${$(this).val()}`);
})

$('.turn-block').on('click', function(){
	if (ableSlide) {
		ableSlide = false
		let number = $(this).attr('index')*300;
		let alllength = $('.goods-slide-group').children().length;
		let leftpx = +$('.goods-slide-group').css('left').split('p')[0] + number;
		(leftpx <= 0 && leftpx >= -(alllength - 3) * 300) && $('.goods-slide-group').css('left', leftpx + 'px');
		setTimeout(function(){
		ableSlide = true
	}, 600)
	}
})


var slide1 = new slide($('.plate-midle'))
var shopSlide = new shopChange($('.goods-content--right'))
var shopSlide1 = new shopChange($('.goods-allgroup'))

slide1.render().init().startSlide()
shopSlide.init()
shopSlide1.init()
