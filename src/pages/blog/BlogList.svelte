<script>
  // import { convert } from "url-slug"
  import { Link } from "svelte-routing"
  import { prettyDate, cleanURL } from "../../js/functions"

  export let items // array of objects
</script>

<h2>Posts</h2>
<ul>
  {#each items as item (item.id)}
    <Link to={cleanURL(item.title)}>
      <li>
        <time datetime={item.date}>{prettyDate(item.date)}</time> -
        <span class="title">{item.title}</span>
      </li>
    </Link>
  {/each}
</ul>

<style>
  /* your styles go here */
  li {
    list-style: none;
  }
</style>
