export function prettyTime(time) {
  let d = new Date(time)
  d = d.toTimeString()
  return d
}

export function prettyDate(time) {
  let d = new Date(time)
  d = d.toDateString()
  return d
}
