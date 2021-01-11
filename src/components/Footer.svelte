<script>
  // MODULES
  import { Link } from "svelte-routing"

  // EXTERNAL VARIABLES
  import * as v from "../variables"

  // COMPONENTS
  import ColorMode from "./ColorMode.svelte"

  // LOCAL VARIABLES
  let now = new Date()
  let year = now.getFullYear()
</script>

<copyright>
  <div class="copyright">&copy;{year} {v.siteName}</div>
</copyright>
<div class="footer-links">
  <div class="footer-link">
    <Link to="/">Home</Link>
  </div>
  <div class="footer-link">
    <Link to="/contact">Contact</Link>
  </div>
  <div class="footer-link">
    <Link to="/about">About</Link>
  </div>
</div>
<div class="color-mode">
  <ColorMode />
</div>

<style>
  copyright {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }

  .footer-links {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 5px;
  }

  .footer-link {
    margin: 0 10px;
    font-size: 0.8em;
  }

  .color-mode {
    position: absolute;
    left: 15px;
  }
</style>
