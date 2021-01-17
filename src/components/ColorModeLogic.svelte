<script>
  // STORES

  import { colorMode } from "../js/stores"
  import { defaultColorMode } from "../js/constants"
  // REACTIVE
  $: $colorMode, changeColorMode()

  function changeColorMode() {
    // IF $colorMode has changed (probably because of toggle)
    if ($colorMode) {
      localStorage.setItem("colorMode", $colorMode)
      // Otherwise, a user has come in without setting colormode...
    } else {
      let localCM = localStorage.getItem("colorMode")
      if (localCM) {
        $colorMode = localCM
      } else {
        let defaultCM
        if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
          // console.log(`user color scheme supported`)
          defaultCM = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        } else {
          defaultCM = defaultColorMode
        }
        $colorMode = defaultCM
        localStorage.setItem("colorMode", defaultCM)
      }
    }
    document.documentElement.setAttribute("color-mode", $colorMode)
  }
  function saySomething() {
    console.log(`something`)
  }
  // This will watch for changes in the System Color, and allow this change to take precedance and change the $colorMode (only when it changes)
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        //dark mode
        console.log("system color changed: dark mode!")
        $colorMode = "dark"
      } else {
        //light mode
        console.log("system color changed: light mode!")
        $colorMode = "light"
      }
    })
</script>
