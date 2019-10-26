<a href="https://npmcharts.com/compare/@chwech/utils?interval=1">
  <img src="https://img.shields.io/npm/dt/@chwech/utils.svg" alt="Downloads">
</a>
<a href="https://www.npmjs.com/package/@chwech/utils">
  <img src="https://img.shields.io/npm/v/@chwech/utils" alt="Version">
</a>

平时工作中用到的一些常用工具函数和样式

## 文档
### js工具
transferUrl(url, params)
* 参数  
{String} url  
{Array} params
* 用法  
拼接url, 在url后面拼参数，例如：/test  =>  /test/1
* 示例
``` javascript
let url = transferUrl('/test', [1, 2, 3])
console.log(url) // "/test/1/2/3"
```

### less
