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
- [Usage](#usage)
  - [Basic template](#basic-template)
  - [Passing props](#passing-props)
  - [Event handlers](#event-handlers)
  - [Conditional rendering](#conditional-rendering)
  - [Setting default values](#setting-default-values)
  - [Arrays](#arrays)
  - [Updating arrays and objects](#updating-arrays-and-objects)
  - [Attributes](#attributes)
  - [Reflecting props to attributes](#reflecting-props-to-attributes)
  - [Adding styles](#adding-styles)
  - [Querying dom](#querying-dom)
  - [Making api calls](#making-api-calls)
  - [Using directives](#using-directives)
    - [until directive](#until-directive)
    - [unsafehtml directive](#unsafehtml-directive)
  - [Installing components](#installing-components)
  - [Upwards data flow](#upwards-data-flow)
  - [Slotted components](#slotted-components)
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
  - [Whats the difference between map and repeat?](#whats-the-difference-between-map-and-repeat)
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

Check out the [create-lit-app-advanced repo](https://stackblitz.com/edit/create-lit-app) for a full example.

## Routing

Create-lit-app-advanced uses [Vaadin Router](https://github.com/vaadin/vaadin-router) for its routing.
Check out the [create-lit-app-advanced repo](https://stackblitz.com/edit/create-lit-app) for a full example.

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

Check out the [create-lit-app-advanced repo](https://stackblitz.com/edit/create-lit-app) for a full example.

## Usage

[Create-lit-app on Stackblitz](https://stackblitz.com/edit/create-lit-app)

### Basic template

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-basic-template)

`basic-demo.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

const helloTemplate = (name) => html`<h1>Hello ${name}!</h1>`;

class BasicDemo extends LitElement {
  render() {    
    return html`
      <div>
        ${helloTemplate("universe")}
      </div>
    `;
  }
}

customElements.define('basic-demo', BasicDemo);
```


### Passing props

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-passing-props?file=book-list.js)

`book-list.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';
import './book-list-item.js';

class BookList extends LitElement {
  static get properties() {
    return {
      books: Array
    };
  }

  constructor() {
    super();
    this.books = [{ author: 'G.R.R. Martin', title: 'A Game of Thrones' }, { author: 'Tolkien', title: 'Lord of the Rings'}];
  }

  render() {    
    const { books } = this;

    return html`
      <div>
        ${books.map((book) => {
          return html`
            <book-list-item .book=${book}></book-list-item>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('book-list', BookList);
```

`book-list-item.js`:

```js
class BookListItem extends LitElement {
  static get properties() {
    return {
      book: Object
    };
  }

  render() {    
    const { book } = this;

    return html`
      <h1>
        ${book.author}
      </h1>
      <p>
        ${book.title}
      </p>
    `;
  }
}

customElements.define('book-list-item', BookListItem);
```

### Event handlers

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-event-handlers?file=event-handler-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';

class EventHandlerDemo extends LitElement {
  _clickHandler(e) {
    console.log(e);
  }

  render() {    
    return html`
      <button @click="${(e) => this._clickHandler(e)}"></button>
    `;
  }
}

customElements.define('event-handler-demo', EventHandlerDemo);
```

### Conditional rendering

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-conditional-rendering?file=conditional-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';

class ConditionalDemo extends LitElement {
  static get properties() {
    return {
      myBool: Boolean
    };
  }

  constructor() {
    super();
    this.myBool = true;
  }

  render() {    
    const { myBool } = this;

    return html`
      <div>
        ${myBool ? 'foo' : 'bar'}
      </div>

      <!-- or return some html -->
      <div>
        ${myBool 
          ? html`<h1>foo</h1>`
          : html`<h1>bar</h1>`
        }
      </div>
    `;
  }
}

customElements.define('conditional-demo', ConditionalDemo);

```

### Setting default values

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-default-values?file=default-values-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';

class DefaultValues extends LitElement {
  static get properties() {
    return {
      book: Object
    };
  }

  constructor() {
    super();
    this.book = { author: 'G.R.R. Martin', title: 'A Game of Thrones' };
  }

  render() {    
    const { book } = this;

    return html`
       <h1>
         ${book.author}
       </h1>
       <p>
         ${book.title}
       </p>
    `;
  }
}

customElements.define('default-values-demo', DefaultValues);
```

### Arrays

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-arrays?file=array-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';

class ArrayDemo extends LitElement {
  static get properties() {
    return {
      myArr: Array
    };
  }

  constructor() {
    super();
    this.myArr = [{ name: "foo" }, { name: "bar"}];
  }

  render() {
    const { myArr } = this;
    
    return html`
      <div>
        ${myArr.map((item) => {
            return html`<h1>${item.name}</h1>`;
          })
        }
      </div>
    `;
  }
}

customElements.define('array-demo', ArrayDemo);
```

### Updating arrays and objects

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-updating-objects-arrays)

```js
import { LitElement, html } from '@polymer/lit-element/';

class UpdatingDemo extends LitElement {
  static get properties() {
    return {
      myArr: Array,
      myObj: Object
    };
  }

  constructor() {
    super();
    this.myObj = { id: 1, text: "foo" };
    this.myArr = [{ id: 1 }, { id: 2}];
  }

  _updateArray() {
    this.myArr = [...this.myArr, {id: 3}];
  }

  // Alternatively:
  // _updateArray() {
  //   this.myArr.push({id:3});
  //   this.requestUpdate();
  // }
  

  _updateObj() {
    this.myObj = {...this.myObj, text: "bar"};
  }

  // Alternatively:
  // _updateObj() {
  //   this.myObj.text = "bar";
  //   this.requestUpdate();
  // }

  render() {
    const { myArr, myObj } = this;
    
    return html`
      <div>
        ${myArr.map((item) => {
            return html`<h1>${item.id}</h1>`;
          })
        }
        <button @click=${() => this._updateArray()}>Update array</button>

        <br><br>

        <h1>${myObj.id}: ${myObj.text}</h1>
        <button @click=${() => this._updateObj()}>Update object</button>
      </div>
    `;
  }
}

customElements.define('updating-demo', UpdatingDemo);
```

### Attributes

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-attributes?file=attributes-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';
import { AppStyles } from './styles.js';

class AttributesDemo extends LitElement {
  static get properties() {
    return {
      color: String,
      checked: Boolean
    };
  }
    
  constructor() {
    super();
    this.color = "red";
    this.checked = true;
  }

  render() {  
    const { color, checked } = this;

    return html`
      ${ AppStyles }

      <!-- boolean values -->
      <input type="checkbox" ?checked=${checked}>

      <h1 class="${color}">
        Hello universe!
      </h1>
    `;
  }
}

customElements.define('attributes-demo', AttributesDemo);
```

### Reflecting props to attributes

`my-app.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

class MyApp extends LitElement {
  render() {
    return html`
        <style>
          my-button {
            color: green;
          }
          my-button[disabled] {
            color: red;
          }
        </style>

        <my-button disabled></my-button>
        <my-button></my-button>

    `; 
  }
}

customElements.define('my-app', MyApp);
```

`my-button.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

class MyButton extends LitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      }
    };
  }

  render() {    
    const { disabled } = this;
    return html`
      <style>
        .disabled {
          cursor: not-allowed;
        }
        .enabled {
          cursor: pointer;
        }
      </style>

      <div class="${disabled ? 'disabled' : 'enabled'}">
        ${disabled ? 'Click me!' : 'Dont click me!'}
      </div>
    `;
  }
}

customElements.define('my-button', MyButton);
```

### Adding styles

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-styles?file=styles-demo.js)

`styles-demo.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';
import { AppStyles } from './styles.js';

class StylesDemo extends LitElement {
  render() {    
    return html`
       ${AppStyles}
       <h1 class="title">
         Hello universe!
       </h1>
    `;
  }
}

customElements.define('styles-demo', StylesDemo);
```

`styles.js`:

```js
import { html } from '@polymer/lit-element';

export const AppStyles = html`
  <style>
    .title {
      color: red;
    }
  </style>
`;
```

Alternatively, you can write styles inside your component.

```js
import { LitElement, html } from '@polymer/lit-element/';

class StylesDemo extends LitElement {
  render() {    
    return html`
        <style>
          .title {
            color: red;
          }
        </style>
        
        <h1 class="title">
          Hello universe!
        </h1>
    `;
  }
}

customElements.define('styles-demo', StylesDemo);
```


### Querying dom

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-querying-dom?file=querying-dom-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';

class QueryingDomDemo extends LitElement {
  firstUpdated() {
    const title = this.shadowRoot.querySelector('h1').textContent;
    console.log(title);
  }
  
  render() {    
    return html`
        <h1>
          Hello universe!
        </h1>
      `;
  }
}

customElements.define('querying-dom-demo', QueryingDomDemo);
```

### Making api calls

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-making-api-calls?file=create-lit-app.js)

```js
import { LitElement, html } from '@polymer/lit-element/';

class ApiDemo extends LitElement {
  static get properties() {
    return {
      response: Array
    }
  }

  constructor() {
    super();
    this.response = [];
  }

  firstUpdated() {
    fetch('https://swapi.co/api/people/')
      .then((r) => r.json())
      .then((r) => {
        this.response = r.results;
      });
  }

  render() {
    const { response } = this;
    return html`
        <ul>
          ${response.map((item) => {
              return html`<li>${item.name}</li>`;
            })
          }
        </ul>
      `;
  }
}

customElements.define('api-demo', ApiDemo);
```

Alternatively you can use a [directive](#using-directives).

### Using directives

#### until directive

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-directives-until)

```js
import { LitElement, html } from '@polymer/lit-element/';
import { until } from 'lit-html/directives/until';

class DirectivesDemo extends LitElement {
  render() {    
    return html`
        <p>
          ${until(
              fetch('https://swapi.co/api/people/1')
                .then((r) => r.json())
                .then((r) => html`${r.name}`),
              html`<span>Loading...</span>`)
          }
        </p>
      `;
  }
}

customElements.define('directives-demo', DirectivesDemo);
```

#### unsafeHTML directive

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-directives-unsafehtml?file=directives-demo.js)

```js
import { LitElement, html } from '@polymer/lit-element/';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

const externalTemplate = "<h1>Hello universe!</h1>";

class DirectivesDemo extends LitElement {
  render() {    
    return html`
        <div>
          <!-- wrong: -->
          ${externalTemplate}

          <!-- right: -->
          ${unsafeHTML(externalTemplate)}
        </div>
      `;
  }
}

customElements.define('directives-demo', DirectivesDemo);
```

### Installing components

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-installing-components?file=installing-demo.js)

Run `npm i --save @material/mwc-button`

Import and use:

```js
import { LitElement, html } from '@polymer/lit-element/';
import '@material/mwc-button/';

class InstallingDemo extends LitElement {
  render() {    
    return html`
        <mwc-button>Click me!</mwc-button>
    `;
  }
}

customElements.define('installing-demo', InstallingDemo);
```

### Upwards data flow

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-upwards-data?file=add-book-component.js)

`book-list.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';
import './add-book-component.js';

class BookList extends LitElement {
  static get properties() {
    return {
      books: Array
    };
  }

  constructor() {
    super();
    this.books = [{ author: 'G.R.R. Martin', title: 'A Game of Thrones' }, { author: 'Tolkien', title: 'Lord of the Rings'}];
  }

  _addBook(event) {
    this.books = [...this.books, event.detail];
  }

  render() {    
    const { books } = this;

    return html`
      <div>
        ${books.map((book) => {
          return html`
            <h1>${book.title}</h1>
            <p>${book.author}</p>
          `;
        })}
        <add-book-component @book-added=${(event) => this._addBook(event)}></add-book-component>
      </div>
    `;
  }
}

customElements.define('book-list', BookList);
```


`add-book-component.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

class AddBookComponent extends LitElement {
  _submitBook() {
    const author = this.shadowRoot.querySelector('#author').value;
    const title = this.shadowRoot.querySelector('#title').value;
    this.dispatchEvent(new CustomEvent('book-added', { detail: { author, title } }));
  }

  render() {  
    return html`
      author: <input id="author"></input>
      title: <input id="title"></input>
      
      <button @click=${() => this._submitBook()}>
        add a book!
      </button>
    `;
  }
}

customElements.define('add-book-component', AddBookComponent);
```

### Slotted components

#### Basic demo:

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-slotted?file=container-element.js)

`container-element.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';
import './card-element.js';

class ContainerEl extends LitElement {
  render() {
    return html`
      <card-element>
        <h1 slot="title">Hello universe</h1>
        <p slot="details">This is some text</p>
      </card-element>
    `; 
  }
}

customElements.define('container-el', ContainerEl);
```


`card-element.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

class CardElement extends LitElement {
  render() {    
    return html`
      <div class="card-wrapper">
        <slot name="title"></slot>
        <slot name="details"></slot>
      </div>
    `;
  }
}

customElements.define('card-element', CardElement);
```

#### You can also slot custom elements like so:

`my-app.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';
import './card-element.js';
import './book-item.js';

class MyApp extends LitElement {
  static get properties() {
    return {
      book: Object
    };
  }

  constructor() {
    super();
    this.book = { author: 'Tolkien', title: 'Lord of the Rings' };
  }

  render() {
    const { book } = this;
    return html`
      <card-element>
        <book-item slot="book-details" .book=${book}></book-item>
      </card-element>
    `; 
  }
}

customElements.define('my-app', MyApp);
```

`card-element.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

class CardElement extends LitElement {
  render() {    
    return html`
      <div class="card-wrapper">
        <slot name="book-details"></slot>
      </div>
    `;
  }
}

customElements.define('card-element', CardElement);
```

`book-item.js`:

```js
class BookItem extends LitElement {
  static get properties() {
    return {
      book: Object
    };
  }

  render() {
    const { book } = this;

    return html`
      <h1>${book.author}</h1>
      <p>${book.title}</p>
    `;
  }
}

customElements.define('book-item', BookItem);
```

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
  To render into the element's childNodes, return `this`.

Example:

![lifecycle](http://thepassle.nl/SGTEST/lifecycle.gif)

`my-app.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';

import './lifecycle-demo.js';

class myApp extends LitElement {
  static get properties() {
    return {
      showElement: Boolean
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
      myArr: Array
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
      <button @click=${() => this._addItem()}>add item</button>

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

Create-lit-app uses [web components tester](https://www.npmjs.com/package/web-component-tester) for it's testing, but you can also eject and use something like Karma. You can start the test runner with `npm test`, and edit test files in the `test/` folder. Here's an example of a test:

`test/home-page.html`:

```html
<html>
<head>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
  <title>home-page</title>

  <script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
  <script src="../node_modules/wct-browser-legacy/browser.js"></script>

  <!-- Import the element to test -->
  <script type="module" src="../src/components/home-page.js"></script>

</head>
<body>

  <test-fixture id="basic">
    <template>
       <home-page></home-page>
    </template>
  </test-fixture>

  <script>
    suite('home-page tests', () => {
      var home;

      setup(async () => {
        home = fixture('basic');

        // note how we leverage the updateComplete lifecycle method to wait until our component is ready
        await home.updateComplete;
      });

      test('homepage shows the welcome message', () => {
        var title = home.shadowRoot.querySelector('h1').textContent;
        assert.equal(title, "Welcome");
      });
    });
  </script>
</body>
</html>
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
          mood: String 
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

* [create-lit-app-auth](https://github.com/sheideman/Create-Lit-App-Auth-Starter) - Get started with authentication using [jwt](https://jwt.io/), passportjs, and mongo.


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
    myBoolean: false
  }
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
      myObj: Object
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
        <button @click=${() => this._updateObj()}>Update</button>
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
      myString: String
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

### Whats the difference between map and repeat?

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

### Credits & helpful links:

* [Awesome lit-html](https://github.com/web-padawan/awesome-lit-html)
* [litHTML](https://github.com/Polymer/lit-html)
* [Polymer slack](https://polymer.slack.com/)
* [Vaadin Router](https://github.com/vaadin/vaadin-router)
* [Polymer3-webpack-starter](https://github.com/web-padawan/polymer3-webpack-starter)
* [Polymer PWA starter kit](https://github.com/Polymer/pwa-starter-kit)
* [Material components](https://github.com/material-components/material-components-web-components)

## Further reading
* [Redux](https://redux.js.org/introduction)
* [Making a fullstack app with lit](https://medium.com/@pascalschilp/making-a-fullstack-crud-app-with-lithtml-redux-express-and-webpack-fe7e5cf8b3ef)
* [Moving from Polymer to lit-html](https://43081j.com/2018/08/future-of-polymer)
* [LitElement To Do app](https://medium.com/@westbrook/litelement-to-do-app-1e08a31707a4)

## Acknowledgements

* Owen Buckley of [Project Evergreen](https://projectevergreen.github.io/)
* [Web-padawan](https://github.com/web-padawan)
* [Lars den Bakker](https://github.com/LarsDenBakker)