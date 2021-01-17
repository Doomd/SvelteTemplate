<script>
  import Page from "../components/Page2.svelte"
  export let location
</script>

<Page vAlign="flex-start" hAlign="center" pageTitle="About" {location}>
  <div class="wrapper">
    <p>
      This is a Svelte Scaffolding Template for quick and easy deployment of a
      Svelte site (especially to Vercel). It uses all up-to-date packages, has
      built it page routing, and a dark/light mode toggle.
    </p>
    <p>
      If you'd like to clone it, here's the <a
        href="https://github.com/Doomd/SvelteTemplate">Github Project Page</a>
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
