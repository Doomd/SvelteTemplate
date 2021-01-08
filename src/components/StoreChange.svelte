<script>
  import { colorMode } from "../js/stores"

  $: $colorMode, somethingChanged(`$colorMode`, $colorMode)

  export function somethingChanged(variableName, value) {
    if (
      value &&
      value != undefined &&
      (what(value) != "object" || what(value) != "array")
    ) {
      console.log(`STORE [${variableName}].${typeof value} changed to:`, value)
    } else if (value != undefined) {
      console.log(`STORE [${variableName}] value changed.`)
    } else {
      //console.log( `STORE [${variableName}] is undefined.` )
    }
  }
</script>
