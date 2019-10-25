class Cookie {
  constructor() {}
  //获取cookie
  get(name: string): string | null {
    var cookieName: string = encodeURIComponent(name) + "=",
      cookieStart: number = document.cookie.indexOf(cookieName),
      cookieValue: string | null = null;

    if (cookieStart > -1) {
      var cookieEnd: number = document.cookie.indexOf(";", cookieStart);
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
  set(name: string, value: string, expires: Date, path: string, domain: string, secure: string): void {
    var cookieText: string = encodeURIComponent(name) + "=" + encodeURIComponent(value);

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
  }
  //删除cookie
  unset(name: string, path: string, domain: string, secure: string): void {
    this.set(name, "", new Date(0), path, domain, secure);
  }
}

export { Cookie };
