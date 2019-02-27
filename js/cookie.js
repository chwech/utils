class Cookie {
  constructor() {}
  //获取cookie
  get(name) {
    var cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;

    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
    }

    return cookieValue;
  }
  //设置cookie
  set(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    if (expires instanceof Date) {
      cookieText += "; expires" + expires.toGMTString();
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
  }
  //删除cookie
  unset(name, path, domain, secure) {
    this.set(name, "", new Date(0), path, domain, secure);
  }
}

export { Cookie };
