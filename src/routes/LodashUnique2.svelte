<script>
  import Page from "../components/Page.svelte"
  import { uniq, uniqBy, uniqWith, union, unionBy, unionWith, isEqual } from "lodash"
  import { min, max } from "../js/functions"
  export let location

  // const simpleArray1 = ["A", "B", "C"]
  // const simpleArray2 = ["C", "D", "D"]
  // const array1 = [
  //   { letter: "A", id: "1" },
  //   { letter: "B", id: "2" },
  //   { letter: "C", id: "3" },
  // ]
  // const array2 = [
  //   { letter: "C", id: "3" },
  //   { letter: "D", id: "4" },
  //   { letter: "E", id: "5" },
  // ]
  // const array3 = [
  //   { letter: "E", id: "6" },
  //   { letter: "E", id: "7" },
  //   { letter: "E", id: "8" },
  // ]
  // const array4 = [
  //   { letter: "F", id: "8" },
  //   { letter: "G", id: "8" },
  //   { letter: "H", id: "8" },
  // ]

  function generateNumber(n) {
    let numbers = ""
    for (let i = 0; i < n; i++) {
      numbers += Math.floor(Math.random() * 10).toString()
    }
    return numbers
  }

  function generateLetters(n) {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let letters = ""
    for (let i = 0; i < n; i++) {
      letters += alpha[Math.floor(Math.random() * alpha.length)]
    }
    return letters
  }

  function makeArray(a, n) {
    // a = array size, n = string/num size
    let array = []
    if (a > 1000000) return [{ id: "poop", alpha: "scoop" }] // prevent accidentally doing something stupid
    n = Math.floor(n / 2)
    for (let i = 0; i < a; i++) {
      let alpha1 = generateLetters(n)
      let alpha2 = generateLetters(n)
      let num1 = generateNumber(n)
      let num2 = generateNumber(n)
      // let letters = generateLetters(n)
      let obj = { alpha: `${alpha1}${alpha2}`, id: `${num1}${num2}` }
      array.push(obj)
    }
    return array
  }

  function doesItWork(id, startMS, array) {
    // console.log(`startMS:`, startMS)
    let ms = Date.now() - startMS
    // console.log(`ms:`, ms)
    // console.log(`${ms}ms: Method ${id} ${result ? "WORKED!" : "FAILED :("}`, array)
    // console.log(`${ms}ms: Method ${id}:`, array.length)
    return ms
  }

  let arraySize = 100000
  let stringSizes = 2
  let testLoops = 20
  let testProp = "id"

  let tally1 = 0
  let tally2 = 0
  let tally3 = 0
  let tally4 = 0
  let arrayOne = makeArray(arraySize, stringSizes)
  let arrayTwo = makeArray(arraySize, stringSizes)

  // WORKS (CHECKS ONE PROPERTY FOR UNIQUENESS)
  function loopThis(n) {
    for (var i = 0; i < n; i++) {
      let start = Date.now()
      tally2 += doesItWork("unionBy A", Date.now(), unionBy(arrayOne, arrayTwo, arrayOne, testProp)) // seems to be the fastest
      tally3 += doesItWork(
        "unionBy B",
        Date.now(),
        unionBy([...arrayOne], [...arrayTwo], [...arrayOne], testProp)
      )
      tally4 += doesItWork(
        "unionBy C",
        Date.now(),
        unionBy([...arrayOne, ...arrayTwo, ...arrayOne], testProp)
      )
      tally1 += doesItWork(
        "uniqBy A",
        Date.now(),
        uniqBy([...arrayOne, ...arrayTwo, ...arrayOne], testProp)
      )
      let ms = Date.now() - start
      console.log(`Loop ${i} took ${ms}ms`)
    }
    let tallyArray = [tally1, tally2, tally3, tally4]
    let tallys = []
    for (let t = 0; t < tallyArray.length; t++) {
      // let report = `Method #${t} took ${tallyArray[t]}ms`
      // console.log(report)
      let tallyObj = { tally: t + 1, ms: tallyArray[t] }
      tallys.push(tallyObj)
      console.log(tallyObj, `average: ${Math.floor(tallyObj.ms / n)}ms in ${n} runs`)
    }
    // tallys.forEach((tally) => {
    //   console.log(tally, `average: ${Math.floor(tally.ms / n)}ms in ${n} runs`)
    // })
    let fastest = min(tallys, "ms")
    // let slowest = max(tallys, "ms")
    console.log(`fastest:`, fastest, `average: ${Math.floor(fastest.ms / n)}ms in ${n} runs`)
    // console.log(`slowest:`, slowest)
  }
  loopThis(testLoops)

  // WORKS (CHECKS ENTIRE OBJECT FOR UNIQUENESS)
  // doesItWork("unionWith(a1, a2, prop)", Date.now(), unionWith(arrayOne, arrayTwo, isEqual))
  // doesItWork("unionWith([...a1], [...a2], prop)",Date.now(),unionWith([...arrayOne], [...arrayTwo], isEqual))
  // doesItWork("unionWith([...a1, ...a2], prop)", Date.now(),unionWith([...arrayOne, ...arrayTwo], isEqual))
  // doesItWork("uniqWith([...a1, ...a2], isEqual)",Date.now(),uniqWith([...arrayOne, ...arrayTwo], isEqual))
</script>

<Page vAlign="flex-start" hAlign="center" title="Test New Page" {location}>
  <!-- <p>{@html fizzBuzz().string}</p> -->
  <p>check console.</p>
</Page>

<style>
  p {
    max-height: 100%;
    columns: 3;
  }
</style>
