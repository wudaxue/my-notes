// 百分比
export function percentage(value, digts) {
  value = Number(value)
  if (isNaN(value)) return '0%'
  if (value < 0) {
    return '0%'
  } else if (value > 1) {
    return '100%'
  } else {
    return (value * 100).toFixed(digts === undefined ? 2: digts) + '%'
  }
}

// 超出省略
export function overlength(value, len) {
  if (!value || value.length < len) return value
  return value.slice(0, len) + '...'
}
