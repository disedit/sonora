export default function (datetime) {
  const date = new Date(datetime)
  const months = [
    'gener', 'febrer', 'març', 'abril', 'maig',
    'juny', 'juliol', 'agost', 'setembre', 'octubre',
    'novembre', 'desembre'
  ]
  const month = date.getMonth()
  const day = date.getDate()
  const time = date.toTimeString().substr(0, 5)

  return `${day} ${months[month]} / ${time}`
}
