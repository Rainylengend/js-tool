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