var $ = require('jquery');

var order = function (form, isladder) {
	+isladder === 4 && $('.now-price').html('电话联系');
	+isladder === 4 && $('.model-num').hide(); 
	this.$ele = form
	this.isladder = +isladder === 1 ? true : false // 判断是否为阶梯模式
	this.types = this.$ele.find('.goods-type') // 类型dom
	this.models = this.$ele.find('.model-box') // 型号dom
	this.$ladderPrice = $('.ladder-price li')
	this.$ladderNum = $('.ladder-number li')
	this.ladderNum = [] // 阶梯数量缓存
	this.ladderPrice = []
	this.goods_norms = [] // 做id拼接缓存
	this.allNumber = 0
	this.types.each(function(index, item){ // 类型预处理 
		$($(item).find('li')[0]).find('img').css('border-color', '#f09e01');
		$($(item).find('li')[0]).css('color', '#ff6d33');
		this.goods_norms.push($($(item).find('li')[0]).attr('type-id'))
	}.bind(this))
	this.models.find('ul').each(function(index, item){ // 型号预处理
		index !== 0 && $(item).hide()
	})
	this.$ladderPrice.each(function(index, item){
		this.ladderPrice.push($(item).find('span').text())
	}.bind(this))
	this.$ladderNum.each(function(index, item){
		this.ladderNum.push($(item).find('span').text())
	}.bind(this))
	this.Number = {
	}
}

order.prototype.init = function() { // 事件初始化
	var that = this
	this.types.each(function(index, item){
		$(item).on('click', 'li', function(){
			$(this).siblings().find('img').css('border-color', 'white');
			$(this).siblings().css('color', '#333');
			$(this).find('img').css('border-color', '#f09e01');
			$(this).css('color', '#ff6d33');
			$('.goods-slide').siblings().find('img').attr('src', $(this).find('img').attr('src'));
			$('.goods-slide img').css('border-color', '#e5e5e5');

			that.models.find('ul').hide()
			that.models.find('[about-type=' + $(this).attr('type-id') + ']').show()
			that.goods_norms[index] = $(this).attr('type-id');
		})
	})
	this.$ele.on('click', '.reduce', function(){ // 减
		$(this).next().val() > 0 && $(this).next().val(+$(this).next().val() - 1)
		that.commonFun($(this).parents('li').attr('model-id'), $(this).next().val())
		
	})
	this.$ele.on('click', '.add', function(){ // 加
		$(this).prev().val() < +$(this).parent().prev().find('span').text() && $(this).prev().val(+$(this).prev().val() + 1)
		that.commonFun($(this).parents('li').attr('model-id'), $(this).prev().val())
	})
	this.$ele.on('keyup', 'input', function(){ // 输入数字限制
		$(this).val($(this).val() > +$(this).parent().prev().find('span').text() ? +$(this).parent().prev().find('span').text() : $(this).val())
		that.commonFun($(this).parents('li').attr('model-id'), $(this).val())
	})
	return this
}
order.prototype.getData = function() { // 获取已选表单数据
	return this.Number
}

order.prototype.addTo = function(myid, number) { // 在仓库中加入商品
	this.Number[[...this.goods_norms, myid].join('_')] = number
	return this
}

order.prototype.addTable = function(name, myid, number) { // 表单同步数据
	var all = 0
	var that = this
	Object.keys(this.Number).forEach(function(item){
		if (item.split('_')[0] == that.goods_norms[0]) {
			all += +that.Number[item]
		}
	})
	this.$ele.find('[data-name=' + name + '] .amount .value').text(all)
	this.$ele.find('[data-name=' + name + '] li[model-id=' + myid + '] em').text(number)
	return this
}

order.prototype.calculatePirce = function() { // 计算商品价格
	let price = 0
	this.$ele.find('input').each(function(index, item){
		price += +$(item).val() * +$(this).parents('li').find('.now-price').children('span').text()
	})
	$('.goods-cost').text(price.toFixed(2))
	return this
}
order.prototype.calculateNum = function() { // 计算商品总数
	let val = 0
	this.$ele.find('input').each(function(index, item){
		val += +$(item).val()
	})
	this.allNumber = val
	$('.goods-num').text(val)
	return this
}
order.prototype.getAllNumber = function(){
	return this.allNumber
}

var setPrice = function(index){
	this.$ladderPrice.css('font-weight', 'normal')
	$(this.$ladderPrice[index]).css('font-weight', 'bold')
	this.models.find('.now-price span').text(this.ladderPrice[index])
}

order.prototype.changePrice = function(number) { // 阶梯价 价格改动
	if(number < +this.ladderNum[0]) {
		this.$ladderPrice.css('font-weight', 'normal')
		this.models.find('.now-price span').text(this.ladderPrice[0])
	}
	if(number >= +this.ladderNum[0] && number < +this.ladderNum[1]) {
		setPrice.call(this, 0)
	}
	if (+this.ladderNum[2]) {
		if(number >= +this.ladderNum[1] && number < +this.ladderNum[2]) {
			setPrice.call(this, 1)
		}
		if(number >= +this.ladderNum[2]) {
			setPrice.call(this, 2)
		}
	} else {
		if(number >= +this.ladderNum[1]) {
			setPrice.call(this, 1)
		}
	}
	return this
}

order.prototype.commonFun = function(myid, number) { // 数据改动以后方法整合
	this.calculateNum()
	this.isladder && this.changePrice(this.getAllNumber())
	this.addTo(myid, number)
	this.addTable(this.$ele.find('[type-id=' + this.goods_norms[0] + ']').attr('title'), myid, number)
	this.calculatePirce()
	return this
}

export { order }