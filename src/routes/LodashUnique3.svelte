<script>
  import Page from "../components/Page.svelte"
  import { uniq, uniqBy, uniqWith, union, unionBy, unionWith, isEqual } from "lodash"
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
  const alpha = "abcdefghijklmnopqrstuvwxyz"

  function makeArray(n) {
    let array = []
    if (n > 1000000) return [{ id: "poop", letter: "scoop" }] // prevent accidentally doing something stupid
    for (let i = 0; i < n; i++) {
      let id = Math.ceil(Math.random() * 10)
      let letter = alpha[Math.floor(Math.random() * alpha.length)]
      array.push({ id: id, letter: letter })
    }
    return array
  }

  let arrayOne = makeArray(10000)
  let arrayTwo = makeArray(5000)
  let arrayThree = makeArray(1000)
  // let arraySet = new Set(array1)
  // let newSet = new Set([...arraySet, ...array2])
  // newSet = new Set([...newSet, ...array3])
  // newSet = new Set([...newSet, ...array4])
  // newSet = new Set([...newSet, ...array1])

  function doesItWork(id, startMS, array) {
    // console.log(`startMS:`, startMS)
    let result = array.length === 5
    let ms = Date.now() - startMS
    // console.log(`ms:`, ms)
    console.log(`${ms}ms: Method ${id} ${result ? "WORKED!" : "FAILED :("}`, array)
  }

  // FAILS:
  // doesItWork("uniq", uniq([...arrayOne, ...arrayTwo, ...arrayThree])) // FAILS
  // doesItWork("union", union([...arrayOne, ...arrayTwo, ...arrayThree])) // FAILS

  // WORKS (CHECKS ONE PROPERTY FOR UNIQUENESS)
  doesItWork(
    "uniqBy([...a1, ...a2], prop)",
    Date.now(),
    uniqBy([...arrayOne, ...arrayTwo, ...arrayThree], "id")
  ) // WORKS
  doesItWork(
    "uniqWith([...a1, ...a2], isEqual)",
    Date.now(),
    uniqWith([...arrayOne, ...arrayTwo, ...arrayThree], isEqual)
  ) // WORKS

  // WORKS (CHECKS ENTIRE OBJECT FOR UNIQUENESS)
  doesItWork("unionBy(a1, a2, prop)", Date.now(), unionBy(arrayOne, arrayTwo, arrayThree, "id")) // WORKS
  doesItWork(
    "unionBy([...a1], [...a2], prop)",
    Date.now(),
    unionBy([...arrayOne], [...arrayTwo], [...arrayThree], "id")
  ) // WORKS
  doesItWork(
    "unionBy([...a1, ...a2], prop)",
    Date.now(),
    unionBy([...arrayOne, ...arrayTwo, ...arrayThree], "id")
  ) // WORKS

  doesItWork(
    "unionWith(a1, a2, prop)",
    Date.now(),
    unionWith(arrayOne, arrayTwo, arrayThree, isEqual)
  ) // WORKS
  doesItWork(
    "unionWith([...a1], [...a2], prop)",
    Date.now(),
    unionWith([...arrayOne], [...arrayTwo], [...arrayThree], isEqual)
  ) // WORKS
  doesItWork(
    "unionWith([...a1, ...a2], prop)",
    Date.now(),
    unionWith([...arrayOne, ...arrayTwo, ...arrayThree], isEqual)
  ) // WORKS
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
