<script>
  import Page from "../components/Page2.svelte"
  export let location
</script>

<Page vAlign="flex-start" hAlign="center" heading="Page Not Found" {location}>
  <p>
    Weird...this page doesn't exist...but you're somehow here, reading this...so
    I guess it kind of does exist...
  </p>
  <p>
    And since you're where you shouldn't be...you might enjoy this extreme
    closeup of an asshole:
  </p>
  <div class="asshole">*</div>
</Page>

<style>
  .asshole {
    font-size: 8em;
  }
</style>
