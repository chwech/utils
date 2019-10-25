(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cookie = /** @class */ (function () {
        function Cookie() {
        }
        //获取cookie
        Cookie.prototype.get = function (name) {
            var cookieName = encodeURIComponent(name) + "=", cookieStart = document.cookie.indexOf(cookieName), cookieValue = null;
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        };
        //设置cookie
        Cookie.prototype.set = function (name, value, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            if (expires instanceof Date) {
                cookieText += "; expires" + expires.toUTCString();
            }
            if (path) {
                cookieText += "; path" + path;
            }
            if (domain) {
                cookieText += "; domain" + domain;
            }
            if (secure) {
                cookieText += "; secure";
            }
            document.cookie = cookieText;
        };
        //删除cookie
        Cookie.prototype.unset = function (name, path, domain, secure) {
            this.set(name, "", new Date(0), path, domain, secure);
        };
        return Cookie;
    }());
    exports.Cookie = Cookie;
});
