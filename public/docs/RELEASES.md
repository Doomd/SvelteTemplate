This project will use the [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow) develop + master model of releasing:

The develop branch is the main branch. Whenever there is particularly noteworthy snapshot, then I will tag it, then fast forward the "master" branch to the latest release tag.

If you want the "latest" then stick to the develop branch. If you want the latest "stable" that I've tested for deployment, use the Master branch.

# RELEASES

## v0.0.4

2020-01-17

### New FEATURES:

- Implemented the `marked` npm plugin so Svelte can read the `/docs/RELEASES.md` file directly, then parse it to html and display it in the browser.
  - So now, the changelog will be viewable from the demo site at:
    https://sveltetemplate.doomd.dev/changelog

### TWEAKS

- To make the template more mobile friendly, the site name in the header will no longer wrap. The nav links will wrap below it below 768px wide.
- Minor CSS fixes

## v0.0.3

2020-01-17

### NEW FEATURES & CHANGES:

- Pages via the `<Page />` componenent can now optionally hide the header and footer:
  - So if you want a content page to not display the header and/or footer, you can specificy `header={false}` and `footer={false}` respectively in the `<Page />` component.
  - This means that the App.svelte file only has one semantic element (`<page>`), because I moved the `<header>` and `<footer>` elements to the `<Page />` component since their visibility is now optional via props.
- Major rewrite to ColorMode functionality
  - The toggle button (by default in the footer) and color-mode logic had to be split into different components. The necessity of this became apparent when full screen pages (without the footer that had the color mode toggle in it), didn't load the color-mode on page refreshes, or direct links to those full pages.
  - `<ColorModeToggle />` is a toggle button only now, and it's only job is to toggle the value of the `$colorMode` store from '`dark`' to '`light`'
  - So now, the `<ColorModeLogic />` component lives in App.svelte and will always react to changes to the `$colorMode` store.
  - ColorModeLogic will also listen for changes to the user's system color via `window.matchMedia('(prefers-color-scheme: dark)')`, and toggle the site's color to the newly selected color-mode!
  -

## v0.0.2

2020-01-16

### CHANGES:

- `/public/css/color.css`
  - `var(--color_highlight)` changed to 'Svelte Orange'
- Refactored Navigation Links into a separate component so the header and footer links are always the same.
- Made the "About" component the home page.

## v0.0.1

2020-01-16

### INITIAL RELEASE
