---
title: 'Creating this site'
date: '2019-06-25'
---

![Grass](./images/grass.jpg)

## Install
```
npm install -g gatsby-cli
```

## Create Hello World project
```
gatsby new gatsby-bootcamp https://github.com/gatsbyjs/gatsby-starter-hello-world.git
```

## Run site to check it works in develop mode
```
gatsby develop
```

## Editing pages to site
- files in the src/pages directory become pages on our site
- edit index.js for the home page

``` js
import React from "react"

const IndexPage = () => {
    return (
        <div>
            <h1>Greg's Test Site</h1>
            <h2>I'm Greg, a full-stack developer living in Sussex.</h2>
        </div>
    )
}

export default IndexPage
```

## Add a new page
### Adding Blog page
```
touch src/pages/blog.js
```
``` js
import React from "react"

const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
            <p>Blog posts wil show up here later.</p>
        </div>
    )
}

export default BlogPage

```

## Linking internally
- To avoid entire page refresh, just swap out content
- Import  Link from gatsby NPM module
``` js
import { Link } from 'gatsby'
```
``` js
<p>Need a developer? <Link to="/contact">Contact Me</Link></p>
```

## Shared components, e.g. Navigation bar, header, footer
- Create a separate component that all pages can use
- Create the file for the component in src/components

```
touch src/components/footer.js
```

``` js
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <p>Created by Greg Parr </p>
        </footer>
    )
}

export default Footer
```


- Import in pages

``` js
import Footer from '../components/footer'
```

- Render in jsx where you want it ..
``` js
<Footer />
```

## Single Page Layout Components
- Create a universal layout component
- Create the new component

```
touch src/components/layout.js
```

``` js
import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
```
- Now can update pages to remove header and footer and place content in Layout instead, contents of Layout is passed to component in props as children

``` js
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Greg's Test Site</h1>
            <h2>I'm Greg, a full-stack developer living in Sussex.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default IndexPage
```

## Styling the site using CSS
- Create a location to hold the styles files
```
mkdir src/styles
touch src/styles/index.css
```
- import styles in to layout component

``` js
import '../styles/index.css'
```

- These styles will now be applied for everything that uses this layout component

## Enable SASS preprocessor so that we can make use of sass
- Install the Gatsby SASS plugin

```
npm install --save node-sass gatsby-plugin-sass
```

- Include the plugin in the gatsby-config.js file

``` js
module.exports = {
  plugins: [
    "gatsby-plugin-sass"
  ]
}
```

- Rename index.css to index.scss and update references to this new file name
- We need to restart gatsby develop if it is still running

## CSS Modules
- Preferred way to style Gatsby sites

### Styling the Header component
- Add header.scss to components folder

```
touch src/components/header.scss
```

- Add reference to Header component

```
import './header.scss'
```

- Note that these will be applied wherever the Header component will be used
- To stop these being global use CSS Modules - locally scoped css classes
- This can be done by 
    - renaming file to header.module.scss
    - update reference in header.js

    ``` js
    import headerStyles from './header.module.scss'
    ```

    - add class reference from headerStyles

    ``` js
    <li><Link className={headerStyles.link} to="/">Home</Link></li>
    ```

## Getting data in to the site with GraphQL
- Add to plugins

``` js
module.exports = {
  siteMetadata: {
    title: 'Greg\'s Homepage',
    author: 'Greg Parr'
  },
  plugins: [
    'gatsby-plugin-sass'
  ]
}
```

- In develop mode we can access GraphiQL by going to

```
localhost:8000/___graphql
```

- In header.js call graphql and useStaticQuery

``` js
import { graphql, useStaticQuery } from 'gatsby'
```

- Create an object to query the data

``` js
const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)
```

- Replace header so that it calls the result of the query

``` js
<Link className={headerStyles.title} to="/">
    {data.site.siteMetadata.title}
</Link>
```

## Using GraphQl playground instead of graphiQL

- set environment variable

```
touch .env.development
```

- add content

```
GATSBY_GRAPQL_IDE=playground
```

- load file in when running develop mode

```
npm install --save-dev env-cmd
```

- edit package.json develop script

```
"develop": "env-cmd .env.development gatsby develop",
```

# Adding posts to the blog
- Create a folder for the posts and add a couple of .md files

```
mkdir src/posts

touch src/posts/gatsby.md
touch src/posts/react.md
```

- Add some markdown

```
---
title: "React"
date: "2019-06-26"
--

A little bit about React.
```

- Install the plugin to get the markdown in to posts

```
npm install --save gatsby-source-filesystem
```

- Add to plugins array

``` js
module.exports = {
  siteMetadata: {
    title: 'Greg\'s Homepage',
    author: 'Greg Parr'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
```

- Install plugin to look for .md files and parse as useable data

```
npm install --save gatsby-transformer-remark
```

- Add to config file

``` js
module.exports = {
  siteMetadata: {
    title: 'Greg\'s Homepage',
    author: 'Greg Parr'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
```

## Dynamically adding pages for each post
- Generate a slug for each post
- Generate the blog post template
- Generate a new page for each post

### To do this ...
```
touch gatsby-node.js
```

- add content to add slug to nodes on startup

``` js
const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {

        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}
```

- Generate a template for the blog post page

```
mkdir src/templates
```

- Create file

```
touch src/templates/blog.js
```

``` js
import React from 'react'
import Layout from '../components/layout'

const Blog = () => {
    return (
        <Layout>
            This is the blog template
        </Layout>
    )
}

export default Blog
```

- Use createPages to dynamically generate the pages for the site from the markdown files
- Add to gatsby-node.js

``` js
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogTemplate = path.resolve("./src/templates/blog.js")

    const response = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    response.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
```

- Amend post template to create the post page

``` js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog
```

### Add ability to have images in posts
- Save image file to directory
- Amend .md file to include reference

```
![Grass](./grass.png)
```
- Install plugins

```
npm install gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images
```
- Add plugins to config file

``` js
module.exports = {
  siteMetadata: {
    title: 'Greg\'s Homepage',
    author: 'Greg Parr'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
```
