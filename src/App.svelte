<script>
  import { Router, Route } from "svelte-routing"
  import { siteName } from "./js/constants"

  // COMPONENTS
  import Header from "./components/Header.svelte"
  import Footer from "./components/Footer.svelte"

  // ROUTES/PAGES
  import Home from "./routes/Home.svelte"
  import About from "./routes/About.svelte"
  import Contact from "./routes/Contact.svelte"

  import Blog from "./routes/Blog.svelte"

  // PROPS
  export let url = "" // svelte-routing requirement
</script>

<svelte:head>
  <title>{siteName}</title>
</svelte:head>
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

  page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: var(--color_body);
  }

  header,
  footer {
    flex: 0 1;
    display: flex;
    padding: 10px 15px;
    background-color: var(--color_bg_1);
  }
  header {
    justify-content: space-between;
    border-bottom: 1px solid var(--color_border_1);
  }
  footer {
    border-top: 1px solid var(--color_border_1);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main {
    flex: 1 1;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
