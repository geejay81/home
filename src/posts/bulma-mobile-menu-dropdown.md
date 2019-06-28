---
title: 'Toggling the Bulma Menu on Mobile Devices'
date: '2019-06-28'
author: 'Greg Parr'
tags: ['Bulma','React','Gatsby']
---

### Bulma menu

On mobile viewports, the Bulma navigation menu is initially hidden until an 'is-active' class is applied to the element with class 'navbar-menu'. Unlike Bootstrap, Bulma is 'un-opinionated' so doesn't come with a javascript package to do this for you, meaning you can do this however you want.

### What do we need to do

To get the required behaviour, we only need to do a couple of things:

1. toggle the **is-active** class on the **navbar-menu** so that the menu is either displayed or hidden depending on it's current state

2. toggle the **is-active** class on the **navbar-burger** button so that either the 'burger' or 'close' icon is shown on the button, again depending on it's current state

### How do we do this

I've currently got a NavBar component where all of the Bulma navbar layout is rendered. The entire component JS file looks like this:

```jsx
import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/blog">Blog</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
```

When toggling the classes on the button and the menu, we want to be able to refer to the elements in JavaScript so we will add some id's to these two elements so we can use the **getElementById** function of **document**. We could refer to these with **getElementsByClassName** but I'd rather get an object back than set up a loop for an array, even if the array is only going to have one thing in it.

Why don't we use the same name as the classes for the id's, i.e. **navbar-burger** and **navbar-menu**. These names are as good as any, and describe what we want.

```jsx
<a id="navbar-burger" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
</a>
```

```jsx
<div id="navbar-menu" className="navbar-menu">
    <div className="navbar-start">
        <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
        <Link className="navbar-item" activeClassName="is-active" to="/blog">Blog</Link>
        <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
        <Link className="navbar-item" activeClassName="is-active" to="/contact">Contact</Link>
    </div>
</div>
```

Now we can add a function to the component to handle the click of the burger and, as we've already seen above, we only need this to toggle the class **is-active** on the **navbar-burger** and **navbar-menu** elements ...

```jsx
const handleMenuClick = () => {
    const burger = document.getElementById('navbar-burger')
    burger.classList.toggle('is-active')
    const menu = document.getElementById('navbar-menu')
    menu.classList.toggle('is-active')
}
```

> I've written this as an arrow function so I don't need to bind it to **this**. For more information, see the [React documentation](https://reactjs.org/docs/faq-functions.html)

We can now add an onClick event to the navbar-burger button that calls **handleMenuClick** ...

```jsx
<a id="navbar-burger" role="button" onClick={handleMenuClick} className="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
</a>
```

Finally, we just need to test that it works. The full final code of the NavBar component is below ...

```jsx
import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {

    const handleMenuClick = () => {
        const burger = document.getElementById('navbar-burger')
        burger.classList.toggle('is-active')
        const menu = document.getElementById('navbar-menu')
        menu.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a id="navbar-burger" role="button" onClick={handleMenuClick} className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbar-menu" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/blog">Blog</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
```