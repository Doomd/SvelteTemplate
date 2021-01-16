// MODULES
import { writable } from "svelte/store"
import { loremIpsum } from "lorem-ipsum" // https://npmjs.com/package/lorem-ipsum

// JS
import { getRandomBetween } from "../functions"

// LOREM OPTIONS
const loremPG = {
  units: "paragraphs",
  format: "html",
  count: 5,
}
const loremTitle = {
  units: "words",
  format: "plain",
  count: 3,
}
const randId = () => Math.floor(Date.now() * Math.random())
let today = Date.now()
let date = today
let oneDay = 1000 * 60 * 60 * 24

function backDate() {
  date = date - oneDay * getRandomBetween(1, 7)
  return date
}

function fillBlog(num) {
  let blog = []
  for (let i = 0; i < num; i++) {
    let post = {
      id: randId(),
      date: i == 0 ? date : backDate(),
      title: loremIpsum({ ...loremTitle, count: getRandomBetween(1, 4) }),
      content: loremIpsum({ ...loremPG, count: getRandomBetween(1, 15) }),
      active: true,
    }
    blog.push(post)
  }
  return blog
}

export let posts = writable(fillBlog(10))
