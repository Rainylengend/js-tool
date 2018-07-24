/** create by songbw 2018/4/19 */

;(function (global, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory)
    }else if (typeof module === 'object' && typeof module.exports === 'object'){
        module.exports = factory()
    }else{
        global.R = factory()
    }
})(this, function () {
    'use strict'
    function deepClone(arr) {
        if (typeof arr !== "object") {
            return arr
        }

        var result = arr instanceof Array ? [] : {}

        for (var i in arr) {
            result[i] = deepClone(arr[i])
        }
        return result;
    }

    function throttle(fn, wait) {
        var timer = null
        var now, pre, context, arg

        function later() {
            clear()
            fn && fn.apply(context, arg)
        }

        function clear() {
            clearTimeout(timer)
            timer = null
        }

        return function () {
            var remaining

            context = this
            now = Date.now()
            arg = arguments

            if (!pre) pre = Date.now()
            remaining = wait - now + pre

            if (remaining <= 0 || remaining >= wait) {
                if (timer) {
                    clear()
                }
                pre = now
                fn && fn.apply(context, arg)
            } else {
                clear()
                timer = setTimeout(later, remaining)
            }
        }
    }

    function debounce(fn, delay, immidiate) {
        var timer = null

        return function () {
            var context = this
            var arg = arguments

            if (timer) {
                clearTimeout(timer)
            }

            if (immidiate && !timer) {
                fn && fn.apply(context, arg)
                timer = setTimeout(function () {
                    clearTimeout(timer)
                    timer = null
                }, delay)
                return
            }


            timer = setTimeout(function () {
                clearTimeout(timer)
                timer = null
                fn && fn.apply(context, arg)
            }, delay)
        }
    }

    function ENUM(obj) {
        var type = Object.prototype.toString.call(obj)
        var newObj = {}

        switch (type) {
            case '[object Object]': {
                for (var key in obj) {
                    var val = obj[key]

                    newObj[key] = val
                    newObj[val] = key
                }
            }
                break;
            case '[object Array]': {
                for (var i = 0, l = obj.length; i < l; i++) {
                    var val = obj[i]

                    newObj[i] = val
                    newObj[val] = i
                }
            }
                break;
            default:
                throw new Error('参数1的数据类型必须为Object | Array')
        }

        return newObj
    }

    return {
        deepClone: deepClone,
        throttle: throttle,
        debounce: debounce,
        ENUM: ENUM
    }
});
