//判断数据是否是对象
export function isObject(input: any) {
  return Object.prototype.toString.call(input) === '[object Object]'
}

//判断数据是否是数组
export function isArray(input: any) {
  if (!Array.isArray) {
    return Object.prototype.toString.call(input) === '[object Array]';
  } else {
    return Array.isArray(input)
  }
}

//判断是否为空
export function isEmpty(input: any) {
  if (isObject(input)) {
    return Object.keys(input).length === 0
  } else if (isArray(input)) {
    return input.length === 0
  } else {
    return !input && input !== 0
  }
}

//判断当前时间段
export function getTimePeriod() {
  const nowTime = new Date();
  const nowHours = nowTime.getHours();
  if ((0 <= nowHours && nowHours < 6) || (20 <= nowHours && nowHours <= 23)) {
    return '晚上'
  } else if (6 <= nowHours && nowHours < 12) {
    return '上午'
  } else {
    return '下午'
  }
}