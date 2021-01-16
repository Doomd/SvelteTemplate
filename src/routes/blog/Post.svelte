<script>
  import Page from "../../components/Page.svelte"
  export let title = "Title"
  export let date = new Date()
  let prettyDate = date
  export let content = "Blog Post Content"
</script>

<article>
  <h2>{title}</h2>
  <time datetime={date}>{prettyDate}</time>
  <div>
    <slot>{content}</slot>
  </div>
</article>
