<script>
  import Page from "../components/Page.svelte"
  export let location
</script>

<Page
  vAlign="flex-start"
  hAlign="center"
  pageTitle="Full Page Example"
  header={false}
  footer={false}
  {location}>
  <div class="wrapper">
    <p>
      Notice, how this page doesn't have a header or footer? It's easy to turn
      those on an off for each page now!
    </p>
    <p>
      Now, hit the back button in your browser, or <a href="/">go home</a>
    </p>
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
