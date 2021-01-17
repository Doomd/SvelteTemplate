<script>
  import Page from "../components/Page.svelte"
  export let location
</script>

<Page vAlign="flex-start" hAlign="center" pageTitle="Contact" {location}>
  <div class="wrapper">
    <p>Feel Free to Contact us.</p>
  </div>
</Page>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
  p {
    margin: 10px 0;
  }
</style>
