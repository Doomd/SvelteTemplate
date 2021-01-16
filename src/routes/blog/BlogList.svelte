<script>
  // import { convert } from "url-slug"
  import { Link } from "svelte-routing"
  import { prettyDate, cleanURL } from "../../js/functions"
  import { posts } from "../../js/stores"
</script>

<h2>Posts</h2>

{#if $posts && Array.isArray($posts) && $posts.length > 0}
  {#each $posts as post (post.id)}
    <Link to={cleanURL(post.title)}>
      <div class="post-link">
        <div class="time">
          <time datetime={post.date}>{prettyDate(post.date)}</time>
        </div>
        <div class="title">
          {post.title}
        </div>
      </div>
    </Link>
  {/each}
{/if}

<style>
  /* your styles go here */
  .post-link {
    display: flex;
    margin: 10px 0 0 0;
  }
  .time {
    min-width: 140px;
  }
  .title {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
