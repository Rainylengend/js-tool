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

    R.fn.getDataType = function (type) {
        var val = Object.prototype.toString.call(type)
        switch (val) {
            case '[object Array]':
                return 'Array';
            case '[object Number]':
                return 'Number';
            case '[object Null]':
                return 'Null';
            case '[object String]':
                return 'String';
            case '[object Boolean]':
                return 'Boolean';
            case '[object Object]':
                return 'Object';
            case '[object Undefined]':
                return 'Undefined';
        }
    }

    R.fn.deepClone = function (arr) {
        if (typeof arr !== "object") {
            return arr
        }

        var result = arr instanceof Array ? [] : {}

        for (var i in arr) {
            result[i] = this.deepClone(arr[i])
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

    R.fn.formatDate = function (val, format, dateDetails) {
        var year, month, date, hour, minutes, seconds, _date, formatDate
        var reYY = /yy/g
        var reMM = /mm/g
        var reDD = /dd/g
        var reHH = /hh/g
        var reMin = /min/g
        var reSS = /ss/g

        function addZero(val) {
            return val < 10 ? '0' + val : val
        }


        _date = val ? new Date(val) : new Date()

        year = _date.getFullYear()
        month = addZero(_date.getMonth() + 1)
        date = addZero(_date.getDate())
        hour = addZero(_date.getHours())
        minutes = addZero(_date.getMinutes())
        seconds = addZero(_date.getSeconds())

        if (dateDetails) {
            return {
                year: year,
                month: month,
                date: date,
                hour: hour,
                minutes: minutes,
                seconds: seconds
            }
        }

        format = format || 'yy-mm-dd hh:min:ss'
        formatDate = format.replace(reYY, year)
            .replace(reMM, month)
            .replace(reDD, date)
            .replace(reHH, hour)
            .replace(reMin, minutes)
            .replace(reSS, seconds)

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
