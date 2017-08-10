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

	var _commonSlide = __webpack_require__(5);

	__webpack_require__(7);
	var $ = __webpack_require__(6);

	$('.more-selected').on('click', function () {
		$(this).prev().hasClass('is-open') ? $(this).prev().removeClass('is-open') : $(this).prev().addClass('is-open');
		$(this).prev().hasClass('is-open') ? $(this).find('i').attr('class', 'glyphicon-download glyphicon') : $(this).find('i').attr('class', 'glyphicon-upload glyphicon');
	});

	$('.stroe-slide').each(function (index, item) {
		var nowSlide = new _commonSlide.slide($(this));
		nowSlide.init();
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = __webpack_require__(6);

	var slide = function slide(form) {
		this.$ele = form;
		this.index = 1;
		this.length = this.$ele.children().find('li').length;
		this.ableSlide = true;
		this.$ele.find('ul').css('width', 220 * this.length + 'px');
	};

	slide.prototype.init = function () {
		var _this = this;
		this.$ele.siblings().on('click', function () {
			_this.index = _this.index + +$(this).attr('goIndex');
			_this.index = _this.index <= 0 ? 1 : _this.index;
			_this.index = _this.index > _this.length - 1 ? _this.length - 1 : _this.index;
			console.log(_this.index);
			if (_this.ableSlide) {
				_this.ableSlide = false;
				_this.$ele.children().css('left', -(_this.index - 1) * 220 + 'px');
				setTimeout(function () {
					_this.ableSlide = true;
				}, 600);
			}
		});
		return this;
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

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles

	var content = __webpack_require__(8);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./searchResult.less", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./searchResult.less");
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  font-family: 'Microsoft Yahei';\n}\n.contain {\n  width: 1200px;\n  margin: 0 auto;\n  height: 100%;\n}\n.no-border {\n  border: 0px!important;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.font-big {\n  font-size: 24px;\n}\n.font-normal {\n  font-size: 14px;\n}\n.font-huge {\n  font-size: 16px;\n}\n.font-midle {\n  font-size: 18px;\n}\n.text-center {\n  text-align: center;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: #0b0b0b;\n}\na:hover {\n  color: #f09e01;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n.hover-color {\n  color: #f09e01;\n}\n.title-group ul li {\n  float: left;\n  color: white;\n  line-height: 50px;\n  position: relative;\n  cursor: pointer;\n}\n.title-group ul li:first-child .open-belt {\n  bottom: -10px;\n  opacity: 1;\n}\n.title-group ul li .open-belt {\n  bottom: 0;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  opacity: 0;\n  transition: all 0.5s;\n  text-align: center;\n  line-height: 35px;\n  margin-left: -12.5px;\n  border-radius: 50%;\n  font-size: 14px;\n  background-color: #5858de;\n}\n.title-group ul li + li {\n  margin-left: 72px;\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('//at.alicdn.com/t/font_8t9m70twkigam7vi.eot');\n  src: url('//at.alicdn.com/t/font_8t9m70twkigam7vi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.woff') format('woff'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.ttf') format('truetype'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.svg#iconfont') format('svg');\n}\n.glyphicon {\n  position: relative;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-address:before {\n  content: \"\\E68E\";\n}\n.glyphicon-open:before {\n  content: \"\\E643\";\n}\n.glyphicon-monkey:before {\n  content: \"\\E623\";\n}\n.glyphicon-turn-left:before {\n  content: \"\\E644\";\n}\n.glyphicon-turn-right:before {\n  content: \"\\E645\";\n}\n.glyphicon-level:before {\n  content: \"\\E701\";\n}\n.glyphicon-upload:before {\n  content: \"\\E633\";\n}\n.glyphicon-download:before {\n  content: \"\\E638\";\n}\n.glyphicon-left:before {\n  content: \"\\E62B\";\n}\n.glyphicon-right:before {\n  content: \"\\E62A\";\n}\n.glyphicon-like:before {\n  content: \"\\E607\";\n}\n.glyphicon-share:before {\n  content: \"\\E6D8\";\n}\n.glyphicon-erwei:before {\n  content: \"\\E600\";\n}\n.glyphicon-friend:before {\n  content: \"\\E706\";\n}\n.glyphicon-addcart:before {\n  content: \"\\E601\";\n}\n.glyphicon-point:before {\n  content: \"\\E64E\";\n}\n.glyphicon-voice:before {\n  content: \"\\E62C\";\n}\n.glyphicon-dropdown:before {\n  content: \"\\E618\";\n}\n.glyphicon-close:before {\n  content: \"\\E635\";\n}\n.glyphicon-sorting:before {\n  content: \"\\E71C\";\n}\n.search-result header {\n  height: 50px;\n  background-color: #e11214;\n  color: white;\n  font-size: 16px;\n  line-height: 50px;\n}\n.search-result header .cartType {\n  border: 1px solid #e5e5e5;\n  font-size: 14px;\n  padding: 0 4px;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  line-height: 24px;\n  border-bottom: none;\n  background-color: white;\n  color: #e11214;\n  z-index: 23;\n}\n.search-result header .cartType:hover ul {\n  display: block;\n}\n.search-result header .cartType a {\n  color: #666;\n}\n.search-result header .cartType a:hover {\n  color: #e11214;\n}\n.search-result header .cartType ul {\n  display: none;\n  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e5e5;\n  width: 350px;\n  position: absolute;\n  top: 23px;\n  left: -40px;\n  background-color: white;\n  z-index: 22;\n  padding: 10px;\n}\n.search-result header .cartType ul li {\n  float: left;\n  padding: 0 5px;\n}\n.search-result section.tag {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.search-result section.tag span {\n  display: inline-block;\n}\n.search-result section.tag .select-tag {\n  border: 1px solid #e5e5e5;\n  font-size: 12px;\n  color: #e11214;\n  padding: 2px 4px;\n}\n.search-result section.tag .select-tag i {\n  color: #666;\n}\n.search-result section.tag .select-tag:hover {\n  border-color: #e11214;\n}\n.search-result section.tag .select-tag:hover i {\n  color: #e11214;\n}\n.search-result section .belt {\n  height: 200px;\n  border: 1px solid #e5e5e5;\n  padding: 10px;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.search-result section .belt .belt--img {\n  height: 180px;\n  width: 300px;\n  float: left;\n}\n.search-result section .belt .belt--img img {\n  width: 100%;\n  height: 100%;\n}\n.search-result section .belt .belt--desc {\n  margin-left: 20px;\n  float: left;\n  width: 380px;\n}\n.search-result section .belt .belt--desc .belt--desc--title {\n  color: #e11214;\n}\n.search-result section .belt .belt--desc .belt--desc--content {\n  margin-top: 12px;\n  padding-right: 37px;\n  border-right: 1px dashed #e5e5e5;\n  color: #666;\n  font-size: 12px;\n  line-height: 24px;\n}\n.search-result section .belt .belt--right {\n  float: left;\n  padding-top: 36px;\n  color: #666;\n  font-size: 12px;\n  padding-left: 20px;\n  line-height: 24px;\n  width: 200px;\n}\n.search-result nav {\n  border: solid 1px #e5e5e5;\n  padding: 0 30px;\n  box-sizing: border-box;\n}\n.search-result nav .nav-oneline {\n  padding: 20px 0;\n  border-bottom: 1px dashed #e5e5e5;\n  overflow: hidden;\n  line-height: 34px;\n}\n.search-result nav .nav-oneline:last-child {\n  border-bottom: none;\n}\n.search-result nav .nav-oneline .nav-title {\n  width: 80px;\n  padding-left: 20px;\n  color: #666;\n}\n.search-result nav .nav-oneline .nav-content {\n  width: 960px;\n  float: left;\n  height: 34px;\n  overflow: hidden;\n}\n.search-result nav .nav-oneline .nav-content li {\n  padding: 0 15px;\n  margin: 0 5px;\n  float: left;\n}\n.search-result nav .nav-oneline .nav-content li a {\n  color: #005aa0;\n}\n.search-result nav .nav-oneline .nav-content.belt li {\n  background-color: #e11214;\n}\n.search-result nav .nav-oneline .nav-content.belt li a {\n  color: white;\n}\n.search-result nav .nav-oneline .nav-content.is-open {\n  height: auto;\n}\n.search-result nav .nav-oneline .more-selected {\n  color: #666;\n  float: right;\n  cursor: pointer;\n}\n.search-result section .select-group {\n  height: 40px;\n  border: 1px solid #e5e5e5;\n  margin: 20px 0 10px 0;\n}\n.search-result section .select-group .select-inline {\n  display: inline-block;\n  line-height: 40px;\n  text-align: center;\n}\n.search-result section .select-group .select-inline.select-group--all {\n  width: 80px;\n}\n.search-result section .select-group .select-inline.select-group--price {\n  background-color: #e11214;\n  color: white;\n  width: 90px;\n}\n.search-result section .select-group .select-inline.select-group--price a {\n  color: white;\n}\n.search-result section .select-group .select-inline.select-group--price-group {\n  border-right: 1px solid #e5e5e5;\n  width: 280px;\n  box-sizing: border-box;\n  padding: 0 15px;\n  text-align: left;\n}\n.search-result section .select-group .select-inline.select-group--price-group input {\n  padding-left: 3px;\n  width: 80px;\n  height: 26px;\n  box-sizing: border-box;\n  border: 1px solid #e5e5e5;\n  outline: none;\n  border-radius: 2px;\n}\n.search-result section .select-group .select-inline.select-group--price-group a {\n  float: right;\n  height: 24px;\n  margin-top: 10px;\n  line-height: 20px;\n  box-sizing: border-box;\n  background-color: #e11214;\n  padding: 3px 6px;\n  border-radius: 2px;\n  color: white;\n  font-size: 14px;\n}\n.search-result article.shops a {\n  display: block;\n}\n.search-result article.shops .commodity {\n  width: 285px;\n  height: 400px;\n  box-sizing: border-box;\n  border: 1px solid #e5e5e5;\n  float: left;\n  margin-left: 20px;\n  margin-bottom: 20px;\n}\n.search-result article.shops .commodity:nth-child(4n+1) {\n  margin-left: 0;\n}\n.search-result article.shops .commodity .commodity--img {\n  position: relative;\n  overflow: hidden;\n}\n.search-result article.shops .commodity .commodity--img img {\n  width: 283px;\n  height: 283px;\n  display: block;\n}\n.search-result article.shops .commodity .commodity--img .commodity-company--name {\n  height: 30px;\n  width: 100%;\n  left: 0;\n  bottom: -30px;\n  transition: all ease 0.3s;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  font-size: 14px;\n  line-height: 30px;\n}\n.search-result article.shops .commodity .commodity--img:hover .commodity-company--name {\n  bottom: 0;\n}\n.search-result article.shops .commodity .commodity--content {\n  padding: 0 20px;\n}\n.search-result article.shops .commodity .commodity--content .commodity--price {\n  line-height: 36px;\n  color: #ff6d33;\n}\n.search-result article.shops .commodity .commodity--content .commodity--desc {\n  height: 42px;\n}\n.search-result article.shops .commodity .commodity--content .commodity--address {\n  padding-top: 6px;\n  margin-top: 6px;\n  border-top: 1px dashed #e5e5e5;\n  text-align: center;\n}\n.search-result article.shops .commodity:hover {\n  border-color: #e11214;\n}\n.search-result article.shops .commodity:hover .commodity--address {\n  border-color: #e11214;\n}\n.search-result article.store .store--one {\n  padding: 20px;\n  height: 372px;\n  border: 1px solid #e5e5e5;\n  margin-bottom: 20px;\n}\n.search-result article.store .store--one.store--one {\n  margin-top: 20px;\n}\n.search-result article.store .store--one .store-one--left {\n  width: 620px;\n  float: left;\n}\n.search-result article.store .store--one .store-one--left .store--address a {\n  padding-bottom: 6px;\n  border-bottom: 1px dashed #e5e5e5;\n  font-size: 24px;\n}\n.search-result article.store .store--one .store-one--left .store--address a i {\n  color: #e11214;\n}\n.search-result article.store .store--one .store-one--left .store-one--desc {\n  margin-top: 30px;\n}\n.search-result article.store .store--one .store-one--left .store--img {\n  width: 285px;\n  height: 285px;\n  float: left;\n}\n.search-result article.store .store--one .store-one--left .store--img img {\n  width: 100%;\n  height: 100%;\n}\n.search-result article.store .store--one .store-one--left .store--content {\n  padding-left: 30px;\n  line-height: 34px;\n  float: left;\n  width: 305px;\n  font-size: 14px;\n}\n.search-result article.store .store--one .store-one--left .store--content a {\n  width: 100px;\n  height: 40px;\n  color: white;\n  display: block;\n  text-align: center;\n  line-height: 40px;\n  background-color: #e11214;\n}\n.search-result article.store .store--one .store-one--right {\n  width: 500px;\n  margin-left: 8px;\n  float: left;\n}\n.search-result article.store .store--one .store-one--right .store-news--title {\n  text-align: center;\n  line-height: 38px;\n}\n.search-result article.store .store--one .store-one--right .store-news--title .title-line {\n  width: 50px;\n  border-top: 1px dashed #e5e5e5;\n  height: 6px;\n  margin: 0 15px;\n  display: inline-block;\n  margin-top: -10px;\n}\n.search-result article.store .store--one .store-one--right .store-news--desc {\n  margin-top: 30px;\n}\n.search-result article.store .store--one .store-one--right .store-news--desc .store-turn {\n  color: #666;\n  width: 20px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  margin-top: 85px;\n  border: 1px solid #e5e5e5;\n  cursor: pointer;\n}\n.search-result article.store .store--one .store-one--right .stroe-slide {\n  float: left;\n  width: 440px;\n  height: 260px;\n  margin: 0 5px;\n  overflow: hidden;\n  position: relative;\n}\n.search-result article.store .store--one .store-one--right .stroe-slide ul {\n  width: auto;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: left ease 0.3s;\n  height: 260px;\n}\n.search-result article.store .store--one .store-one--right .stroe-slide ul li {\n  width: 208px;\n  float: left;\n  margin: 0 6px;\n}\n.search-result article.store .store--one .store-one--right .stroe-slide ul li .store--img {\n  position: relative;\n  overflow: hidden;\n}\n.search-result article.store .store--one .store-one--right .stroe-slide ul li .store--img .store--desc {\n  transition: all ease 0.3s;\n  position: absolute;\n  bottom: -50px;\n  height: 50px;\n  width: 100%;\n  color: #ff6d33;\n  text-align: center;\n  line-height: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.search-result article.store .store--one .store-one--right .stroe-slide ul li .store--img:hover .store--desc {\n  bottom: 0;\n}\n.search-result article.store .store--one .store-one--right .stroe-slide ul li img {\n  display: block;\n  width: 208px;\n  height: 208px;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
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
/* 10 */
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