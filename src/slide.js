var $ = require('jquery');
var hideImg = function(item) {
	this.$element.find('img').css('opacity', '0').removeClass('on');
	this.$element.find('[data-img=' + item + ']').css('opacity', '1').addClass('on');
};
var slide = function(form, images){
	// 提取变量
	console.log(form);
	this.$element = form;
	this.imghtml = [];
	this.dothtml = [];
	this.images = images;
	this.index = 1;
};
slide.prototype.render = function() {
	this.images.forEach(function(item, index){
		this.imghtml.push('<a href=' + item.url + ' target="_blank"><img data-img=' + index + ' style="opacity: 0" src=' + item.pic + '>');
		this.dothtml.push('<a href="" class="dot-item" data-index=' + index + '></a>')
	}.bind(this));
	this.$element.find('.slide-img').html(this.imghtml);
	this.$element.find('.slide-dot').html(this.dothtml);
	return this;
};
slide.prototype.init = function() {
	// 初始化
	var that = this;
	that.$element.on('mouseover', '.dot-item', function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		hideImg.call(that, $(this).attr('data-index'));
		that.index = $(this).attr('data-index');
	});
	this.index = that.index;
	this.$element.find('[data-index=0]').trigger('mouseover');
	return this;
}
slide.prototype.startSlide = function() {
	var slidego = function(){
		setTimeout(function(){
			this.index = this.index >= 3 ? 0 : this.index;
			this.$element.find('[data-index=' + this.index + ']').trigger('mouseover');
			this.index ++;
			slidego();
		}.bind(this), 2500)
	}.bind(this);
	slidego();
}
export { slide }