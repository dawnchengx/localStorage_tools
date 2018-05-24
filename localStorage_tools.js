/* 
 *  name:   localstorage tools
 *  author: dawnchengx
*/
(function(root, factory){
    root.dawn_ls_tools = factory(root);
})(typeof global !== "undefined" ? global : this.window || this.global,  function (root) {
    root.LS_TRUE = 0;
    root.LS_NO_PASS_KEY = -1;
    root.LS_NO_PASS_CONDITION = -2;
    root.LS_NOFIND = -3;
    root.LS_NO_MATCH = -4;
    root.LS_FALSE = -5;
    root.LS_NO_PASS_VALUE = -6;
    
    var dawn_ls_tools = {
        // 判断缓存是否过期
        checkCache : function(key, condition, time ){
            if('undefined' == typeof key) { console.log('未传key'); return LS_NO_PASS_KEY;}
            if('undefined' == typeof condition) { console.log('未传condition'); return LS_NO_PASS_CONDITION;}
            if('undefined' == typeof time) {
                time = parseInt( (new Date().getTime()) / 1000 )
            }
            var ls_value = localStorage.getItem(key);
            ls_value = JSON.parse(ls_value);
            if(null == ls_value) { console.log('localStorage不存在该数据'); return LS_NOFIND;}
            switch(condition){
                default:
                    console.log('不支持这个判断，请输入> | >= | == | <= | <');
                    return LS_NO_MATCH;
                    break;
                case '>': case '>=': case '==': case '<=': case '<':
                    if( eval('time '+condition+' ls_value.c') ){
                        return LS_TRUE;
                    }
                    return LS_FALSE;
                    break;
            }
        },
        // 写入带时间的缓存
        addCache : function(key, value, created_at){
            if('undefined' == typeof key) { console.log('未传key'); return LS_NO_PASS_KEY;}
            if('undefined' == typeof value) { console.log('未传value'); return LS_NO_PASS_VALUE;}
            if('undefined' == typeof created_at) {
                created_at = parseInt( (new Date().getTime()) / 1000 )
            }

            var data = '{"d":"'+ value +'", "c":'+created_at+'}';
            localStorage.setItem(key, data);
            return true;
        },
        // 取出带时间的缓存
        getCache : function(key){
            if('undefined' == typeof key) { console.log('未传key'); return LS_NO_PASS_KEY;}
            var value = JSON.parse(localStorage.getItem(key));
            return value.d;
        },
        // 当前时间或传入时间 大于 缓存时间，删除对应元素
        delCacheByTime : function(key, time){
            if('undefined' == typeof key) { console.log('未传key'); return LS_NO_PASS_KEY;}
            if('undefined' == typeof created_at) {
                created_at = parseInt( (new Date().getTime()) / 1000 )
            }
            if( LS_TRUE == this.checkCache(key, '>', time ) ){
                localStorage.removeItem(key);
            }
        }
    }
    return dawn_ls_tools;
})