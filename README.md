> ## 🛠 Status: In Development
> LitElement is currently in development. As long as LitElement is, so is create-lit-app. This repo will be kept up to date with the latest version of LitElement, but there are things that haven't been finalized yet and you can expect some changes.

<br>

## Create-lit-app

[![Built with create-lit-app](https://img.shields.io/badge/built%20with-create--lit--app-blue.svg)](https://github.com/thepassle/create-lit-app) [![Build Status](https://travis-ci.org/thepassle/create-lit-app.svg?branch=master)](https://travis-ci.org/thepassle/create-lit-app) [![Mentioned in Awesome lit-html>](https://awesome.re/mentioned-badge.svg)](https://github.com/web-padawan/awesome-lit-html)

![Lit App Screenshot](https://i.imgur.com/3RtTwbi.jpg)

Demo:
https://create-lit-app.herokuapp.com/

[Create-lit-app on Stackblitz](https://stackblitz.com/edit/create-lit-app)

## Get Started Immediately

![Lit Cli](http://thepassle.nl/SGTEST/cla.gif)

You don’t need to install or configure tools like Webpack or Babel.
They are preconfigured so that you can focus on the code.

Clone/fork the [create-lit-app-advanced repo](https://www.github.com/thepassle/create-lit-app-advanced)
 or install the CLI if you want to get started quickly building a fullstack LitHTML app with:

* Routing
* Express api
* Redux
* Build with webpack


## Table of Contents

- [Quick start](#quickstart)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm build](#npm-build)
- [Folder Structure](#folder-structure)
- [Redux](#redux)
- [Routing](#routing)
- [Decorators](#decorators)
- [Adding an api](#adding-an-api)
- [Usage](https://stackblitz.com/@thepassle)
  - [Basic template](https://stackblitz.com/edit/create-lit-app-basic-template)
  - [Passing props](https://stackblitz.com/edit/create-lit-app-passing-props)
  - [Event handlers](https://stackblitz.com/edit/create-lit-app-event-handlers)
  - [Conditional rendering](https://stackblitz.com/edit/create-lit-app-conditional-rendering)
  - [Setting default values](https://stackblitz.com/edit/create-lit-app-default-values)
  - [Arrays](https://stackblitz.com/edit/create-lit-app-arrays)
  - [Updating arrays and objects](#updating-arrays-and-objects)
  - [Attributes](https://stackblitz.com/edit/create-lit-app-updating-objects-arrays)
  - [Reflecting props to attributes](https://stackblitz.com/edit/create-lit-app-reflect-to-attribute)
  - [Adding styles](https://stackblitz.com/edit/create-lit-app-styles)
  - [Querying dom](https://stackblitz.com/edit/create-lit-app-querying-dom)
  - [Making api calls](https://stackblitz.com/edit/create-lit-app-making-api-calls)
  - [Using directives](#using-directives)
    - [until directive](https://stackblitz.com/edit/create-lit-app-directives-until)
    - [unsafehtml directive](https://stackblitz.com/edit/create-lit-app-directives-unsafehtml)
    - [classMap directive](https://stackblitz.com/edit/create-lit-app-directives-classmap)
    - [styleMap directive](https://stackblitz.com/edit/create-lit-app-directives-stylemap)
  - [Installing components](https://stackblitz.com/edit/create-lit-app-installing-components)
  - [Upwards data flow](https://stackblitz.com/edit/create-lit-app-upwards-data)
  - [Slotted components](https://stackblitz.com/edit/create-lit-app-slotted)
  - [Light dom](https://stackblitz.com/edit/create-lit-app-light-dom)
  - [Typescript](https://stackblitz.com/edit/create-lit-app-typescript)
- [Lifecycle](#lifecycle)
- [Cheatsheet](#cheatsheet)
- [Polyfills](#polyfills)
- [Installing a dependency](#installing-a-dependency)
- [Testing your components](#testing-your-components)
- [Add LitElement to a website](#add-litelement-to-a-website)
- [Extensions](#extensions)
- [Frequently asked questions](#frequently-asked-questions)
  - [How does lit-html render?](#how-does-lit-html-render)
  - [How does LitElement know when to rerender?](#how-does-litelement-know-when-to-rerender)
  - [Why is my component not rerendering?](#why-is-my-component-not-rerendering)
  - [Why are there empty html comments in my markup?](#why-are-there-empty-html-comments-in-my-markup)
  - [Difference with VDOM?](#difference-with-vdom)
  - [Whats the difference between map and repeat?](#whats-the-difference-between-map-and-repeat)
  - [What is shadow dom?](#what-is-shadow-dom)
  - [Accessibility and shadow dom?](#accessibility-and-shadow-dom)
  - [Can I use x library?](#can-i-use-x-library)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Credits](#credits)
- [Further reading](#further-reading)
- [Acknowledgements](#acknowledgements)

## Quickstart

```sh
npm install --global create-lit-app
create-lit-app my-app

cd my-app
npm start
```

### npm start

Start `webpack-dev-server` on localhost `http://127.0.0.1:3000`:

```sh
npm run start
```

### npm test

Run tests:

```sh
npm run test
```

### npm build

Run the production build:

```sh
npm run build
node server.js
```

As easy as that! Your app is ready to be deployed.

## Folder Structure

After creation, your project should look like this:

```
create-lit-app/
  dist/
  node_modules/
  src/
    assets/
      favicon.ico
      github.svg
      logo.svg
    hello-world.js
    lit-app-styles.css
    index.html
    lit-app.js
  test/
    hello-world.html
    index.html
  .babelrc
  .eslintignore
  package-lock.json
  package.json
  README.md
  server.js
  webpack.config.js
```

## Redux

Check out the [create-lit-app-advanced repo](https://github.com/thepassle/create-lit-app-advanced) for a full example.

## Routing

Create-lit-app-advanced uses [Vaadin Router](https://github.com/vaadin/vaadin-router) for its routing.
Check out the [create-lit-app-advanced repo](https://github.com/thepassle/create-lit-app-advanced) for a full example.

## Decorators

Instead of using the `static get properties()` way of setting properties, you may also use [decorators](https://github.com/tc39/proposal-decorators#decorators). Decorators require the following two babel plugins that live in your `.babelrc` file.

`.babelrc`:

```js
[
  "@babel/plugin-proposal-decorators",
  { "legacy": true }
],
[
  "@babel/plugin-proposal-class-properties",
  { "loose": true }
]
```

Here's an example on how to use decorators:

```js
import { LitElement, html, property } from '@polymer/lit-element/';

class DemoElement extends LitElement {
  
  @property({type: String})
  foo = 'bar';

  render() {
    return html`
      <h1>${this.foo}</h1>
    `;
  }
}

customElements.define('demo-element', DemoElement);
```

## Adding an api

You can edit the `server.js` file and start adding endpoints straight away. Add the following to the devServer section in `webpack.config.js`:

```js
proxy: {
  '/api': {
    target: 'http://localhost:8000/',
    secure: false
  },
```

Check out the [create-lit-app-advanced repo](https://github.com/thepassle/create-lit-app-advanced) for a full example.

## Usage

- [Basic template](https://stackblitz.com/edit/create-lit-app-basic-template)
- [Passing props](https://stackblitz.com/edit/create-lit-app-passing-props)
- [Event handlers](https://stackblitz.com/edit/create-lit-app-event-handlers)
- [Conditional rendering](https://stackblitz.com/edit/create-lit-app-conditional-rendering)
- [Setting default values](https://stackblitz.com/edit/create-lit-app-default-values)
- [Arrays](https://stackblitz.com/edit/create-lit-app-arrays)
- [Updating arrays and objects](#updating-arrays-and-objects)
- [Attributes](https://stackblitz.com/edit/create-lit-app-updating-objects-arrays)
- [Reflecting props to attributes](https://stackblitz.com/edit/create-lit-app-reflect-to-attribute)
- [Adding styles](https://stackblitz.com/edit/create-lit-app-styles)
- [Querying dom](https://stackblitz.com/edit/create-lit-app-querying-dom)
- [Making api calls](https://stackblitz.com/edit/create-lit-app-making-api-calls)
- [Using directives](#using-directives)
  - [until directive](https://stackblitz.com/edit/create-lit-app-directives-until)
  - [unsafehtml directive](https://stackblitz.com/edit/create-lit-app-directives-unsafehtml)
  - [classMap directive](https://stackblitz.com/edit/create-lit-app-directives-classmap)
  - [styleMap directive](https://stackblitz.com/edit/create-lit-app-directives-stylemap)
- [Installing components](https://stackblitz.com/edit/create-lit-app-installing-components)
- [Upwards data flow](https://stackblitz.com/edit/create-lit-app-upwards-data)
- [Slotted components](https://stackblitz.com/edit/create-lit-app-slotted)
- [Light dom](https://stackblitz.com/edit/create-lit-app-light-dom)
- [Typescript](https://stackblitz.com/edit/create-lit-app-typescript)

## Lifecycle

  * `render()` (protected): Implement to describe the element's DOM using `lit-html`. Ideally,
  the `render` implementation is a [pure function](https://en.wikipedia.org/wiki/Pure_function) using only the element's current properties
  to describe the element template. This is the only method that must be implemented by subclasses.
  Note, since `render()` is called by `update()`, setting properties does not trigger
  an update, allowing property values to be computed and validated.

  * `shouldUpdate(changedProperties)` (protected): Implement to control if updating and rendering
  should occur when property values change or `requestUpdate()` is called. The `changedProperties`
  argument is a Map with keys for the changed properties pointing to their previous values.
  By default, this method always returns `true`, but this can be customized as
  an optimization to avoid updating work when changes occur, which should not be rendered.

  * `update(changedProperties)` (protected): This method calls `render()` and then uses `lit-html`
  in order to render the template DOM. It also updates any reflected attributes based on
  property values. Setting properties inside this method will *not* trigger another update.

  * `firstUpdated(changedProperties)`: (protected) Called after the element's DOM has been
  updated the first time, immediately before `updated()` is called.
  This method can be useful for capturing references to rendered static nodes that
  must be directly acted upon, for example in `updated()`.
  Setting properties inside this method will trigger the element to update.

  * `updated(changedProperties)`: (protected) Called whenever the element's DOM has been
  updated and rendered. Implement to perform post updating tasks via DOM APIs, for example,
  focusing an element. Setting properties inside this method will trigger the element to update.

  * `updateComplete`: Returns a Promise that resolves when the element has completed
  updating. The Promise value is a boolean that is `true` if the element completed the
  update without triggering another update. The Promise result is `false` if a
  property was set inside `updated()`. This getter can be implemented to await additional state.
  For example, it is sometimes useful to await a rendered element before fulfilling
  this Promise. To do this, first await `super.updateComplete` then any subsequent state.

  * `requestUpdate(name?, oldValue?)`: Call to request the element to asynchronously
  update regardless of whether or not any property changes are pending. This should
  be called when an element should update based on some state not triggered
  by setting a property. In this case, pass no arguments. It should also be called
  when manually implementing a property setter. In this case, pass the property
  `name` and `oldValue` to ensure that any configured property options are honored.
  Returns the `updateComplete` Promise which is resolved when the update completes.

  * `createRenderRoot()` (protected): Implement to customize where the
  element's template is rendered by returning an element into which to
  render. By default this creates a shadowRoot for the element.
  To render into the element's childNodes, return `this`. See an example [here](#light-dom)

Example:

![lifecycle](http://thepassle.nl/SGTEST/lifecycle.gif)

`my-app.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

import './lifecycle-demo.js';

class myApp extends LitElement {
  static get properties() {
    return {
      showElement: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.showElement = true;
  }

  render() {
    let { showElement } = this;

    return html`
      <!-- 
      Removing the element from dom will trigger a `disconnectedCallback()` in `lifecycle-demo.js`,
      adding it to dom will trigger a first `firstUpdated()` and a `updated()` in `lifecycle-demo.js` 
      -->
      <button @click=${() => this.showElement = !this.showElement}>toggle element</button>

      ${showElement 
        ? html`<lifecycle-demo></lifecycle-demo>`
        : ''
      }
    `;
  }
}

customElements.define('my-app', myApp);
```

`lifecycle-demo.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

class LifecycleDemo extends LitElement {
  static get properties() {
    return {
      myArr: { type: Array }
    };
  }

  constructor() {
    super();
    this.myArr = ['foo', 'bar'];
  }

  /**
  * Called after the element's DOM has been updated the first time, immediately before updated() 
  * is called. This method can be useful for querying dom. Setting properties inside 
  * this method will trigger the element to update.
  */
  firstUpdated() {
    console.log('first updated!');
  }

  /**
  * Implement to perform post-updating tasks via DOM APIs, for example, focusing an element.
  * Setting properties inside this method will *not* trigger another update.
  */
  updated(changedProps) {
    super.updated(changedProps);
    console.log('updated!');
  }

  /**
  * Invoked each time the custom element is disconnected from the document's DOM.
  * Useful for running clean up code.
  */
  disconnectedCallback() {
    console.log('disconnected!');
  }

  _addItem() {
    this.myArr = [...this.myArr, 'baz'];
  }

  render() {
    let { myArr } = this;

    return html`
      <!-- Adding an item will cause myArr to change, the property change will get picked up and trigger an update -->
      <button @click=${this._addItem}>add item</button>

      ${myArr.map((item) => {
        return html`<li>${item}</li>`;
      })}
    `;
  }
}

customElements.define('lifecycle-demo', LifecycleDemo);
```

## Cheatsheet

Text:

```js
html`<h1>Hello ${name}</h1>`
```

Expression:
```js
html`<div>${disabled ? 'Off' : 'On'}</div>`
```

Attribute:
```js
html`<div id=${id}></div>`
```

Boolean Attribute:
```js
html`<input type="checkbox" ?checked=${checked}>`
```

Property:
```js
html`<input .value=${value}>`
```

Event Handler:
```js
html`<button @click=${(e) => console.log('clicked')}>Click Me</button>`
```

## Polyfills

Create-lit-app includes the following [polyfills](https://en.wikipedia.org/wiki/Polyfill):

* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).

* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

* [`Web Components`](https://github.com/webcomponents/webcomponentsjs) via [`webcomponentsjs`](https://github.com/webcomponents/webcomponentsjs). This loader performs client side feature detection and requests only needed polyfills. E.g., for IE11 it will load webcomponents-lite.js which includes full list of polyfills. But for Edge webcomponents-hi-ce-sd.js which contains polyfills for HTML Import, Custom Element and ShadowDOM.

* [`custom-elements-es5-adapter.js`]() According to the spec, only ES6 classes (https://html.spec.whatwg.org/multipage/scripting.html#custom-element-conformance) may be passed to the native customElements.define API. For best performnace, ES6 should be served to browsers that support it, and ES5 code should be serve to those that don't. Since this may not always be possible, it may make sense to compile and serve ES5 to all browsers. However, if you do so, ES5-style custom element classes will now not work on browsers with native Custom Elements because ES5-style classes cannot properly extend ES6 classes, like HTMLElement. As a workaround, if your project has been compiled to ES5, load custom-elements-es5-adapter.js before defining Custom Elements. This adapter will automatically wrap ES5. *The adapter must NOT be compiled.*

## Installing a Dependency

You may install other dependencies (for example, Axios) with `npm`:

```sh
npm install --save axios
```

Alternatively you may use `yarn`:

```sh
yarn add axios
```

This works for any library, not just `axios`.

## Testing your components

Create-lit-app uses [karma](https://www.npmjs.com/package/karma) for testing. You can start the test runner with `npm test`, and edit test files in the `test/` folder. Here's an example of a test:

`test/hello-world.spec.js`:

```js
import { html, render } from 'lit-html';
import { expect } from 'chai';

import '../src/hello-world';

describe('hello-world', () => {
  let element;

  const fixture = html`
    <hello-world .greeting=${'Welcome'}></hello-world>
  `;

  beforeEach(async () => {
    render(fixture, document.body);
    element = document.body.firstElementChild;
    await element.updateComplete;
  });

  afterEach(() => {
    element.remove();
  });

  it('should render a welcome message', () => {
    const title = element.shadowRoot.querySelector('h1');
    expect(title.innerText).to.equal('Welcome');
  });
});

```

## Add LitElement to a website

In this section, we will show how to add a LitElement component to an existing HTML page. You can follow along with your own website, or create an empty HTML file to practice.

There will be no complicated tools or install requirements — **to complete this section, you only need an internet connection, and a minute of your time.**

```html
<html>
<head>
  <!-- Polyfills only needed for Firefox and Edge. -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@next/webcomponents-loader.js"></script>
</head>
<body>
  <!-- Works only on browsers that support Javascript modules like
       Chrome, Safari, Firefox 60, Edge 17 -->
  <script type="module">
    import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
    
    class MyElement extends LitElement {

      static get properties() { 
        return { 
          mood: { type: String }
        }
      }

      render() {
        const { mood } = this;
        return html`<style> .mood { color: green; } </style>
          Web Components are <span class="mood">${mood}</span>!`;
      }
      
    }

    customElements.define('my-element', MyElement);
  </script>
  
  <my-element mood="great"></my-element>
  
</body>
</html>
```

## Extensions

These are some extensions made by the community on top of create-lit-app:

* [create-lit-app-typescript](https://github.com/thepassle/create-lit-app/tree/typescript) - Get started with typescript.
* [create-lit-app-advanced](https://github.com/thepassle/create-lit-app-advanced) - Get started with redux, routing, and an express API.
* [create-lit-app-auth](https://github.com/sheideman/Create-Lit-App-Auth-Starter) - Get started with authentication using [jwt](https://jwt.io/), passportjs, and mongo. By [Steve Heideman](https://github.com/sheideman).


## Frequently asked questions


### How does lit-html render?
Lit-html lets you write HTML templates with JavaScript template literals and efficiently render and re-render those templates to DOM. Tagged template literals are a feature of ES6 that can span multiple lines, and contain javascript expressions. A tagged template literal could look something like this:

```js
const planet = "world";

html`hello ${planet}!`;
```

Tagged template literals are just standard ES6 syntax. And these tags are actually just functions! Consider the following example:

```js
function customFunction(strings) {
    console.log(strings); // ["Hello universe!"]
}

customFunction`Hello universe!`;
```

They can also handle expressions:

```js
const planet = "world";

function customFunction(strings, ...values) {
    console.log(strings); // ["Hello ", "! five times two equals "]
    console.log(values); // ["world", 10]
}

customFunction`Hello ${planet}! five times two equals ${ 5 * 2 }`;
```

And if we look in the [source code](https://github.com/Polymer/lit-html/blob/master/src/lit-html.ts) we can see that's exactly what lit-html does:

```js
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
export const html = (strings: TemplateStringsArray, ...values: any[]) =>
    new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
```

Lit-html's `html` tag doesn't return dom, it returns an object representing the template, called a TemplateResult.

A `<template>` element is an inert fragment of DOM. Inside a `<template>`, script don't run, images don't load, custom elements aren't upgraded, etc. `<template>`s can be efficiently cloned. They're usually used to tell the HTML parser that a section of the document must not be instantiated when parsed, and will be managed by code at a later time, but it can also be created imperatively with createElement and innerHTML.

Lit-html creates HTML `<template>` elements from the tagged template literals, and then clone's them to create new DOM.

On the initial render it clones the template, then walks it using the remembered placeholder positions, to create Part objects.

A Part is a "hole" in the DOM where values can be injected. lit-html includes two type of parts by default: NodePart and AttributePart, which let you set text content and attribute values respectively. The Parts, container, and template they were created from are grouped together in an object called a TemplateInstance.

### How does LitElement know when to rerender?

LitElement reacts to changes in properties and rerenders your component if a value has changed. You can declare these properties in the properties getter:

```js
static get properties() {
  return {
    myBoolean: { type: Boolean }
  }
}

constructor() {
  super();
  this.myBoolean = false;
}
```

Setting `this.myBoolean = true;` will trigger a rerender.

### Why is my component not rerendering?

Deep changes in objects or arrays are not observed and need to be immutably set or require you to manually call `this.requestUpdate()`. Consider the following example:

```js
import { LitElement, html } from '@polymer/lit-element/';

class UpdatingDemo extends LitElement {
  static get properties() {
    return {
      myObj: { type: Object }
    };
  }

  constructor() {
    super();
    this.myObj = { id: 1, text: "foo" };
  }

  _updateObj() {
    // this.myObj.text = "bar"; This change will not get picked up and wont trigger a rerender. You can however call this.requestUpdate(); to manually cause the rerender.

    this.myObj = {...this.myObj, text: "bar"}; // This change will get picked up and cause your component to rerender.
  }

  render() {
    const { myObj } = this;
    
    return html`
      <div>
        ${myObj.text}
        <button @click=${this._updateObj}>Update</button>
      </div>
    `;
  }
}

customElements.define('updating-demo', UpdatingDemo);
```

### Why are there empty html comments in my markup?

Lit-html uses them to keep track of its expression/parts locations, so it can update efficiently, consider the following example:

code:

```js
class DemoEl extends LitElement {
  static get properties() {
    return {
      myString: { type: String }
    };
  }
  constructor(){
    super();
    this.myString = 'bar';
  }

  render() {
    const { myString } = this;
    return html`
      <h1>foo</h1>
      <h1>${myString}</h1>`; // will wrap `${myString}` with <!---> 
  }
}
```

output:

```html
<demo-el>
  #shadow-root (open)
    <!---->
    <h1>foo</h1>
    <h1>
      <!---->
      "bar"
      <!---->
    </h1>
    <!---->
</demo-el>
```

### Difference with VDOM?
VDOM implementations keep a separate JavaScript structure representing the DOM structure in the browser. For all the changes to the structure the VDOM implementation will perform a diffing operation and will perform updates to the DOM itself.

While this method is effective, it does mean a lot of excessive processing is done. Lit-html leverages the ECMAScript ES6 tagged template literals feature to use native browser rendering engine implementations to perform the same task. 

### Whats the difference between map and repeat?

If you expect to the order of elements to change (swapping position of elements, deleting elements within the array) use `repeat`. If your array length never changes, or if you only append to to it use `map`.
If you have an array `[a,b,c]`, `map` will render 3 nodes. When when you change the array to `[b,a,c]` the dom nodes stay in the same position but the data passed to the nodes changes

While `repeat` will swap the nodes along with the data. this can be very useful if you modify dom nodes which isn't expressed in any of your data.

TL;DR use map for very small lists and very small templates. Iterating over a small hardcoded list of options to build a form for example.

### What is shadow dom?

Read [this post](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af) by [Leon Revill](https://twitter.com/revillweb) on shadow dom and the difference between the `open` and `closed` modes.

### Accessibility and shadow dom?
Screenreaders have no difficulty with piercing shadow dom. From the Polymer FAQ:

> “A common misconception is that the Shadow DOM doesn’t play nicely with assistive technologies. The reality is that the Shadow DOM can in fact be traversed and any node with Shadow DOM has a shadowRoot property which points to its shadow document. Most assistive technologies hook directly into the browser’s rendering tree, so they just see the fully composed tree.”

### Can I use x library?
Lots of libraries using global API like document.querySelector and relying on global CSS would be broken by Shadow DOM. Libraries themselves should be updated to work with the new concepts, where possible. Webcomponents are still in early stages of adaptation, lots of libraries would actually make great webcomponents, so if you're interested in using one of your favourite libraries, please consider contributing.

Some libraries could potentially still work by querying the shadowroot of an element.

Read more about it in [this](https://medium.com/dev-channel/dont-use-jquery-plugins-with-shadow-dom-e161f1891511) medium post by [Rob Dodson](https://twitter.com/rob_dodson)

## Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Contributing

We'd love to have your helping hand on create-lit-app! Feel free to create a pull request if you want to help out.

## Credits

### Helpful links:

* [Awesome lit-html](https://github.com/web-padawan/awesome-lit-html)
* [litHTML](https://github.com/Polymer/lit-html)
* [Polymer slack](https://polymer.slack.com/)
* [Vaadin Router](https://github.com/vaadin/vaadin-router)
* [Polymer3-webpack-starter](https://github.com/web-padawan/polymer3-webpack-starter)
* [Polymer PWA starter kit](https://github.com/Polymer/pwa-starter-kit)
* [Redux](https://redux.js.org/introduction)

## Acknowledgements

* Owen Buckley of [Project Evergreen](https://projectevergreen.github.io/)
* [Web-padawan](https://github.com/web-padawan)
* [Lars den Bakker](https://github.com/LarsDenBakker)