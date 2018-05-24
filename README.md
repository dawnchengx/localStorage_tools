# localstorge_tools
localstorage工具

支持函数：

dawn_ls_tools.checkCache('键', '传入的时间和localstorage之间的关系（> | >= | == | <= | <）', '要比对的时间（时间戳，不传表示当前时间）' )  // 判断缓存是否过期

dawn_ls_tools.addCache('键', '值', '存入的时间（时间戳，不传表示当前时间）') // 存值

dawn_ls_tools.getCache('键') // 取值

dawn_ls_tools.delCacheByTime('键', '传入时间（时间戳，不传表示当前时间）') // 当前时间或传入时间 大于 缓存时间，删除对应元素
        

返回值：
假设当前是chrome浏览器
root = window
root.LS_TRUE = 0;
root.LS_NO_PASS_KEY = -1;
root.LS_NO_PASS_CONDITION = -2;
root.LS_NOFIND = -3;
root.LS_NO_MATCH = -4;
root.LS_FALSE = -5;
root.LS_NO_PASS_VALUE = -6;

示例：
var today_0 = new Date(new Date().setHours(0, 0, 0, 0)) / 1000; // 获取今天零点时间
var tomorrow_0 = today_0 + 86400; // 获取明天零点时间
localstorate_tools.addCache('dawnchengx', 'hello wolrd', tomorrow_0); // 添加缓存，并设置存储时间为 明天0点
console.log(localstorate_tools.getCache('dawnchengx')) ; // 打印之前存储的时间
localstorate_tools.delCacheByTime('a'); // 由于当前时间小于 明天零点，所以不会删除
