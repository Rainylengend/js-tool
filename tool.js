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
