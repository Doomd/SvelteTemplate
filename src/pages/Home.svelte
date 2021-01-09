<script>
  import Page from "../components/Page.svelte"
  export let location
</script>

<Page vAlign="flex-start" hAlign="center" heading="Welcome" location={location}>
  Thanks for visiting.
</Page>
