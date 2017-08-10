var $ = require('jquery');

var setImg = function() {
	this.$element.siblings().find('img').attr('src', this.$element.find('[data-index=' + this.index + ']').children().attr('src'));
}

var goodsSlide = function(form) {
	this.$element = form;
	this.length = this.$element.find('li').length;
	this.index = 0;
	this.ableSlide = true
	this.ul = this.$element.find('ul');
	setImg.call(this)
}

goodsSlide.prototype.init = function() {
	var that = this
	this.ul.css('width', 76 * this.length)
	this.$element.find('[data-index=' + this.index + ']').children().css('border-color', '#f09e01')
	this.$element.find('li').on('mouseenter', function(){
		that.index = $(this).attr('data-index')
		setImg.call(that)
		$(this).siblings().children().css('border-color', '#e5e5e5');
		$(this).children().css('border-color', '#f09e01');
	})
	this.$element.on('click', 'a', function() {
		if (that.ableSlide) {
			that.ableSlide = false
			var left = parseInt(that.ul.css('left').split('p')[0]) + parseInt($(this).attr('togo')) * 304;
			if (left <= 0 && left > -+that.ul.css('width').split('p')[0]) {
				that.ul.css('left', left + 'px')	
			}
			setTimeout(function(){
				that.ableSlide = true
			}, 600)
		}
	})
	return this
}

export { goodsSlide }