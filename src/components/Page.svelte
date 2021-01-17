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
</script>

{#if header}
  <Header />
{/if}
<main>
  <div class="content" class:overflow style="justify-content: {vAlign}; align-items: {hAlign}">
    {#if pageTitle}
      <h1>{pageTitle}</h1>
    {/if}
    <slot>Content Goes Here</slot>
  </div>
</main>
{#if footer}
  <Footer />
{/if}

<style>
  :global(header, footer) {
    display: flex;
    /* flex: 0 1; */
    padding: 0 15px;
  }

  main {
    /* flex: 1 1; */
    width: 100%;
    height: 100%;
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
    /* :global(header) {
      flex-wrap: wrap;
      height: auto;
      flex-grow: 1;
      flex-shrink: 1;
    } */
    main {
      /***/
    }
  }
</style>
