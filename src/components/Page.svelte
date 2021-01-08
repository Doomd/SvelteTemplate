<script>
  // PROPS
  export let vAlign = "flex-start"
  export let hAlign = "center"
  export let heading = ""
</script>

<div class="content" style="justify-content: {vAlign}; align-items: {hAlign}">
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
    padding: 30px;
  }
  h1 {
    color: var(--color_highlight);
  }
</style>
