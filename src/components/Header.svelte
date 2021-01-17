<script>
  // MODULES
  import { Link } from "svelte-routing"

  // EXTERNAL VARIABLES
  import { siteName } from "../js/constants"

  import NavLinks from "./NavLinks.svelte"
</script>

<header>
  <div class="site-branding">
    <Link to="/">{siteName}</Link>
  </div>
  <nav>
    <NavLinks />
  </nav>
</header>

<style>
  header {
    justify-content: space-between;
    border-bottom: 1px solid var(--color_border_1);
    flex-wrap: wrap;
    height: auto;
    background-color: var(--color_bg_1);
  }
  .site-branding {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    font-size: 2em;
    white-space: nowrap;
    flex: 1;
  }
  :global(.site-branding a) {
    color: var(--color_highlight);
  }
  :global(.site-branding a:hover) {
    color: var(--color_primary);
  }

  nav {
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 0;
    flex: 1;
  }
  :global(nav .link) {
    margin-left: 15px;
  }
  :global(nav .link:first-child) {
    margin-left: unset;
  }
  @media (max-width: 767px) {
    header {
      /* display: inline-block; */
    }
    .site-branding {
      padding: 15px 0 0 0;
      min-width: 100%;
      justify-content: center;
    }
    nav {
      justify-content: space-evenly;
      width: 100%;
    }
  }
</style>
