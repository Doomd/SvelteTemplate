<script>
  import { Router, Link, Route } from "svelte-routing"
  import Page from "../../components/Page.svelte"
  import BlogPost from "./Post.svelte"
  import BlogList from "./BlogList.svelte"
  export let location
  import { items } from "./items.js"
</script>

<Page vAlign="flex-start" hAlign="center" heading="Blog" {location}>
  <Router>
    <div class="container">
      <div class="blog-list">
        <BlogList {items} />
      </div>
      <div class="blog-posts">
        <Route path="first" component={BlogPost} />
      </div>
    </div>
  </Router>
</Page>

<style>
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
  .blog-list {
    flex: 1;
    min-width: 320px;
    max-width: 480px;
    background-color: #333;
    padding: 15px;
  }

  .blog-posts {
    flex: 2;
    padding: 15px;
  }
</style>
