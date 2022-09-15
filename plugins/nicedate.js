export function niceDate (datetime) {
  const date = new Date(datetime)
  const weekdays = [
    'diumenge', 'dilluns', 'dimarts', 'dimecres',
    'dijous', 'divendres', 'dissabte'
  ]
  const months = [
    'gener', 'febrer', 'març', 'abril', 'maig',
    'juny', 'juliol', 'agost', 'setembre', 'octubre',
    'novembre', 'desembre'
  ]
  const month = date.getMonth()
  const day = date.getDate()
  const weekday = date.getDay()

  return `${weekdays[weekday]} ${day} ${months[month]}`
}

export function niceTime (datetime) {
  const date = new Date(datetime)
  const time = date.toTimeString().substr(0, 5)
  return time
}
