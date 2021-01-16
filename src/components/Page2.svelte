<script>
  // PROPS
  export let vAlign = "flex-start"
  export let hAlign = "center"
  export let heading = ""
  export let overflow = true
</script>

<div
  class="content"
  class:overflow
  style="justify-content: {vAlign}; align-items: {hAlign}">
  {#if heading}
    <h1>{heading}</h1>
  {/if}
  <slot>Content Goes Here</slot>
</div>

<style>
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
