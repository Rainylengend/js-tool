/** create by songbw 2018/4/19 */

;(function (global, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory)
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory()
    } else {
        global.R = factory()
    }
})(this, function () {
    'use strict'

    function R() {
    }

    R.fn = R.prototype

    R.fn.deepClone = function (arr) {
        if (typeof arr !== "object") {
            return arr
        }

        var result = arr instanceof Array ? [] : {}

        for (var i in arr) {
            result[i] = deepClone(arr[i])
        }
        return result;
    }

    R.fn.throttle = function (fn, wait) {
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

    R.fn.debounce = function (fn, delay, immidiate) {
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

    R.fn.formatDate = function (val, format, joiner) {
        var year, month, date, hour, minutes, seconds, _date, formatDate
        var reYY = /yy/g
        var reMM = /mm/g
        var reDD = /dd/g
        var reHH = /hh/g
        var reMin = /min/g
        var reSS = /ss/g
        var reJoin = /-/g

        function addZero(val) {
            if (val < 10) {
                val = '0' + val
            }
            return val
        }
        
        format = format || 'yy-mm-dd hh:min:ss'
        joiner = joiner || '-'
        _date = new Date(val)
        
        year = _date.getFullYear()
        month = addZero(_date.getMonth() + 1)
        date = addZero(_date.getDate())
        hour = addZero(_date.getHours())
        minutes = addZero(_date.getMinutes())
        seconds = addZero(_date.getSeconds())

        formatDate = format.replace(reYY, year)
            .replace(reMM, month)
            .replace(reDD, date)
            .replace(reHH, hour)
            .replace(reMin, minutes)
            .replace(reSS, seconds)

        if(joiner !== '-'){
            formatDate = formatDate.replace(reJoin, joiner)
        }
        return formatDate
    }

    R.fn.ENUM = function (obj) {
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
    return new R()
});
