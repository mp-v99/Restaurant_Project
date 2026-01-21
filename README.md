# Restaurant Page

## Overview
[The Restaurant Project](https://mp-v99.github.io/Restaurant_Project/) from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) focuses on practicing the flow of setting up Webpack to bundle modules into one optimized output. As well as learning a deployment workflow, which is quite different from the flow we had been following in the curriculum so far.

## What was practiced
* Setting up webpack.config.js
* Using modules to separate logic 
* Loading, `.html` `.css` and images with Webpack
* DOM content generation with JavaScript alone
* Tab navigation
* Creating a `gh-pages` branch[0] to deploy the project in GitHub pages. 

## Deployment workflow (GitHub Pages)

[0]This project uses a manual deployment flow with a dedicated `gh-pages` branch. This workflow will be reused frequently throughout the curriculum.

1. Make new branch: `git branch gh-pages`  <- Only do this once
2. Move to that branch and merge with `main`: 
   `git checkout gh-pages && git merge main --no-edit`
3. Bundle app into `dist`: `npx webpack`
4. Commit the build output:  
   `git add dist -f && git commit -m "Deployment commit"`
   What this step does:
   This forcefully adds `dist/` even though it's in `.gitignore` and creates a commit that contains **only built files**. The commit lives on `gh-pages` 
5. Push **only** `dist/` to gh-pages:
   `git subtree push --prefix dist origin gh-pages`
   What this steps does:
   Github pages expects: `.html`, `.js`, assets. It does not understand: Webpack, npm, build steps. So the command specifies which files are meant to be published.
6. Back to main: `git checkout main`
   
   
   
