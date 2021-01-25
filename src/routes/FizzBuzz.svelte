<script>
  import Page from "../components/Page.svelte"
  export let location

  function fizzBuzz() {
    let print = ""
    let array = []
    for (let i = 1; i <= 100; i++) {
      let item = ""
      if (i % 3 != 0 && i % 5 != 0) {
        print += i
        item = i
      }
      if (i % 3 == 0) {
        print += "Fizz"
        item = "Fizz"
      }
      if (i % 5 == 0) {
        print += "Buzz"
        item += "Buzz"
      }
      print += `<br />`
      array.push(item)
    }
    console.log(array)
    return { string: print, array: array }
  }

  function fizzBuzzArray() {
    let array = []
    for (let i = 1; i <= 100; i++) {
      let item = ""
      if (i % 3 != 0 && i % 5 != 0) {
        item = i
      } else {
        if (i % 3 == 0) item = "Fizz"
        if (i % 5 == 0) item += "Buzz"
      }
      array.push(item)
    }
    console.log(array)
    // return { string: print, array: array }
  }

  function bizzBuzzMap() {
    let i = 1
    return [...Array(100)].map(() => {
      let n = i++
      let item = ""
      if (n % 15 != 0) {
        item = i
      } else {
        if (n % 3 == 0) item = "Fizz"
        if (n % 5 == 0) item += "Buzz"
      }
      return item
    })
  }
</script>

<Page vAlign="flex-start" hAlign="center" title="Test New Page" {location}>
  <p>{@html fizzBuzz().string}</p>
</Page>

<style>
  p {
    max-height: 100%;
    columns: 3;
  }
</style>
