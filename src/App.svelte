<script>
  import { Router, Route } from "svelte-routing"

  // COMPONENTS
  import Header from "./components/Header.svelte"
  import Footer from "./components/Footer.svelte"

  // PAGES
  import Home from "./pages/Home.svelte"
  import About from "./pages/About.svelte"
  import Contact from "./pages/Contact.svelte"

  import Blog from "./pages/blog/Blog.svelte"

  // PROPS
  export let url = "" // This property is necessary declaration for svelte-routing
</script>

<Router {url}>
  <page>
    <header>
      <Header />
    </header>
    <main>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />

      <Route path="blog/*" component={Blog} />

      <!-- <Route path="test" component={Test} /> -->
    </main>
    <footer>
      <Footer />
    </footer>
  </page>
</Router>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap");

  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: var(--color_body);
    color: var(--color_primary);
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    font-family: "Roboto", sans-serif;
  }

  :global(a) {
    text-decoration: none;
    color: var(--color_links);
  }

  :global(a:hover) {
    text-decoration: none;
    color: var(--color_links_hover);
    background-color: var(--color_links_hover_bg);
  }

  :global(.visible) {
    display: flex !important;
    visibility: visible;
    opacity: 1 !important;
  }

  :global(.hide) {
    display: none !important;
  }

  :global(.invisible) {
    visibility: hidden !important;
    opacity: 0;
  }

  :global(header logo a:hover) {
    background-color: unset;
  }

  page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: var(--color_body);
  }

  header {
    height: var(--header_height);
    border-bottom: 1px solid var(--color_border_1);
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: var(--color_bg_1);
  }

  main {
    height: 100%;
    width: 100%;
    overflow: hidden;
    /* overflow-y: auto; */
    position: relative;
  }

  footer {
    height: var(--footer_height);
    width: 100%;
    border-top: 1px solid var(--color_border_1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color_bg_1);
  }
</style>
