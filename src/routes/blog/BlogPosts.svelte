<script>
  import { Route } from "svelte-routing"

  import { defaultAuthor } from "../../js/constants"
  import { cleanURL, prettyDate } from "../../js/functions"
  import { posts } from "../../js/stores/blog"

  let author = defaultAuthor.nickname
  let authorLink = defaultAuthor.link.uri
</script>

{#each $posts as post (post.id)}
  <Route path={cleanURL(post.title)}>
    <h2>{post.title}</h2>
    <div class="post-details">
      <a href={post.author_link ? post.author_link : authorLink}>
        <author>{post.author ? post.author : author}</author>
      </a>
      <time datetime={post.date}>{prettyDate(post.date)}</time>
    </div>
    <div class="post-content">{@html post.content}</div>
  </Route>
{/each}

<style>
  h2 {
    text-transform: capitalize;
  }
  .post-details {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  author::before {
    content: "";
  }
</style>
