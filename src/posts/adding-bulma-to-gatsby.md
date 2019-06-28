---
title: 'Adding Bulma to Gatsby'
date: '2019-06-26'
author: 'Greg Parr'
tags: ['Bulma','React','Gatsby']
---

### Why Bulma?

To get the site off the ground quickly, I decided to use a CSS framework for laying out the pages easily without having to write too much CSS (or Sass, LESS etc) at the start. I'm sure I'll add some of my own stying in the future, but for now I just want to get something that looks good!

I've used the Bulma CSS framework on a couple of projects recently and think it's really clean and clear, so this is how I integrated it in to the site.

### Setting Up

First step is to install the Bulma package to our projects Node modules:

```
npm install bulma
```

I'll want to amend some of the colour variables in the Bulma Sass files, so I will import the Sass files in to my project but, if you don't want to change anything, you could just import the CSS file from the node modules folder.

We will create a Sass file to import the Bulma Sass files, and we can also add our own site styles to this too. We'll call it site.sass:

```
touch src/styles/site.sass
```

In the site.sass file, we can import the bulma.sass file from node_modules, which in turn calls all the individual bulma module files:

```jsx
@import "../../node_modules/bulma/bulma.sass"
```

In this site there is a Layout component (layout.js) that is used for each page, this means that we can import the site.sass file in to this layout.js and it will be applied to the every page:

```jsx
import '../styles/site.sass'
```

Now we can use apply any of the Bulma classes to our JSX elements.
