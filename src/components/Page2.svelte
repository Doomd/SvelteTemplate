<script>
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"
  // PROPS
  export let vAlign = "flex-start"
  export let hAlign = "center"
  export let pageTitle = "Page Title"
  export let overflow = true

  export let header = true
  export let footer = true

  // // STORES
  // import { colorMode } from "../js/stores"
  // import { defaultColorMode } from "../js/constants"
  // import { onMount } from "svelte"
  // // REACTIVE
  // $: $colorMode, changeColorMode()

  // function changeColorMode() {
  //   console.log(`before $colorMode:`, $colorMode)
  //   let localCM = localStorage.getItem("colorMode")
  //   let cm = $colorMode ? $colorMode : localCM
  //   // If there's no $colorMode store OR localStorage setting, set to default
  //   if (!cm) {
  //     $colorMode = defaultColorMode
  //     localStorage.setItem("colorMode", defaultColorMode)
  //     // if there IS a localStorage setting, set $colorMode store to it
  //   } else {
  //     $colorMode = cm
  //   }
  //   // change the "color-mode" html attribute!
  //   document.documentElement.setAttribute("color-mode", $colorMode)
  //   console.log(`after $colorMode:`, $colorMode)
  // }
  // onMount(() => changeColorMode())
</script>

{#if header}
  <header>
    <Header />
  </header>
{/if}
<main>
  <div
    class="content"
    class:overflow
    style="justify-content: {vAlign}; align-items: {hAlign}">
    {#if pageTitle}
      <h1>{pageTitle}</h1>
    {/if}
    <slot>Content Goes Here</slot>
  </div>
</main>
{#if footer}
  <footer>
    <Footer />
  </footer>
{/if}

<style>
  header,
  footer {
    flex: 0 1;
    display: flex;
    padding: 10px 15px;
    background-color: var(--color_bg_1);
  }
  header {
    justify-content: space-between;
    border-bottom: 1px solid var(--color_border_1);
  }
  footer {
    border-top: 1px solid var(--color_border_1);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main {
    flex: 1 1;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 15px;
    overflow: hidden;
  }
  .overflow {
    overflow-y: auto;
  }
  h1 {
    color: var(--color_highlight);
    text-transform: uppercase;
  }
  @media (max-width: 767px) {
    .content {
      overflow-y: auto;
    }
  }
</style>
