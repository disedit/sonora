export function niceDate (datetime) {
  const date = new Date(datetime)
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  const year = date.getFullYear() - 2000

  return `${day}.${month}.${year}`
}

export function niceTime (datetime) {
  const date = new Date(datetime)
  const time = date.toTimeString().substr(0, 5)
  return time + ' h'
}
