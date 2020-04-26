import { joinScopeUrl } from './wx.ts'

it('正确拼接微信授权url', () => {
  const result = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
  const res = joinScopeUrl('wxf0e81c3bee622d60', 'http://nba.bluewebgame.com/oauth_response.php', 'STATE')
  expect(res).toBe(result)

  const result1 = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
  const res1 = joinScopeUrl('wx520c15f417810387', 'https://chong.qq.com/php/index.php?d=&c=wxAdapter&m=mobileDeal&showwxpaytitle=1&vb2ctag=4_2030_5_1194_60', '123', 'snsapi_base')
  expect(res1).toBe(result1)

})