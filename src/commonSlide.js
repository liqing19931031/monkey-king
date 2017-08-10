var $ = require('jquery');

var slide = function(form){
	this.$ele = form;
	this.index = 1;
	this.length = this.$ele.children().find('li').length;
	this.ableSlide = true;
	this.$ele.find('ul').css('width', 220 * this.length + 'px')
}

slide.prototype.init = function(){
	var _this = this
	this.$ele.siblings().on('click', function(){
		_this.index = _this.index + +$(this).attr('goIndex')
		_this.index = _this.index <= 0 ? 1 : _this.index
		_this.index = _this.index > _this.length - 1 ? _this.length - 1 : _this.index
		console.log(_this.index)
		if (_this.ableSlide) {
			_this.ableSlide = false
			_this.$ele.children().css('left', -(_this.index - 1) * 220 + 'px')
			setTimeout(function(){
				_this.ableSlide = true
			}, 600)
		}
	})
	return this
}

export { slide }