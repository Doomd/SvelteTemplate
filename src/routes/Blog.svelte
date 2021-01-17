<script>
  import { Router } from "svelte-routing"

  import Page from "../components/Page2.svelte"
  import BlogList from "./blog/BlogList.svelte"
  import BlogPosts from "./blog/BlogPosts.svelte"
  export let location
</script>

<Page
  vAlign="flex-start"
  hAlign="flex-start"
  pageTitle="Blog"
  overflow={false}
  {location}>
  <Router>
    <div class="container">
      <div class="blog-list">
        <BlogList />
      </div>
      <div class="blog-posts">
        <BlogPosts />
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
    overflow: hidden;
  }
  .blog-list {
    flex: 1;
    min-width: 320px;
    max-width: 767px;
    background-color: var(--color_bg_1);
    padding: 15px;
    height: fit-content;
  }

  .blog-posts {
    flex: 2;
    width: 100%;
    height: 100%;
    padding: 15px;
    min-width: 320px;
    overflow: hidden;
    overflow-y: auto;
  }
  .blog-posts::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  .blog-posts::-webkit-scrollbar-track {
    background: var(--color_bg_1); /* color of the tracking area */
  }

  .blog-posts::-webkit-scrollbar-thumb {
    background-color: var(--color_bg_2); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid var(--color_highlight); /* creates padding around scroll thumb */
  }
  @media (max-width: 767px) {
    .container {
      overflow: unset;
      overflow-y: unset;
    }
    .blog-posts {
      overflow: unset;
      overflow-y: unset;
    }
  }
</style>
