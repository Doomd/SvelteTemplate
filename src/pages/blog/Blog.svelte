<script>
  import { Router, Link, Route } from "svelte-routing"
  import Page from "../../components/Page.svelte"
  import BlogPost from "./Post.svelte"
  export let location
</script>

<Page vAlign="flex-start" hAlign="center" heading="Blog" {location}>
  <Router>
    <div class="container">
      <div class="blog-list">
        <h2>Posts</h2>
        <div><Link to="first">Today I did something cool</Link></div>
        <div><Link to="second">I did something awesome today</Link></div>
        <div><Link to="third">Did something sweet today</Link></div>
      </div>
      <div class="blog-posts">
        <Route path="first" component={BlogPost} />
        <Route path="second">
          <p>
            I did something awesome today. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repudiandae enim quasi animi, vero
            deleniti dignissimos sapiente perspiciatis. Veniam, repellendus,
            maiores.
          </p>
        </Route>
        <Route path="third">
          <p>
            I did something sweet today. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Modi ad voluptas rem consequatur commodi minima
            doloribus veritatis nam, quas, culpa autem repellat saepe quam
            deleniti maxime delectus fuga totam libero sit neque illo! Sapiente
            consequatur rem minima expedita nemo blanditiis, aut veritatis alias
            nostrum vel? Esse molestias placeat, doloribus commodi.
          </p>
        </Route>
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
    background-color: #333;
    padding: 15px;
  }
  .blog-posts {
    flex: 2;
    padding: 15px;
  }
</style>
