<script>
  // MODULES
  import { Link } from "svelte-routing"

  // EXTERNAL VARIABLES
  import { siteName } from "../js/constants"

  import NavLinks from "./NavLinks.svelte"
</script>

<div class="logo">
  <Link to="/">{siteName}</Link>
</div>

<nav>
  <NavLinks />
</nav>

<style>
  .logo {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 2.5em;
  }
  :global(.logo a) {
    color: var(--color_highlight);
  }
  :global(.logo a:hover) {
    color: var(--color_primary);
  }

  nav {
    display: flex;
    position: relative;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    flex: 1 1;
  }
  :global(nav .link) {
    margin-left: 15px;
  }
</style>
