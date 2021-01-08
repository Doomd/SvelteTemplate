<script>
  // MODULES
  import { Link } from "svelte-routing"

  // COMPONENTS
  import ColorMode from "./ColorMode.svelte"
</script>

<logo>
  <Link to="/">Svelte App</Link>
</logo>
<nav>
  <!-- <div class="header-link">
    <Link to="/log">Log</Link>
  </div> -->
</nav>

<style>
  logo {
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
