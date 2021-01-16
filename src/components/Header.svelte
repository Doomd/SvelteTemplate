<script>
  // MODULES
  import { Link } from "svelte-routing"

  // EXTERNAL VARIABLES
  import { siteName } from "../js/constants"
</script>

<div class="logo">
  <Link to="/">{siteName}</Link>
</div>

<nav>
  <Link to="/contact" class="link">Contact</Link>
  <Link to="/about" class="link">About</Link>
  <Link to="/blog" class="link">Blog</Link>
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
