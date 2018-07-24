/** create by songbw 2018/4/19 */

function deepClone(arr) {
  if (typeof arr !== "object") {
    return arr
  }

  let result =  arr instanceof Array ? [] : {}

  for (let i in arr) {
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
      
        if(immidiate){
            fn && fn.apply(context, arg)
            immidiate = false
            return
        }
      
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(function() {
          fn && fn.apply(context, arg)
        }, delay)
    }
}

function ENUM(obj) {
    let type = Object.prototype.toString.call(obj)
    let newObj = {}

    switch (type) {
        case '[object Object]': {
            for (let key in obj) {
                let val = obj[key]

                newObj[key] = val
                newObj[val] = key
            }
        }
            break;
        case '[object Array]': {
            for (let i = 0, l = obj.length; i < l; i++) {
                let val = obj[i]

                newObj[i] = val
                newObj[val] = i
            }
        }
            break;
        default: throw new Error('参数1的数据类型必须为Object | Array')
    }

    return newObj
}
