<script>
  // MODULES
  import { Link } from "svelte-routing"

  // EXTERNAL VARIABLES
  import * as v from "../variables"
</script>

<div class="logo">
  <Link to="/">{v.siteName}</Link>
</div>

<nav>
  <div class="link">
    <Link to="/contact">Contact</Link>
  </div>
  <div class="link">
    <Link to="/about">About</Link>
  </div>
  <div class="link">
    <Link to="/blog">Blog</Link>
  </div>
</nav>

<style>
  .logo {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 3em;
  }

  nav {
    display: flex;
    position: relative;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    flex: 1 1;
  }
  .link {
    margin-left: 15px;
  }
</style>
