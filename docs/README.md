# Rooster App README

## Project Structure
This is a Svelte App that retrieves data from a Drupal webserver via its JSON:API. The Svelte app itself only has a few additional Svelte specific plugins (most notably, `svelte-routing` for page routing).

We also import the Google Maps Javascript API in the `<svelte:head>` of the App.svelte file. On the respective `Map.svelte` component, we inport a few Google Maps specific plugins, `@googlemaps/markerclustererplus` and `@googlemaps/markerwithlabel`. There are a few other deployment related dependancies, but other than that, our goal is to keep the app is to be a slim and fast FRONT end for Drupal's backed data.

### Routes
The primary "pages" of this app (with unique url routes) are:
- Home: `/`
- About: `/about`
- List: `/list`
- Map: `/map`
- Contact: `/contact`

### Components

### JS files

## Drupal JSON:API
