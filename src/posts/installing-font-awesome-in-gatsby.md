---
title: 'Installing Font Awesome in Gatsby'
date: '2019-06-30'
author: 'Greg Parr'
tags: ['Gatsby','React', 'Fonts']
---

### Font Awesome

The addition of icons to a website can really improve the look and feel of the site. Font Awesome is a large library of vector icons that are widely used and they look great! You'll often see them bundled with common libraries and packages.

### Installation

On the Font Awesome website, there is a link to a package specifically for React, we will use that. The abridged instructions from the GitHub project page are as follows:

- Install the packages from NPM

```
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome
```

### Usage

Initially, I'd like to include icons in the menu - e.g. have a picture of a House next to the Home link in the menu. This can be done by:

1. Importing the **FontAwesomeIcon** component from the react-fontawesome library

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
```

2. Import the specific icons that we want to use from the library

```jsx
import { faHome } from '@fortawesome/free-solid-svg-icons'
```

3. Add the component to the JSX where you want the icon to appear

```jsx
<FontAwesomIcon icon={faHome} />
```