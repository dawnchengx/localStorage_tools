/* 
 *  name:   localstorage tools
 *  author: dawnchengx
*/
(function(root, factory){
    root.localstorate_tools = factory(root);
})(typeof global !== "undefined" ? global : this.window || this.global,  function (root) {
    root.LS_NOFIND = -3;
    root.LS_SUCCESS = 0;
    var localstorate_tools = {
        // 判断缓存是否过期
        checkCache : function(key, time, condition){
            if('undefined' == typeof key) { console.log('未传key'); return -1;}
            if('undefined' == typeof condition) { console.log('未传condition'); return -2;}
            if('undefined' == typeof time) {
                time = parseInt( (new Date().getTime()) / 1000 )
            }
            var ls_value = localStorage.getItem(key);
            ls_value = JSON.parse(ls_value);
            if(null == ls_value) { console.log('localStorage不存在该数据'); return -3;}
            switch(condition){
                default:
                    console.log('不支持这个判断，请输入> | >= | == | <= | <');
                    return -4;
                    break;
                case '>': case '>=': case '==': case '<=': case '<':
                    if( eval('time '+condition+' ls_value.c') ){
                        return 0;
                    }
                    return -5;
                    break;
            }
        },
        // 写入带时间的缓存
        addCache : function(key, value, created_at){
            if('undefined' == typeof key) { console.log('未传key'); return false;}
            if('undefined' == typeof value) { console.log('未传value'); return false;}
            if('undefined' == typeof created_at) {
                created_at = parseInt( (new Date().getTime()) / 1000 )
            }

            var data = '{"d":"'+ value +'", "c":'+created_at+'}';
            localStorage.setItem(key, data);
            return true;
        },
        // 取出带时间的缓存
        getCache : function(key){
            if('undefined' == typeof key) { console.log('未传key'); return false;}
            var value = JSON.parse(localStorage.getItem(key));
            return value.d;
        },
        // 当前时间或传入时间 大于 缓存时间，删除对应元素
        delCacheByTime : function(key, time){
            if('undefined' == typeof key) { console.log('未传key'); return false;}
            if('undefined' == typeof created_at) {
                created_at = parseInt( (new Date().getTime()) / 1000 )
            }
            if( 0 == this.checkCache(key, time, '>' ) ){
                localStorage.removeItem(key);
            }
        }
    }
    return localstorate_tools;
})