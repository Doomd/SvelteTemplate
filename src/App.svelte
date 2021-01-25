<script>
  import { Router, Route } from "svelte-routing"
  import { siteName } from "./js/constants"

  // ROUTES/PAGES
  import About from "./routes/About.svelte"
  import Blog from "./routes/Blog.svelte"
  // import Contact from "./routes/Contact.svelte"
  import FullPage from "./routes/FullPage.svelte"

  import ChangeLog from "./routes/ChangeLog.svelte"
  import Test from "./routes/LodashUnique2.svelte"

  // COMPONENTS
  import ColorModeLogic from "./components/ColorModeLogic.svelte"

  // PROPS
  export let url = "" // svelte-routing requirement
</script>

<svelte:head>
  <title>{siteName}</title>
</svelte:head>

<Router {url}>
  <page>
    <Route path="/" component={About} />
    <Route path="about" component={About} />
    <Route path="blog/*" component={Blog} />
    <!-- <Route path="contact" component={Contact} /> -->
    <Route path="fullpage" component={FullPage} />
    <Route path="test" component={Test} />
    <Route path="changelog" component={ChangeLog} />
  </page>
</Router>
<ColorModeLogic />

<style>
  page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: var(--color_body);
  }
</style>
