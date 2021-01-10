<script>
  // MODULES
  import { Link } from "svelte-routing"
</script>

<div class="logo">
  <Link to="/">Svelte App</Link>
</div>

<nav>
  <div class="header-link">
    <Link to="/contact">Contact</Link>
  </div>
  <div class="header-link">
    <Link to="/about">About</Link>
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
</style>
