(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cwcUtil"] = factory();
	else
		root["cwcUtil"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Cookie, noop, transferUrl, serializeQueryStr, getQueryString, toType, filterNull, isSupportFontFamily */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utils.js */ \"./js/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return _js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transferUrl\", function() { return _js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"transferUrl\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"serializeQueryStr\", function() { return _js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"serializeQueryStr\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return _js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"getQueryString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toType\", function() { return _js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"toType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterNull\", function() { return _js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"filterNull\"]; });\n\n/* harmony import */ var _js_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/cookie.js */ \"./js/cookie.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cookie\", function() { return _js_cookie_js__WEBPACK_IMPORTED_MODULE_1__[\"Cookie\"]; });\n\n/* harmony import */ var _js_font_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/font.js */ \"./js/font.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSupportFontFamily\", function() { return _js_font_js__WEBPACK_IMPORTED_MODULE_2__[\"isSupportFontFamily\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack://cwcUtil/./index.js?");

/***/ }),

/***/ "./js/cookie.js":
/*!**********************!*\
  !*** ./js/cookie.js ***!
  \**********************/
/*! exports provided: Cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cookie\", function() { return Cookie; });\nclass Cookie {\n  constructor() {}\n  //获取cookie\n  get(name) {\n    var cookieName = encodeURIComponent(name) + \"=\",\n      cookieStart = document.cookie.indexOf(cookieName),\n      cookieValue = null;\n\n    if (cookieStart > -1) {\n      var cookieEnd = document.cookie.indexOf(\";\", cookieStart);\n      if (cookieEnd == -1) {\n        cookieEnd = document.cookie.length;\n      }\n      cookieValue = decodeURIComponent(\n        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)\n      );\n    }\n\n    return cookieValue;\n  }\n  //设置cookie\n  set(name, value, expires, path, domain, secure) {\n    var cookieText = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\n\n    if (expires instanceof Date) {\n      cookieText += \"; expires\" + expires.toGMTString();\n    }\n    if (path) {\n      cookieText += \"; path\" + path;\n    }\n    if (domain) {\n      cookieText += \"; domain\" + domain;\n    }\n    if (secure) {\n      cookieText += \"; secure\";\n    }\n\n    document.cookie = cookieText;\n  }\n  //删除cookie\n  unset(name, path, domain, secure) {\n    this.set(name, \"\", new Date(0), path, domain, secure);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://cwcUtil/./js/cookie.js?");

/***/ }),

/***/ "./js/font.js":
/*!********************!*\
  !*** ./js/font.js ***!
  \********************/
/*! exports provided: isSupportFontFamily */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSupportFontFamily\", function() { return isSupportFontFamily; });\n/**\n * 判断浏览器是否支持某字体\n * @param {String} fontFamily\n * @return {Boolean} \n */\nvar isSupportFontFamily = function(fontFamily) {\n  if (typeof fontFamily != \"string\") {\n    return false;\n  }\n\n  var defaultFontFamily = \"Arial\";\n  if (fontFamily.toLowerCase() == defaultFontFamily.toLowerCase()) {\n    return true;\n  }\n\n  var defaultLetter = \"a\";\n  var defaultFontSize = 100;\n\n  // 使用该字体绘制的canvas\n  var width = 100,\n    height = 100;\n  var canvas = document.createElement(\"canvas\");\n  var context = canvas.getContext(\"2d\");\n  canvas.width = width;\n  canvas.height = height;\n  // 全局一致的绘制设定\n  context.textAlign = \"center\";\n  context.fillStyle = \"black\";\n  context.textBaseline = \"middle\";\n  var getFontData = function(fontFamily) {\n    // 清除\n    context.clearRect(0, 0, width, height);\n    // 设置字体\n    context.font =\n      defaultFontSize + \"px \" + fontFamily + \", \" + defaultFontFamily;\n    context.fillText(defaultLetter, width / 2, height / 2);\n\n    var data = context.getImageData(0, 0, width, height).data;\n\n    return [].slice.call(data).filter(function(value) {\n      return value != 0;\n    });\n  };\n\n  return (\n    getFontData(defaultFontFamily).join(\"\") !== getFontData(fontFamily).join(\"\")\n  );\n};\n\n\n\n\n//# sourceURL=webpack://cwcUtil/./js/font.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: noop, transferUrl, serializeQueryStr, getQueryString, toType, filterNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return noop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transferUrl\", function() { return transferUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serializeQueryStr\", function() { return serializeQueryStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return getQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toType\", function() { return toType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterNull\", function() { return filterNull; });\n/**\r\n * 空函数\r\n */\r\nfunction noop () {}\r\n\r\n/**\r\n * 拼接url, 在url后面拼参数，例如：/test  =>  /test/1\r\n * @export\r\n * @param {String} url\r\n * @param {Array} params\r\n * @returns url\r\n */\r\nfunction transferUrl (url, params) {\r\n  if (Array.isArray(params)) {\r\n    for (let param of params) {\r\n      url += `/${param}`\r\n    }\r\n  }\r\n  return url\r\n}\r\n\r\n/**\r\n * 将一个对象序列化成查询字符串\r\n * @export\r\n * @param {Object} params\r\n * @param {Object} [sep='&'] 键值对之间的分隔符 \r\n * @returns {String} 返回查询字符串，如：'?key1=value1&key2=value2'\r\n */\r\nfunction serializeQueryStr (params, sep = '&') {\r\n  let queryString = '?'\r\n  let paramsArray = []\r\n  for (let [key, value] of Object.entries(params)) {\r\n    paramsArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)\r\n  }\r\n  queryString += paramsArray.join(sep)\r\n  return queryString\r\n}\r\n\r\n/**\r\n * 获取查询字符串某个key的value\r\n * @export\r\n * @param {String} name 某个键值对的key\r\n * @returns 返回对应的value，如果获取不到，返回null\r\n */\r\nfunction getQueryString(name) {\r\n  var reg = new RegExp(\"(^|&)\" + name + \"=([^&]*)(&|$)\", \"i\");\r\n  var r = location.search.substr(1).match(reg);\r\n  if (r != null) return unescape(r[2]);\r\n  return null;\r\n}\r\n\r\n// 自定义判断元素类型JS\r\nfunction toType(obj) {\r\n  return ({}).toString.call(obj).match(/\\s([a-zA-Z]+)/)[1].toLowerCase()\r\n}\r\n\r\n// 参数过滤函数\r\nfunction filterNull(o) {\r\n  for (var key in o) {\r\n    if (o[key] === null) {\r\n      delete o[key]\r\n    }\r\n    if (toType(o[key]) === 'string') {\r\n      o[key] = o[key].trim()\r\n    } else if (toType(o[key]) === 'object') {\r\n      o[key] = filterNull(o[key])\r\n    } else if (toType(o[key]) === 'array') {\r\n      o[key] = filterNull(o[key])\r\n    }\r\n  }\r\n  return o\r\n}\n\n//# sourceURL=webpack://cwcUtil/./js/utils.js?");

/***/ })

/******/ });
});