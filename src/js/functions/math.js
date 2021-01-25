export function getRandomBetween(min = 1, max = 10) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

// input arrray, and the object property you want the min/max of:
export const max = (array, prop) => array.reduce((m, x) => (m[prop] > x[prop] ? m : x))
export const min = (array, prop) => array.reduce((m, x) => (m[prop] < x[prop] ? m : x))
