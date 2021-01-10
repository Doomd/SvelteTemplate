# Svelte / Vercel Deployment

This is a heavily modified svelte-vercel template that up-to-date Svelte related dependancies (as of Jan 2021) and STILL works with vercel deployments (some breaking changes were made by upgrading to the latest modules, but I corrected the rollup.config.js file so everything works).

I also added the svelte-routing package so page routing is built in. I included some example pages and components so it's relatively easy to understand how to make more pages. Note, just as with the vercel default, anthing put into the `/api` directory (like node.js scripts), should work as node.js serverless functions (outside of Svelte's scope). Bear in mind, file writing functionality is still likely not supported. See the original documentation below for more details.

## First steps after cloning this repository

1. run `npm i` in root directory.
2. then `npm run dev` (this starts a liv dev version at `localhost:5000`).
3. Make any changes you want to the Header, Footer, etc.
4. Setup new git repo on github, gitlab or bitbucket:
   - _NOTE: You want to create an EMPTY repository, because we're going to push your local file contents to it._
5. Setup Git Locally:

   - Initialize git from root directory: `git init`
   - Add contents of directory to git: `git add .` <(include period)
   - Make first commit: `git commit -m "Init Commit"`
   - Set branch: `git branch -M master`
   - Add your remote origin. Example:

     `git remote add origin https://github.com/[USERNAME]/[YOURNEWREPO].git`

   - Push your local code to remote: `git push -u origin master`

6. To deploy to vercel, you'll need to link your remote repo to vercel:
   - First create a vercel account at vercel.com
   - Then install vercel: `npm i -g vercel`
   - Run from root directory: `vercel`. It will guide you through setting up and linking your remote repo and deploy your code to a working site!
   - Each time you `git push` your code to `master`, vercel will automatically deploy that code to your vercel site!

## Other Useful Links

- Official Svelte website: https://svelte.dev
- `sirv-cli` github: https://github.com/lukeed/sirv
- `svelte-routing` github: https://github.com/EmilTholin/svelte-routing

## Original Vercel README & Project Links:

- Original [Vercel README](./VERCEL.md)
- [Deploying Svelte with Vercel](https://vercel.com/guides/deploying-svelte-with-vercel)
- `svelte-vercel` github: https://github.com/tidiview/svelte-vercel
