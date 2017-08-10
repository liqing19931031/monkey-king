/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slide = __webpack_require__(5);

	var _contentSlide = __webpack_require__(7);

	__webpack_require__(8);
	var $ = __webpack_require__(6);

	var ableSlide = true;
	$('.title-group').on('mouseenter', 'li', function () {
		$(this).parent().find('.open-belt').css('opacity', '0').css('bottom', '0px');
		$(this).find('.open-belt').css('opacity', '1').css('bottom', '-10px');
	});

	$('.search-input').on('change', 'select', function () {
		$(this).next().attr('placeholder', '\u8BF7\u8F93\u5165\u60A8\u8981\u67E5\u627E\u7684' + $(this).val());
	});

	$('.turn-block').on('click', function () {
		if (ableSlide) {
			ableSlide = false;
			var number = $(this).attr('index') * 300;
			var alllength = $('.goods-slide-group').children().length;
			var leftpx = +$('.goods-slide-group').css('left').split('p')[0] + number;
			leftpx <= 0 && leftpx >= -(alllength - 3) * 300 && $('.goods-slide-group').css('left', leftpx + 'px');
			setTimeout(function () {
				ableSlide = true;
			}, 600);
		}
	});

	var slide1 = new _slide.slide($('.plate-midle'));
	var shopSlide = new _contentSlide.shopChange($('.goods-content--right'));
	var shopSlide1 = new _contentSlide.shopChange($('.goods-allgroup'));

	slide1.render().init().startSlide();
	shopSlide.init();
	shopSlide1.init();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = __webpack_require__(6); // 美猴王轮播组件

	var slide = function slide(form) {
		this.$element = form;
		this.index = 1;
		this.length = this.$element.children().length - 1;
		this.dothtml = [];
	};
	var hideImg = function hideImg(item) {
		this.$element.find('[index-data]').removeClass('on');
		this.$element.find('[index-data=' + item + ']').addClass('on');
	};
	slide.prototype.render = function () {
		for (var a = 1; a <= this.length; a++) {
			this.dothtml.push('<a href="" class="dot-item" data-index=' + a + '></a>');
		}
		this.$element.find('.slide-dot').css('margin-left', -(12 * this.length + 6) + 'px').html(this.dothtml);
		return this;
	};
	slide.prototype.init = function () {
		var that = this;
		this.$element.on('mouseover', '.dot-item', function () {
			$(this).addClass('on');
			$(this).siblings().removeClass('on');
			that.index = $(this).attr('data-index');
			hideImg.call(that, that.index);
		});
		that.$element.find('[data-index=1]').trigger('mouseover');
		return this;
	};
	slide.prototype.startSlide = function () {
		var slidego = function () {
			setTimeout(function () {
				this.index = this.index > this.length ? 1 : this.index;
				this.$element.find('[data-index=' + this.index + ']').trigger('mouseover');
				this.index++;
				slidego();
			}.bind(this), 3000);
		}.bind(this);
		slidego();
	};
	exports.slide = slide;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = window.$;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = __webpack_require__(6);

	var shopChange = function shopChange(form) {
		this.$ele = form;
		this.index = 0;
		this.length = this.$ele.children().length;
		this.ctl = this.$ele.parents('.goods-content').prev().find('ul');
	};

	shopChange.prototype.init = function () {
		var that = this;
		this.$ele.find('[data-index=' + this.index + ']').css('opacity', 1);
		this.$ele.find('[data-index=' + this.index + ']').css('z-index', 2);
		this.ctl.on('mouseenter', 'li', function () {
			var currentTag = that.$ele.find('.goods-onegroup[data-index=' + $(this).attr('my-index') + ']');
			$(currentTag).css('opacity', 1);
			$(currentTag).css('z-index', 2);
			$(currentTag).siblings().css('opacity', 0);
			$(currentTag).siblings().css('z-index', 1);
		});
	};

	exports.shopChange = shopChange;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles

	var content = __webpack_require__(9);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./index.less", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./index.less");
				if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function () {
			update();
		});
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('//at.alicdn.com/t/font_8t9m70twkigam7vi.eot');\n  src: url('//at.alicdn.com/t/font_8t9m70twkigam7vi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.woff') format('woff'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.ttf') format('truetype'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.svg#iconfont') format('svg');\n}\n.glyphicon {\n  position: relative;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-address:before {\n  content: \"\\E68E\";\n}\n.glyphicon-open:before {\n  content: \"\\E643\";\n}\n.glyphicon-monkey:before {\n  content: \"\\E623\";\n}\n.glyphicon-turn-left:before {\n  content: \"\\E644\";\n}\n.glyphicon-turn-right:before {\n  content: \"\\E645\";\n}\n.glyphicon-level:before {\n  content: \"\\E701\";\n}\n.glyphicon-upload:before {\n  content: \"\\E633\";\n}\n.glyphicon-download:before {\n  content: \"\\E638\";\n}\n.glyphicon-left:before {\n  content: \"\\E62B\";\n}\n.glyphicon-right:before {\n  content: \"\\E62A\";\n}\n.glyphicon-like:before {\n  content: \"\\E607\";\n}\n.glyphicon-share:before {\n  content: \"\\E6D8\";\n}\n.glyphicon-erwei:before {\n  content: \"\\E600\";\n}\n.glyphicon-friend:before {\n  content: \"\\E706\";\n}\n.glyphicon-addcart:before {\n  content: \"\\E601\";\n}\n.glyphicon-point:before {\n  content: \"\\E64E\";\n}\n.glyphicon-voice:before {\n  content: \"\\E62C\";\n}\n.glyphicon-dropdown:before {\n  content: \"\\E618\";\n}\n.glyphicon-close:before {\n  content: \"\\E635\";\n}\n.glyphicon-sorting:before {\n  content: \"\\E71C\";\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'Microsoft Yahei';\n}\n.contain {\n  width: 1200px;\n  margin: 0 auto;\n  height: 100%;\n}\n.no-border {\n  border: 0px!important;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.font-big {\n  font-size: 24px;\n}\n.font-normal {\n  font-size: 14px;\n}\n.font-huge {\n  font-size: 16px;\n}\n.font-midle {\n  font-size: 18px;\n}\n.text-center {\n  text-align: center;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: #0b0b0b;\n}\na:hover {\n  color: #f09e01;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n.hover-color {\n  color: #f09e01;\n}\n.title-group ul li {\n  float: left;\n  color: white;\n  line-height: 50px;\n  position: relative;\n  cursor: pointer;\n}\n.title-group ul li:first-child .open-belt {\n  bottom: -10px;\n  opacity: 1;\n}\n.title-group ul li .open-belt {\n  bottom: 0;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  opacity: 0;\n  transition: all 0.5s;\n  text-align: center;\n  line-height: 35px;\n  margin-left: -12.5px;\n  border-radius: 50%;\n  font-size: 14px;\n  background-color: #5858de;\n}\n.title-group ul li + li {\n  margin-left: 72px;\n}\n.header {\n  font-size: 14px;\n  background-color: #f8f8f8;\n  height: 28px;\n  line-height: 28px;\n  box-shadow: 0px 1px 0 0 rgba(0, 0, 0, 0.3);\n}\n.header a {\n  font-size: 14px;\n}\n.header .login {\n  margin-left: 50px;\n}\n.header .sign {\n  margin-left: 17px;\n}\n.header .adress {\n  border: solid 1px #e5e5e5;\n  padding: 1px 25px 1px 5px;\n}\n.header .adress i {\n  color: #ff0000;\n  margin-right: 3px;\n}\n.header .vip-user {\n  position: relative;\n  padding: 0 5px;\n  border: 1px solid #f8f8f8;\n  border-top: none;\n  height: 26px;\n  width: 90px;\n  box-sizing: border-box;\n  border-bottom: none;\n}\n.header .vip-user .vip-list {\n  display: none;\n  position: absolute;\n  top: 28px;\n  left: -1px;\n  width: 90px;\n  padding: 5px;\n  box-sizing: border-box;\n  border: 1px solid #e5e5e5;\n  border-top: none;\n  background-color: white;\n}\n.header .vip-user .vip-list a {\n  display: block;\n}\n.header .vip-user:hover {\n  border-color: #e5e5e5;\n  background-color: white;\n}\n.header .vip-user:hover .vip-list {\n  overflow: hidden;\n  display: block;\n}\n.search-group {\n  height: 150px;\n  padding: 40px 0 20px 0;\n  box-sizing: border-box;\n}\n.search-group .logo {\n  width: 200px;\n  height: 50px;\n  float: left;\n}\n.search-group .logo img {\n  width: 200px;\n  height: 50px;\n}\n.search-group .search-input {\n  float: left;\n  margin-left: 100px;\n  width: 600px;\n}\n.search-group .search-input .search-input--first {\n  height: 50px;\n}\n.search-group .search-input .search-input--first select {\n  font-size: 18px;\n  padding-left: 20px;\n  background-color: #f8f8f8;\n  border: solid 1px #e11e21;\n  border-right: none;\n  outline: none;\n  height: 100%;\n  float: left;\n}\n.search-group .search-input .search-input--first input {\n  float: left;\n  height: 100%;\n  outline: none;\n  box-sizing: border-box;\n  padding: 0;\n  border: solid 1px #e11e21;\n  border-left: none;\n  width: 400px;\n  font-size: 18px;\n  padding-left: 5px;\n}\n.search-group .search-input .search-input--first .select-button {\n  width: 100px;\n  height: 100%;\n  color: white;\n  line-height: 50px;\n  text-align: center;\n  font-size: 20px;\n  background-color: #e11e21;\n}\n.search-group .search-input .search-input--second ul {\n  padding-left: 14px;\n}\n.search-group .search-input .search-input--second ul li {\n  line-height: 34px;\n  list-style: none;\n  float: left;\n  font-size: 16px;\n  color: #999;\n}\n.search-group .search-input .search-input--second ul li + li {\n  margin-left: 20px;\n}\n.search-group .nice {\n  float: left;\n  margin-left: 45px;\n  color: #666666;\n  font-size: 12px;\n}\n.search-group .nice .img-group {\n  float: left;\n}\n.search-group .nice img {\n  display: block;\n  width: 50px;\n  height: 50px;\n}\n.search-group .nice .img-group + .img-group {\n  margin-left: 20px;\n}\n.body-group {\n  padding-bottom: 20px;\n  background-color: #f5f5f5;\n}\n.body-group .body-group--header {\n  height: 50px;\n  background-color: #cb1b1e;\n}\n.body-group .body-group--header .header-left {\n  width: 300px;\n  background-color: #e11e21;\n  height: 100%;\n  float: left;\n  position: relative;\n  color: white;\n  font-family: 'SourceHanSansCN';\n  line-height: 50px;\n  font-size: 22px;\n  box-sizing: border-box;\n  padding-left: 20px;\n}\n.body-group .body-group--header .header-left img {\n  z-index: -1;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: -60px;\n  left: 77px;\n  transition: all ease 0.3s;\n}\n.body-group .body-group--header .header-right {\n  float: left;\n  padding-left: 33px;\n}\n.body-group .body-group-plate .plate-left {\n  background-color: white;\n  width: 300px;\n  position: relative;\n  float: left;\n  box-sizing: border-box;\n}\n.body-group .body-group-plate .plate-left .plate-one {\n  border-bottom: 1px dashed #e5e5e5;\n  font-size: 16px;\n  line-height: 39px;\n  font-weight: bold;\n  padding-left: 35px;\n}\n.body-group .body-group-plate .plate-left .plate-one.special-font {\n  font-family: 'LiDeBiao-Xing3b54fc0a5a18584';\n}\n.body-group .body-group-plate .plate-left .plate-one:first-child {\n  line-height: 42px;\n  font-size: 20px;\n  font-weight: normal;\n}\n.body-group .body-group-plate .plate-left .plate-one:last-child {\n  border-bottom: none;\n}\n.body-group .body-group-plate .plate-left .plate-one + .plate-one img {\n  width: 690px;\n  height: 360px;\n  position: absolute;\n  top: 10px;\n  left: 300px;\n  display: none;\n}\n.body-group .body-group-plate .plate-left .plate-one + .plate-one:hover {\n  background-color: #eee;\n}\n.body-group .body-group-plate .plate-left .plate-one + .plate-one:hover img {\n  z-index: 999;\n  display: block;\n}\n.body-group .body-group-plate .plate-midle {\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 680px;\n  height: 360px;\n  float: left;\n  position: relative;\n  box-sizing: border-box;\n}\n.body-group .body-group-plate .plate-midle a[index-data] {\n  height: 360px;\n  width: 680px;\n  z-index: 0;\n}\n.body-group .body-group-plate .plate-midle a[index-data] img {\n  z-index: 0;\n  transition: opacity ease 1s;\n  opacity: 0;\n}\n.body-group .body-group-plate .plate-midle a[index-data].on {\n  z-index: 2;\n}\n.body-group .body-group-plate .plate-midle a[index-data].on img {\n  opacity: 1;\n  z-index: 2;\n}\n.body-group .body-group-plate .plate-midle img {\n  position: absolute;\n  border: 0px;\n  top: 0;\n  width: 680px;\n  height: 360px;\n}\n.body-group .body-group-plate .plate-midle .slide-dot {\n  z-index: 99;\n  background-color: rgba(170, 170, 170, 0.5);\n  padding: 7px 10px;\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  border-radius: 15px;\n}\n.body-group .body-group-plate .plate-midle .slide-dot a.dot-item {\n  width: 16px;\n  height: 16px;\n  float: left;\n  border-radius: 50%;\n  background-color: white;\n  transition: all 1s;\n}\n.body-group .body-group-plate .plate-midle .slide-dot a.dot-item + .dot-item {\n  margin-left: 8px;\n}\n.body-group .body-group-plate .plate-midle .slide-dot a.dot-item.on {\n  background-color: #e11e21;\n}\n.body-group .body-group-plate .plate-right {\n  margin-top: 10px;\n  margin-left: 10px;\n  float: left;\n  width: 200px;\n  height: 360px;\n}\n.body-group .body-group-plate .plate-right .alerts {\n  background-color: white;\n}\n.body-group .body-group-plate .plate-right .alerts .alerts-header {\n  line-height: 40px;\n  border: solid 1px #e5e5e5;\n  text-align: center;\n  font-size: 16px;\n}\n.body-group .body-group-plate .plate-right .alerts .alerts-content {\n  border: solid 1px #e5e5e5;\n  border-top: none;\n  padding: 5px 20px;\n}\n.body-group .body-group-plate .plate-right .alerts .alerts-content span {\n  display: block;\n  font-size: 14px;\n  line-height: 30px;\n  color: #666;\n}\n.body-group .body-group-plate .plate-right .alerts .alerts-content span:hover {\n  color: #f09e01;\n}\n.body-group .body-group-plate .plate-right .to-login {\n  padding: 10px;\n  margin-top: 26px;\n  max-height: 190px;\n  background-color: white;\n}\n.body-group .body-group-plate .plate-right .to-login .circle {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #e5e5e5;\n  text-align: center;\n  line-height: 60px;\n  float: left;\n}\n.body-group .body-group-plate .plate-right .to-login .circle i {\n  font-size: 34px;\n  color: #666;\n}\n.body-group .body-group-plate .plate-right .to-login .good-night {\n  line-height: 50px;\n  margin-left: 10px;\n  font-size: 18px;\n}\n.body-group .body-group-plate .plate-right .to-login .first-line {\n  float: left;\n  padding: 10px 0;\n}\n.body-group .body-group-plate .plate-right .to-login .second-line {\n  margin-top: 10px;\n  font-size: 12px;\n  color: #666;\n  text-align: center;\n  width: 100%;\n}\n.body-group .body-group-plate .plate-right .to-login .third-line {\n  margin-top: 17px;\n}\n.body-group .body-group-plate .plate-right .to-login .third-line div {\n  width: 90px;\n  box-sizing: border-box;\n  float: left;\n  text-align: center;\n  border: 1px solid #e5e5e5;\n  padding: 17px 0;\n}\n.body-group .body-group-plate .plate-right .to-login .third-line div + div {\n  border-left: none;\n}\n.floor-group .floor-banner {\n  margin: 10px 0;\n}\n.floor-group .floor-origin .origin {\n  width: 300px;\n  height: 300px;\n  float: left;\n  border: 1px solid #e5e5e5;\n  box-sizing: border-box;\n}\n.floor-group .floor-origin .origin .origin-header {\n  line-height: 60px;\n  text-align: center;\n  font-size: 24px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.floor-group .floor-origin .origin .origin-body {\n  padding: 30px 20px;\n}\n.floor-group .floor-origin .origin .origin-body .origin-tag {\n  width: 120px;\n  height: 40px;\n  float: left;\n  margin-bottom: 30px;\n  color: white;\n  text-align: center;\n  line-height: 40px;\n}\n.floor-group .floor-origin .origin .origin-body .origin-tag:nth-child(2n) {\n  margin-left: 18px;\n}\n.floor-group .floor-origin .goods-slide {\n  width: 900px;\n  overflow: hidden;\n  position: relative;\n}\n.floor-group .floor-origin .goods-slide .goods-slide-group {\n  width: 1800px;\n  transition: all 0.5s;\n  position: relative;\n  left: 0;\n}\n.floor-group .floor-origin .goods-slide .goods-slide-group .origin {\n  padding-top: 50px;\n  padding-left: 30px;\n  box-sizing: border-box;\n  float: left;\n  border-left: none;\n}\n.floor-group .floor-origin .goods-slide .goods-slide-group .origin .origin-title {\n  font-size: 18px;\n  color: #0b0b0b;\n}\n.floor-group .floor-origin .goods-slide .goods-slide-group .origin .origin-type {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #666;\n}\n.floor-group .floor-origin .goods-slide .turn-block {\n  background-color: #000;\n  opacity: 0.5;\n  top: 120px;\n  display: none;\n  position: absolute;\n  width: 40px;\n  height: 60px;\n  color: white;\n  font-size: 40px;\n  line-height: 60px;\n  cursor: pointer;\n}\n.floor-group .floor-origin .goods-slide:hover .turn-block {\n  display: block;\n}\n.floor-group .floor-goods {\n  margin-top: 60px;\n}\n.floor-group .floor-goods .goods-top--tag {\n  line-height: 24px;\n  color: white;\n  height: 60px;\n  box-sizing: border-box;\n  padding: 18px;\n}\n.floor-group .floor-goods .title-group {\n  float: left;\n  width: 1200px;\n  height: 50px;\n  padding-left: 220px;\n  box-sizing: border-box;\n  background: #80a5f9;\n  margin-bottom: 10px;\n}\n.floor-group .floor-goods .title-group ul li .open-belt {\n  background-color: #80a5f9;\n}\n.floor-group .floor-goods .title-group.shop-group {\n  background-color: #75df1f;\n}\n.floor-group .floor-goods .title-group.shop-group ul li .open-belt {\n  background-color: #75df1f;\n}\n.floor-group .floor-goods .goods-content {\n  height: 590px;\n  border: solid 1px #e5e5e5;\n  box-sizing: border-box;\n  float: left;\n  width: 100%;\n}\n.floor-group .floor-goods .goods-content .goods-content--left {\n  width: 298px;\n  height: 100%;\n  float: left;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--top {\n  height: 388px;\n  padding: 20px;\n  box-sizing: border-box;\n  color: white;\n  position: relative;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--top div {\n  display: none;\n  line-height: 30px;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--top img {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom {\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-right: 1px solid #e5e5e5;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom :first-child {\n  color: #f09e01;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom .img {\n  width: 126px;\n  height: 126px;\n  cursor: pointer;\n  float: left;\n  position: relative;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom .img img {\n  width: 126px;\n  height: 126px;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom .img .goods--text {\n  position: absolute;\n  width: 126px;\n  height: 126px;\n  display: none;\n  top: 0;\n  left: 0;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom .img:hover .goods--text {\n  line-height: 126px;\n  text-align: center;\n  display: block;\n}\n.floor-group .floor-goods .goods-content .goods-content--left .goods-content--left--bottom .img + .img {\n  margin-left: 20px;\n}\n.floor-group .floor-goods .goods-content .goods-content--right {\n  float: left;\n  width: 900px;\n  height: 602px;\n  position: relative;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-onegroup {\n  position: absolute;\n  width: 900px;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: all ease 1s;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-onegroup :nth-child(2) {\n  margin-top: -1px;\n  border-right: none;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-onegroup :nth-child(5) {\n  border-right: none;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big {\n  float: left;\n  width: 586px;\n  height: 286px;\n  box-sizing: border-box;\n  border: solid 1px #e5e5e5;\n  margin-left: 14px;\n  margin-top: -1px;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-context {\n  position: relative;\n  width: 297px;\n  padding: 30px;\n  padding-top: 60px;\n  box-sizing: border-box;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-context .goods-hot {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-context .goods-introduce {\n  height: 120px;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-img {\n  width: 287px;\n  height: 100%;\n  float: left;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-img img {\n  width: 100%;\n  height: 100%;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small {\n  float: left;\n  width: 286px;\n  height: 286px;\n  box-sizing: border-box;\n  margin-left: 14px;\n  border: solid 1px #e5e5e5;\n  margin-top: 18px;\n  overflow: hidden;\n  position: relative;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small img {\n  width: 100%;\n  height: 100%;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small img {\n  transition: all ease 2s;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small img:hover {\n  transform: scale(1.05);\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-context {\n  position: absolute;\n  bottom: -88px;\n  transition: all ease 0.3s;\n  left: 0;\n  height: 88px;\n  padding: 4px 16px;\n  box-sizing: border-box;\n  background-color: white;\n  border-top: 1px solid #e5e5e5;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-context .goods-introduce {\n  margin-bottom: 15px;\n  height: 42px;\n  overflow: hidden;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-context .goods-price {\n  margin: 0;\n  float: left;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small:hover .goods-context {\n  bottom: 0;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-introduce,\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-introduce {\n  color: #666;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-address,\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-address {\n  float: right;\n  font-size: 12px;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-price,\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-price {\n  text-align: center;\n  margin-top: 30px;\n  color: #f09e01;\n}\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--big .goods-price span,\n.floor-group .floor-goods .goods-content .goods-content--right .goods-content--small .goods-price span {\n  font-size: 12px;\n}\n.floor-group .floor-goods .goods-content .goods-allgroup {\n  position: relative;\n  width: 1040px;\n  height: 400px;\n  float: left;\n}\n.floor-group .floor-goods .goods-content .goods-onegroup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: all ease 1s;\n}\n.floor-group .floor-goods .goods-content .shop-content {\n  float: left;\n  border: dashed 1px #e5e5e5;\n  width: 260px;\n  height: 400px;\n  padding: 0 30px 30px 30px;\n  color: #666666;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.floor-group .floor-goods .goods-content .shop-content .shop-name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #0b0b0b;\n  line-height: 60px;\n  text-align: center;\n  border-bottom: 2px solid  #e5e5e5;\n}\n.floor-group .floor-goods .goods-content .shop-content .shop-conpany {\n  margin-top: 5px;\n  line-height: 20px;\n}\n.floor-group .floor-goods .goods-content .shop-content .shop-level {\n  line-height: 20px;\n}\n.floor-group .floor-goods .goods-content .shop-content .shop-level i {\n  color: #f09e01;\n}\n.floor-group .floor-goods .goods-content .shop-content .shop-address {\n  text-align: center;\n  line-height: 40px;\n}\n.floor-group .floor-goods .goods-content .shop-content .shop-address span {\n  color: #0b0b0b;\n}\n.floor-group .floor-goods .goods-content .shop-content + .shop-content {\n  border-left: none;\n}\n.floor-group .floor-goods .goods-content .shop-recommended {\n  float: left;\n  height: 400px;\n  border: 1px solid #e5e5e5;\n  margin-left: 4px;\n  width: 156px;\n  box-sizing: border-box;\n  padding: 0 7px 20px 7px;\n}\n.floor-group .floor-goods .goods-content .shop-recommended .shop-recommended--title {\n  color: #f09e01;\n  line-height: 60px;\n}\n.floor-group .floor-goods .goods-content .shop-recommended .shop-recommended--img img {\n  width: 140px;\n  height: 150px;\n  display: block;\n}\n.floor-group .floor-goods .goods-content .shop-recommended .shop-recommended--img + .shop-recommended--img {\n  margin-top: 20px;\n}\n.industry-group {\n  margin-top: 75px;\n}\n.industry-group .industry-content {\n  margin-top: 24px;\n}\n.industry-group .industry-content .industry--left {\n  width: 965px;\n  height: 340px;\n  float: left;\n  background-color: #eeeeee;\n  border: solid 1px #e5e5e5;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.industry-group .industry-content .industry--left .industry-dynamic {\n  float: left;\n  width: 350px;\n}\n.industry-group .industry-content .industry--left .industry-dynamic .industry-img {\n  position: relative;\n}\n.industry-group .industry-content .industry--left .industry-dynamic .industry-img .img-message {\n  margin-top: 19px;\n  height: 240px;\n  position: relative;\n  overflow: hidden;\n}\n.industry-group .industry-content .industry--left .industry-dynamic .industry-img .img-message p {\n  font-size: 12px;\n  text-align: center;\n  position: absolute;\n  bottom: -40px;\n  width: 100%;\n  line-height: 40px;\n  color: white;\n  margin: 0;\n  transition: all 0.3s;\n  background: rgba(0, 0, 0, 0.5);\n}\n.industry-group .industry-content .industry--left .industry-dynamic .industry-img .img-message:hover p {\n  bottom: 0;\n}\n.industry-group .industry-content .industry--left .industry-activity {\n  float: left;\n  width: 540px;\n  margin-left: 30px;\n}\n.industry-group .industry-content .industry--left .industry-activity .activity--group {\n  height: 80px;\n  margin-top: 19px;\n}\n.industry-group .industry-content .industry--left .industry-activity .activity--group img {\n  display: block;\n  float: left;\n}\n.industry-group .industry-content .industry--left .industry-activity .activity--group article {\n  font-size: 12px;\n  float: left;\n  margin-left: 30px;\n  width: 430px;\n  color: #666;\n}\n.industry-group .industry-content .industry--left .industry-activity p {\n  width: 100%;\n  margin: 0;\n  line-height: 37px;\n  float: left;\n  color: #666;\n  font-size: 12px;\n}\n.industry-group .industry-content .industry--left .industry-activity p a {\n  color: #666;\n}\n.industry-group .industry-content .industry--right {\n  float: left;\n  height: 340px;\n  width: 206px;\n  margin-left: 29px;\n  box-sizing: border-box;\n  border: solid 1px #e5e5e5;\n  padding: 0 20px;\n  padding-top: 40px;\n}\n.industry-group .industry-content .industry--right span {\n  font-size: 14px;\n  display: inline-block;\n  border-bottom: 1px solid #e5e5e5;\n  line-height: 40px;\n}\n.industry-group .industry-content .industry--right .guide {\n  line-height: 50px;\n  color: #f09e01;\n}\n.industry-group .industry-footer {\n  border: solid 1px #e5e5e5;\n  height: 200px;\n  width: 100%;\n  margin-top: 20px;\n}\n.industry-group .industry-footer img {\n  margin: 50px;\n  float: left;\n}\n.industry-group .industry-footer .trade-img {\n  float: right;\n}\n.industry-group .industry-footer .trade-img img {\n  margin: 0;\n}\n.industry-group .industry-footer .trade {\n  width: 98px;\n  height: 80px;\n  float: left;\n  box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.2);\n  border: solid 1px #e5e5e5;\n  font-size: 12px;\n}\n.industry-group .industry-footer .trade .trade-title {\n  font-weight: bold;\n  color: white;\n  font-size: 14px;\n  background-color: #cb1b1e;\n  line-height: 30px;\n  text-align: center;\n}\n.industry-group .industry-footer .trade span {\n  text-align: center;\n  display: block;\n  line-height: 24px;\n}\n.industry-group .industry-footer .trade + .trade {\n  margin-left: 70px;\n}\n.site-group {\n  padding: 0 50px 50px 50px;\n}\n.site-group .site-title {\n  font-size: 24px;\n  color: #0b0b0b;\n  line-height: 140px;\n  text-align: center;\n}\n.site-group .site-one {\n  width: 190px;\n  float: left;\n  color: #666;\n}\n.site-group .site-one .site-first i {\n  color: #ff0000;\n}\n.site-group .site-one .site-second {\n  margin-top: 24px;\n}\n.site-group .site-one .site-second .site--province {\n  float: left;\n  color: #0b0b0b;\n  line-height: 30px;\n  font-size: 14px;\n}\n.site-group .site-one .site-second .site--cities {\n  width: 121px;\n  float: left;\n  line-height: 30px;\n}\n.site-group .site-one .site-second .site--cities .site-city {\n  float: left;\n  color: #666;\n  padding-right: 5px;\n  font-size: 14px;\n}\n.site-group .site-one .site-second .site--cities .site-city:hover {\n  color: #f09e01;\n}\n.site-group .site-one .site-second .site--cities .site-city.disable {\n  color: #ddd;\n  cursor: not-allowed;\n}\n.site-group .site-one + .site-one {\n  margin-left: 10px;\n}\n.footer-group {\n  background-color: #0b0b0b;\n  padding: 30px 0;\n}\n.footer-group .footer-first {\n  vertical-align: top;\n  display: inline-block;\n  font-weight: bold;\n  color: #e5e5e5;\n}\n.footer-group .footer-first ul {\n  margin-top: 10px;\n  line-height: 35px;\n  color: #666;\n  font-weight: normal;\n}\n.footer-group .footer-first ul a {\n  color: #666;\n}\n.footer-group .footer-first ul a:hover {\n  color: #f09e01;\n}\n.footer-group .footer-first img {\n  width: 80px;\n  height: 80px;\n  margin-left: 10px;\n}\n.footer-group .footer-first + .footer-first {\n  margin-left: 125px;\n}\n.footer-group .footer-second {\n  color: #666;\n  float: left;\n  width: 160px;\n}\n.footer-group .footer-second img {\n  margin-left: 25px;\n}\n.footer-group .footer-second + .footer-second {\n  margin-left: 50px;\n}\n.footer-group .footer-third li {\n  padding: 0 10px;\n  float: left;\n}\n.footer-group .footer-third li a {\n  color: #666;\n}\n.footer-group .footer-third li a:hover {\n  color: #f09e01;\n}\n.footer-group .footer-third li + li {\n  border-left: 1px solid #666;\n}\n.footer-group .footer-fourth {\n  background-color: #999;\n  height: 60px;\n  margin-top: 30px;\n  color: white;\n  text-align: center;\n}\n.footer-group .footer-fourth img {\n  margin-left: 20px;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);