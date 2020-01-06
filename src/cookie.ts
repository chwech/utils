
/**
 * cookie操作
 * @author chwech
 * @date 2020-01-06
 * @class Cookie
 */
class Cookie {
  constructor() {}
  /**
   * 获取cookie
   * @date 2020-01-06
   * @param {string} name
   * @returns {(string | null)}
   * @memberof Cookie
   */
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
  
  /**
   *
   * 设置cookie
   * @date 2020-01-06
   * @param {string} name
   * @param {string} value
   * @param {Date} expires
   * @param {string} path
   * @param {string} domain
   * @param {string} secure
   * @memberof Cookie
   */
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

  /**
   *
   * 删除cookie
   * @date 2020-01-06
   * @param {string} name
   * @param {string} path
   * @param {string} domain
   * @param {string} secure
   * @memberof Cookie
   */
  unset(name: string, path: string, domain: string, secure: string): void {
    this.set(name, "", new Date(0), path, domain, secure);
  }
}

export { Cookie };
