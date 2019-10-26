/**
 * 空函数
 */
export function noop (): void {}

/**
 * 拼接url, 在url后面拼参数，例如：/test  =>  /test/1
 * @export
 * @param {String} url
 * @param {Array} params
 * @returns url
 */
export function transferUrl (url: string, params: []): string {
  if (Array.isArray(params)) {
    for (let param of params) {
      url += `/${param}`
    }
  }
  return url
}

/**
 * 将一个对象序列化成查询字符串
 * @export
 * @param {Object} params
 * @param {Object} [sep='&'] 键值对之间的分隔符 
 * @returns {String} 返回查询字符串，如：'?key1=value1&key2=value2'
 */
export function serializeQueryStr (params: Object, sep = '&'): string {
  let queryString: string = '?'
  let paramsArray: string[] = []
  for (let [key, value] of Object.entries(params)) {
    paramsArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  }
  queryString += paramsArray.join(sep)
  return queryString
}

/**
 * 获取查询字符串某个key的value
 * @export
 * @param {String} name 某个键值对的key
 * @returns 返回对应的value，如果获取不到，返回null
 */
export function getQueryString(name: string): string | null {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

/**
 * 判断数据类型
 * @author chwech
 * @date 2019-10-25
 * @export
 * @param {Object} obj 要判断的变量
 * @returns {(string | null)} 返回类型
 */
export function toType(obj: Object): string | null {
  const match = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)
  if (match) {
    return match[1].toLowerCase()
  } else {
    return match
  }
}

interface plainObject {
  [key: string]: any
}
// 参数过滤函数
export function filterNull(o: plainObject): plainObject {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}