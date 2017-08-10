var $ = require('jquery');

var shopChange = function(form){
	this.$ele = form;
	this.index = 0;
	this.length = this.$ele.children().length
	this.ctl = this.$ele.parents('.goods-content').prev().find('ul')
}

shopChange.prototype.init = function() {
	var that = this
	this.$ele.find('[data-index=' + this.index + ']').css('opacity', 1)
	this.$ele.find('[data-index=' + this.index + ']').css('z-index', 2)
	this.ctl.on('mouseenter', 'li', function(){
		var currentTag = that.$ele.find('.goods-onegroup[data-index=' + $(this).attr('my-index') + ']')
		$(currentTag).css('opacity', 1)
		$(currentTag).css('z-index', 2)
		$(currentTag).siblings().css('opacity', 0)
		$(currentTag).siblings().css('z-index', 1)
	})
}

export { shopChange }