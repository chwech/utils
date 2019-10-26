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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cookie.ts":
/*!***********************!*\
  !*** ./src/cookie.ts ***!
  \***********************/
/*! exports provided: Cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cookie\", function() { return Cookie; });\nvar Cookie = /** @class */ (function () {\r\n    function Cookie() {\r\n    }\r\n    //获取cookie\r\n    Cookie.prototype.get = function (name) {\r\n        var cookieName = encodeURIComponent(name) + \"=\", cookieStart = document.cookie.indexOf(cookieName), cookieValue = null;\r\n        if (cookieStart > -1) {\r\n            var cookieEnd = document.cookie.indexOf(\";\", cookieStart);\r\n            if (cookieEnd == -1) {\r\n                cookieEnd = document.cookie.length;\r\n            }\r\n            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));\r\n        }\r\n        return cookieValue;\r\n    };\r\n    //设置cookie\r\n    Cookie.prototype.set = function (name, value, expires, path, domain, secure) {\r\n        var cookieText = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\r\n        if (expires instanceof Date) {\r\n            cookieText += \"; expires\" + expires.toUTCString();\r\n        }\r\n        if (path) {\r\n            cookieText += \"; path\" + path;\r\n        }\r\n        if (domain) {\r\n            cookieText += \"; domain\" + domain;\r\n        }\r\n        if (secure) {\r\n            cookieText += \"; secure\";\r\n        }\r\n        document.cookie = cookieText;\r\n    };\r\n    //删除cookie\r\n    Cookie.prototype.unset = function (name, path, domain, secure) {\r\n        this.set(name, \"\", new Date(0), path, domain, secure);\r\n    };\r\n    return Cookie;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://cwcUtil/./src/cookie.ts?");

/***/ }),

/***/ "./src/font.ts":
/*!*********************!*\
  !*** ./src/font.ts ***!
  \*********************/
/*! exports provided: isSupportFontFamily */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSupportFontFamily\", function() { return isSupportFontFamily; });\n/**\r\n * 判断浏览器是否支持某字体\r\n * @param {String} fontFamily\r\n * @return {Boolean}\r\n */\r\nvar isSupportFontFamily = function (fontFamily) {\r\n    if (typeof fontFamily != \"string\") {\r\n        return false;\r\n    }\r\n    var defaultFontFamily = \"Arial\";\r\n    if (fontFamily.toLowerCase() == defaultFontFamily.toLowerCase()) {\r\n        return true;\r\n    }\r\n    var defaultLetter = \"a\";\r\n    var defaultFontSize = 100;\r\n    // 使用该字体绘制的canvas\r\n    var width = 100, height = 100;\r\n    var canvas = document.createElement(\"canvas\");\r\n    var context = canvas.getContext(\"2d\");\r\n    canvas.width = width;\r\n    canvas.height = height;\r\n    if (!context) {\r\n        return false;\r\n    }\r\n    // 全局一致的绘制设定\r\n    context.textAlign = \"center\";\r\n    context.fillStyle = \"black\";\r\n    context.textBaseline = \"middle\";\r\n    var getFontData = function (fontFamily) {\r\n        if (!context) {\r\n            return [];\r\n        }\r\n        // 清除\r\n        context.clearRect(0, 0, width, height);\r\n        // 设置字体\r\n        context.font =\r\n            defaultFontSize + \"px \" + fontFamily + \", \" + defaultFontFamily;\r\n        context.fillText(defaultLetter, width / 2, height / 2);\r\n        var data = context.getImageData(0, 0, width, height).data;\r\n        return [].slice.call(data).filter(function (value) {\r\n            return value != 0;\r\n        });\r\n    };\r\n    return (getFontData(defaultFontFamily).join(\"\") !== getFontData(fontFamily).join(\"\"));\r\n};\r\n\r\n\n\n//# sourceURL=webpack://cwcUtil/./src/font.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Cookie, noop, transferUrl, serializeQueryStr, getQueryString, toType, filterNull, isSupportFontFamily */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"noop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transferUrl\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"transferUrl\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"serializeQueryStr\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"serializeQueryStr\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"getQueryString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toType\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"toType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterNull\", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__[\"filterNull\"]; });\n\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie */ \"./src/cookie.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cookie\", function() { return _cookie__WEBPACK_IMPORTED_MODULE_1__[\"Cookie\"]; });\n\n/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ \"./src/font.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSupportFontFamily\", function() { return _font__WEBPACK_IMPORTED_MODULE_2__[\"isSupportFontFamily\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cwcUtil/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: noop, transferUrl, serializeQueryStr, getQueryString, toType, filterNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return noop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transferUrl\", function() { return transferUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serializeQueryStr\", function() { return serializeQueryStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return getQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toType\", function() { return toType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterNull\", function() { return filterNull; });\n/**\r\n * 空函数\r\n */\r\nfunction noop() { }\r\n/**\r\n * 拼接url, 在url后面拼参数，例如：/test  =>  /test/1\r\n * @export\r\n * @param {String} url\r\n * @param {Array} params\r\n * @returns url\r\n */\r\nfunction transferUrl(url, params) {\r\n    if (Array.isArray(params)) {\r\n        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {\r\n            var param = params_1[_i];\r\n            url += \"/\" + param;\r\n        }\r\n    }\r\n    return url;\r\n}\r\n/**\r\n * 将一个对象序列化成查询字符串\r\n * @export\r\n * @param {Object} params\r\n * @param {Object} [sep='&'] 键值对之间的分隔符\r\n * @returns {String} 返回查询字符串，如：'?key1=value1&key2=value2'\r\n */\r\nfunction serializeQueryStr(params, sep) {\r\n    if (sep === void 0) { sep = '&'; }\r\n    var queryString = '?';\r\n    var paramsArray = [];\r\n    for (var _i = 0, _a = Object.entries(params); _i < _a.length; _i++) {\r\n        var _b = _a[_i], key = _b[0], value = _b[1];\r\n        paramsArray.push(encodeURIComponent(key) + \"=\" + encodeURIComponent(value));\r\n    }\r\n    queryString += paramsArray.join(sep);\r\n    return queryString;\r\n}\r\n/**\r\n * 获取查询字符串某个key的value\r\n * @export\r\n * @param {String} name 某个键值对的key\r\n * @returns 返回对应的value，如果获取不到，返回null\r\n */\r\nfunction getQueryString(name) {\r\n    var reg = new RegExp(\"(^|&)\" + name + \"=([^&]*)(&|$)\", \"i\");\r\n    var r = location.search.substr(1).match(reg);\r\n    if (r != null)\r\n        return unescape(r[2]);\r\n    return null;\r\n}\r\n/**\r\n * 判断数据类型\r\n * @author chwech\r\n * @date 2019-10-25\r\n * @export\r\n * @param {Object} obj 要判断的变量\r\n * @returns {(string | null)} 返回类型\r\n */\r\nfunction toType(obj) {\r\n    var match = ({}).toString.call(obj).match(/\\s([a-zA-Z]+)/);\r\n    if (match) {\r\n        return match[1].toLowerCase();\r\n    }\r\n    else {\r\n        return match;\r\n    }\r\n}\r\n// 参数过滤函数\r\nfunction filterNull(o) {\r\n    for (var key in o) {\r\n        if (o[key] === null) {\r\n            delete o[key];\r\n        }\r\n        if (toType(o[key]) === 'string') {\r\n            o[key] = o[key].trim();\r\n        }\r\n        else if (toType(o[key]) === 'object') {\r\n            o[key] = filterNull(o[key]);\r\n        }\r\n        else if (toType(o[key]) === 'array') {\r\n            o[key] = filterNull(o[key]);\r\n        }\r\n    }\r\n    return o;\r\n}\r\n\n\n//# sourceURL=webpack://cwcUtil/./src/utils.ts?");

/***/ })

/******/ });
});