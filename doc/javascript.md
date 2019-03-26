transferUrl(url, params)
* 参数  
{String} url  
{Array} params
* 用法  
拼接url, 在url后面拼参数，例如：/test  =>  /test/1
* 示例
```
let url = transferUrl('/test', [1, 2, 3])
console.log(url) // "/test/1/2/3"
```

