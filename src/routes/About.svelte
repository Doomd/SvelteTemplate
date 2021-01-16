<script>
  import Page from "../components/Page.svelte"
  export let location
</script>

<Page vAlign="flex-start" hAlign="center" heading="About" {location}>
  <p>About Stuff</p>
</Page>
