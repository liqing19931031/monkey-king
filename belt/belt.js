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

	__webpack_require__(5);

	$(window).scroll(function (e) {
		if ($(window).scrollTop() > 900) {
			$('.nav-bar').css('opacity', 1);
			$('.nav-bar').css('display', 'block');
		} else {
			$('.nav-bar').css('opacity', 0);
		}
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles

	var content = __webpack_require__(6);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./belt.less", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./belt.less");
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  font-family: 'Microsoft Yahei';\n}\n.contain {\n  width: 1200px;\n  margin: 0 auto;\n  height: 100%;\n}\n.no-border {\n  border: 0px!important;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.font-big {\n  font-size: 24px;\n}\n.font-normal {\n  font-size: 14px;\n}\n.font-huge {\n  font-size: 16px;\n}\n.font-midle {\n  font-size: 18px;\n}\n.text-center {\n  text-align: center;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: #0b0b0b;\n}\na:hover {\n  color: #f09e01;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n.hover-color {\n  color: #f09e01;\n}\n.title-group ul li {\n  float: left;\n  color: white;\n  line-height: 50px;\n  position: relative;\n  cursor: pointer;\n}\n.title-group ul li:first-child .open-belt {\n  bottom: -10px;\n  opacity: 1;\n}\n.title-group ul li .open-belt {\n  bottom: 0;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  opacity: 0;\n  transition: all 0.5s;\n  text-align: center;\n  line-height: 35px;\n  margin-left: -12.5px;\n  border-radius: 50%;\n  font-size: 14px;\n  background-color: #5858de;\n}\n.title-group ul li + li {\n  margin-left: 72px;\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url('//at.alicdn.com/t/font_8t9m70twkigam7vi.eot');\n  src: url('//at.alicdn.com/t/font_8t9m70twkigam7vi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.woff') format('woff'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.ttf') format('truetype'), url('//at.alicdn.com/t/font_8t9m70twkigam7vi.svg#iconfont') format('svg');\n}\n.glyphicon {\n  position: relative;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-address:before {\n  content: \"\\E68E\";\n}\n.glyphicon-open:before {\n  content: \"\\E643\";\n}\n.glyphicon-monkey:before {\n  content: \"\\E623\";\n}\n.glyphicon-turn-left:before {\n  content: \"\\E644\";\n}\n.glyphicon-turn-right:before {\n  content: \"\\E645\";\n}\n.glyphicon-level:before {\n  content: \"\\E701\";\n}\n.glyphicon-upload:before {\n  content: \"\\E633\";\n}\n.glyphicon-download:before {\n  content: \"\\E638\";\n}\n.glyphicon-left:before {\n  content: \"\\E62B\";\n}\n.glyphicon-right:before {\n  content: \"\\E62A\";\n}\n.glyphicon-like:before {\n  content: \"\\E607\";\n}\n.glyphicon-share:before {\n  content: \"\\E6D8\";\n}\n.glyphicon-erwei:before {\n  content: \"\\E600\";\n}\n.glyphicon-friend:before {\n  content: \"\\E706\";\n}\n.glyphicon-addcart:before {\n  content: \"\\E601\";\n}\n.glyphicon-point:before {\n  content: \"\\E64E\";\n}\n.glyphicon-voice:before {\n  content: \"\\E62C\";\n}\n.glyphicon-dropdown:before {\n  content: \"\\E618\";\n}\n.glyphicon-close:before {\n  content: \"\\E635\";\n}\n.glyphicon-sorting:before {\n  content: \"\\E71C\";\n}\n.belt .inlineblock {\n  display: inline-block;\n}\n.belt img {\n  width: 100%;\n  height: 100%;\n}\n.belt .belt-top {\n  color: white;\n  background-color: #5858de;\n  height: 100px;\n  padding-top: 20px;\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 22px;\n}\n.belt .belt-top .top--left {\n  width: 150px;\n  height: 60px;\n  float: left;\n  background-color: #4040cd;\n  border-radius: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.belt .belt-top .top--midle {\n  height: 60px;\n  float: left;\n  line-height: 60px;\n  margin-left: 20px;\n  font-size: 24px;\n  padding-right: 20px;\n  border-right: 1px solid white;\n}\n.belt .belt-top .top--right {\n  cursor: pointer;\n  margin-left: 20px;\n  font-size: 24px;\n  line-height: 60px;\n  height: 100%;\n  float: left;\n  position: relative;\n}\n.belt .belt-top .top--right:hover .belt--list {\n  display: block;\n}\n.belt .belt-top .top--right .belt--list {\n  width: 200px;\n  position: absolute;\n  top: 80px;\n  left: -20px;\n  background-color: #5858de;\n  box-shadow: 0px 2px 5px 0 rgba(49, 48, 52, 0.26), inset 0px 4px 4px 0 rgba(0, 0, 0, 0.13);\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  display: none;\n}\n.belt .belt-top .top--right .belt--list li {\n  text-align: center;\n  font-size: 16px;\n  line-height: 45px;\n}\n.belt .belt-top .top--right .belt--list li a {\n  color: white;\n}\n.belt .belt-top .top--right .belt--list li a:hover {\n  color: #ff6d33;\n}\n.belt .belt-banner {\n  height: 900px;\n  width: 100%;\n  background: url('/belt/banner.jpg') center center no-repeat;\n}\n.belt .belt-company {\n  border: 5px solid #fff381;\n  height: 450px;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 35px 20px;\n  font-size: 20px;\n  line-height: 36px;\n  font-family: '\\5B8B\\4F53';\n}\n.belt .belt-company p {\n  margin: 0;\n}\n.belt .belt-list {\n  padding-bottom: 40px;\n  background-color: #6fd4ff;\n}\n.belt .belt-list .belt-list--banner {\n  width: 1200px;\n  height: 500px;\n}\n.belt .belt-list .belt-list--shop {\n  margin-top: 40px;\n}\n.belt .belt-list .belt-list--shop .shops + .shops {\n  margin-top: 30px;\n  background-color: #fcfcfe;\n}\n.belt .belt-list .belt-list--shop .shops .list-shop--header {\n  background-color: #fcfcfe;\n}\n.belt .belt-list .belt-list--shop .list-shop--header {\n  font-size: 48px;\n  line-height: 125px;\n  background-color: white;\n}\n.belt .belt-list .belt-list--shop .list-shop--header .title-line {\n  width: 62px;\n  border-top: 1px solid #0b0b0b;\n  height: 1px;\n  margin: 15px 25px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop {\n  background-color: white;\n  width: 400px;\n  height: 400px;\n  border: 1px solid #6fd4ff;\n  float: left;\n  box-sizing: border-box;\n  background-size: 100% 100%;\n  position: relative;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop:hover .shop-hover {\n  display: block;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop .shop-type {\n  position: absolute;\n  right: 13px;\n  top: 13px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop .shop-hover {\n  position: absolute;\n  top: 0;\n  display: none;\n  color: white;\n  box-sizing: border-box;\n  padding: 70px 60px 50px 60px;\n  left: 0;\n  width: 398px;\n  height: 398px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop .shop-hover .shop-hover--name {\n  font-size: 24px;\n  text-align: center;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop .shop-hover .shop-hover--content {\n  font-size: 18px;\n  line-height: 36px;\n  margin-top: 20px;\n  height: 140px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop .shop-hover .shop-hover--by {\n  color: #ff6d33;\n  text-align: center;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .one-shop .shop-hover .shop-hvoer--button {\n  margin-top: 12px;\n  color: #ff6d33;\n  border: 1px dashed #ff6d33;\n  line-height: 40px;\n  display: inline-block;\n  padding: 0 27px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop {\n  width: 285px;\n  height: 400px;\n  border: solid 1px #e5e5e5;\n  background-color: #fafafa;\n  box-sizing: border-box;\n  margin-left: 12px;\n  float: left;\n  margin-bottom: 12px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--img {\n  width: 283px;\n  height: 283px;\n  overflow: hidden;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--img img {\n  transition: all ease 2s;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--img img:hover {\n  transform: scale(1.05);\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc {\n  width: 100%;\n  height: 115px;\n  padding: 12px 20px;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc:hover div {\n  bottom: 0;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc article {\n  font-size: 14px;\n  height: 37px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc a {\n  height: 30px;\n  color: #ff0000;\n  border-bottom: 1px solid #ff0000;\n  font-size: 12px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc section {\n  font-size: 18px;\n  text-align: center;\n  color: #ff6d33;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc section span {\n  font-size: 14px;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc .by-btn {\n  transition: all ease 0.5s;\n  position: absolute;\n  height: 115px;\n  width: 283px;\n  left: 0;\n  bottom: -115px;\n  text-align: center;\n  line-height: 115px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc .by-btn a {\n  width: 100px;\n  height: 40px;\n  display: inline-block;\n  color: white;\n  line-height: 40px;\n  text-align: center;\n  font-size: 14px;\n  border-bottom: none;\n  background-color: #ff6d33;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc .address {\n  font-size: 18px;\n  color: white;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  text-align: center;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc .classify {\n  text-align: center;\n  color: white;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc .classify a {\n  color: white;\n  border-bottom: none;\n}\n.belt .belt-list .belt-list--shop .list-shop-content .other-shop .other-shop--desc .classify a:hover {\n  color: #ff6d33;\n}\n.belt .belt-list .belt-list--shop .sightcing {\n  background-color: #5858de;\n  height: 200px;\n  color: white;\n  padding: 20px 30px;\n}\n.belt .belt-list .belt-list--shop .sightcing i {\n  color: white;\n}\n.belt .belt-list .belt-list--shop .sightcing .sightcing--title {\n  font-size: 24px;\n}\n.belt .belt-list .belt-list--shop .sightcing .sightcing--left {\n  float: left;\n  width: 290px;\n  font-size: 18px;\n}\n.belt .belt-list .belt-list--shop .sightcing .sightcing--midle {\n  padding-left: 63px;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  box-sizing: border-box;\n  width: 600px;\n  float: left;\n  height: 160px;\n}\n.belt .belt-list .belt-list--shop .sightcing .sightcing--right {\n  float: left;\n  padding-left: 92px;\n}\n.belt .belt-list .belt-list--shop .sightcing .sightcing--right .qr-code {\n  width: 100px;\n  font-size: 12px;\n  line-height: 20px;\n}\n.belt .belt-list .belt-list--shop .sightcing .sightcing--right .qr-code img {\n  width: 100px;\n  height: 100px;\n}\n.belt .belt-footer {\n  height: 200px;\n  background-color: #e5e5e5;\n  font-size: 16px;\n  line-height: 1.5;\n  padding-top: 50px;\n  text-align: center;\n  color: #666;\n}\n.belt .belt-footer a {\n  color: #666;\n  padding: 0 10px;\n}\n.belt .belt-footer a:hover {\n  color: #ff6d33;\n}\n.belt .belt-footer ul {\n  display: inline-block;\n}\n.belt .belt-footer ul li {\n  float: left;\n}\n.belt .nav-bar {\n  position: fixed;\n  width: 160px;\n  right: 20px;\n  display: none;\n  top: 50px;\n  opacity: 0;\n  transition: opacity ease 1s;\n  color: white;\n}\n.belt .nav-bar .nav-top {\n  padding-top: 15px;\n  margin-bottom: 20px;\n  background-color: #5858de;\n}\n.belt .nav-bar .nav-top img {\n  width: 130px;\n  height: 130px;\n  display: block;\n  margin-left: 15px;\n}\n.belt .nav-bar .nav-top div.text-center {\n  font-size: 24px;\n  padding: 5px;\n  background-color: #fafafa;\n}\n.belt .nav-bar .nav-top div.text-center a {\n  color: #666;\n}\n.belt .nav-bar .nav-top div.text-center:hover {\n  cursor: pointer;\n}\n.belt .nav-bar .nav-top div.text-center:hover a {\n  color: #ff6d33;\n}\n.belt .nav-bar .nav-top div.text-center:hover + .tuopan {\n  border-color: #ff6d33;\n}\n.belt .nav-bar .nav-top .tuopan {\n  margin: 0 20px;\n  height: 4px;\n  background: #fafafa;\n  border: 1px solid #666;\n  border-top: none;\n}\n.belt .nav-bar .nav-top p {\n  margin: 5px 0;\n}\n.belt .nav-bar .nav-bottom {\n  height: 130px;\n  cursor: pointer;\n  padding: 30px 0;\n  box-sizing: border-box;\n  background-color: #5858de;\n}\n.belt .nav-bar .nav-bottom i {\n  font-size: 24px;\n  transform: rotate(180deg);\n}\n", ""]);

	// exports


/***/ },
/* 7 */
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
/* 8 */
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