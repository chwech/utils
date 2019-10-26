class Store {
  /**
   *
   * @author chwech
   * @date 2019-10-26
   * @param {string} name 缓存的键名，支持"wechat.user.name"格式来获取值，前提是缓存值是一个JSON字符串
   * @returns 
   * @memberof Store
   */
  getStore (name: string) { 
		let timestamp = Date.parse(new Date().toUTCString()) / 1000 // 时间戳 秒为单位
		if (!name) return;
		let key: string = name.split('.')[0],
			value: string = '';
		if (window.localStorage) {
      let strVal: string = window.localStorage.getItem(key) as string
			value = window.localStorage.getItem(key) === null ? '' : strVal
    }
    
		try {
			let val = JSON.parse(value)
			if (val._endtime && timestamp > val._endtime) return; // 已过期
			if (!val.hasOwnProperty('data')) return;
			val = val.data
			name.split('.').forEach((segment, index) => {
				if (index > 0) {
					if (val.hasOwnProperty(segment)) {
						val = val[segment]
					} else {
						val = false
					}
				}
			});
			return val;
		} catch (e) {
			return false;
		}
	}
}
