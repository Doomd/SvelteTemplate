<script>
  // MODULES
  import { Link } from "svelte-routing"

  // EXTERNAL VARIABLES
  import { siteName } from "../js/constants"

  // COMPONENTS
  import ColorMode from "./ColorModeToggle.svelte"
  import NavLinks from "./NavLinks.svelte"

  // LOCAL VARIABLES
  let now = new Date()
  let year = now.getFullYear()
</script>

<copyright>
  <div class="copyright">&copy;{year} {siteName}</div>
</copyright>
<div class="footer-links">
  <NavLinks />
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

  :global(.footer-links a) {
    margin: 0 10px;
    font-size: 0.8em;
  }

  .color-mode {
    position: absolute;
    left: 15px;
  }
</style>
