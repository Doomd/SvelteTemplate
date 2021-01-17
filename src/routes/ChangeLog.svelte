<script>
  import Page from "../components/Page.svelte"
  import marked from "marked"
  export let location
  let changeLogFile = "/docs/RELEASES.md"
  let changeLog = ""
  fetch(changeLogFile)
    .then((log) => log.text())
    .then((text) => {
      console.log(text)
      changeLog = marked(text)
    })
</script>

<Page vAlign="flex-start" hAlign="center" pageTitle="ChangeLog" {location}>
  <div class="md">
    {@html changeLog}
  </div>
</Page>

<style>
  .md {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
</style>
