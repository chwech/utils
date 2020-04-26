
export function joinScopeUrl (appId: string, redirectUri: string, state: string, scope = 'snsapi_userinfo'): string {
  let url = `https://open.weixin.qq.com/connect/oauth2/authorize?`
  url += `appid=${appId}&`
  url += `redirect_uri=${encodeURIComponent(redirectUri)}&`
  url += `response_type=code&`
  url += `scope=${scope}&`

  if (state) {
    url += `state=${state}`
  }

  url += `#wechat_redirect`
  
  return url
}