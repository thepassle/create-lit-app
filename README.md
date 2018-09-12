> ## 🛠 Status: In Development
> LitElement is currently in development. As long as LitElement is, so is create-lit-app. This repo will be kept up to date with the latest version of LitElement, but there are things that haven't been finalized yet and you can expect some changes.

<br>

## Create-lit-app

[![Built with create-lit-app](https://img.shields.io/badge/built%20with-create--lit--app-blue.svg)](https://github.com/thepassle/create-lit-app) [![Build Status](https://travis-ci.org/thepassle/create-lit-app.svg?branch=master)](https://travis-ci.org/thepassle/create-lit-app) [![Mentioned in Awesome lit-html>](https://awesome.re/mentioned-badge.svg)](https://github.com/web-padawan/awesome-lit-html)

![Lit App Screenshot](https://i.imgur.com/CaDLkto.png)

Demo:
https://create-lit-app.herokuapp.com/

[Create-lit-app on Stackblitz](https://stackblitz.com/edit/create-lit-app)

## Get Started Immediately

![Lit Cli](http://thepassle.nl/SGTEST/cla.gif)

You don’t need to install or configure tools like Webpack or Babel.
They are preconfigured so that you can focus on the code.

Clone/fork this repo or install the CLI if you want to get started quickly building a fullstack LitHTML app with:

* Routing
* Express api
* Redux
* Build with webpack


Do you **not** want to use webpack, and just use the Polymer CLI tools? Check out [this branch](https://github.com/thepassle/create-lit-app/tree/no-webpack)




## Table of Contents

- [Quick start](#quickstart)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm build](#npm-build)
- [Folder Structure](#folder-structure)
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
	- [Using directives](#using-directives)
	- [Installing components](#installing-components)
	- [Upwards data flow](#upwards-data-flow)
	- [Slotted components](#slotted-components)
- [Lifecycle](#lifecycle)
- [Cheatsheet](#cheatsheet)
- [Polyfills](#polyfills)
- [Installing a dependency](#installing-a-dependency)
- [Add LitElement to a website](#add-litelement-to-a-website)
- [Contributing](#contributing)
- [Credits](#credits)
- [Further reading](#further-reading)

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
	README.md
	dist/
	node_modules/
	routes/
		api.js
	src/
		actions/
			count.js
		assets/
			favicon.ico
			github.svg
			logo.svg
		components/
			books-demo.js
			home-page.js
			not-found.js
			redux-demo.js
		reducers/
			count.js
		styles/
			AppStyles.js
			Colors.js
		vendor/
		index.html
		lit-app.js
		store.js
	test/
		books-demo.html
		home-page.html
		index.html
		redux-demo.html
	utils/
	.babelrc
	.eslintignore
	.eslintrc.json
	.gitignore
	package-lock.json
	package.json
	polymer.json
	README.md
	server.js
	webpack.config.js
```

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
import 'book-list-item.js';

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
import { AppStyles } from 'styles.js';

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
import { AppStyles } from 'styles.js';

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

### Using directives

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-directives)

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

### Installing components

Run `npm i --save @polymer/paper-button`

Import and use:

```js
import { LitElement, html } from '@polymer/lit-element/';
import '@polymer/paper-button/paper-button';

class InstallingComponentsDemo extends LitElement {
  render() {    
    return html`
      <div>
        <paper-button></paper-button>
      </div>
    `;
  }
}

customElements.define('installing-components-demo', InstallingComponentsDemo);
```

### Upwards data flow

[Try it on Stackblitz](https://stackblitz.com/edit/create-lit-app-upwards-data?file=add-book-component.js)

`book-list.js`:

```js
import { LitElement, html } from '@polymer/lit-element/';
import 'add-book-component.js';

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
import 'card-element.js';

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
import 'card-element.js';
import 'book-item.js';

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
* [`Web Components`](https://github.com/webcomponents/webcomponentsjs) via [`webcomponentsjs`](https://github.com/webcomponents/webcomponentsjs).
* [`custom-elements-es5-adapter.js`]() According to the spec, only ES6 classes (https://html.spec.whatwg.org/multipage/scripting.html#custom-element-conformance) may be passed to the native customElements.define API. For best performnace, ES6 should be served to browsers that support it, and ES5 code should be serve to those that don't. Since this may not always be possible, it may make sense to compile and serve ES5 to all browsers. However, if you do so, ES5-style custom element classes will now not work on browsers with native Custom Elements because ES5-style classes cannot properly extend ES6 classes, like HTMLElement. As a workaround, if your project has been compiled to ES5, load custom-elements-es5-adapter.js before defining Custom Elements. This adapter will automatically wrap ES5. *The adapter must NOT be compiled.*

* [`babel-helpers.min.js`]() For IE11 and Edge to support such a ES6 features as Symbol()
* [`webcomponents-loader.js`]() This loader performs client side feature detection and requests only needed polyfills. E.g., for IE11 it will load webcomponents-lite.js which includes full list of polyfills. But for Edge webcomponents-hi-ce-sd.js which contains polyfills for HTML Import, Custom Element and ShadowDOM.


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
    import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.0-dev.6/lit-element.js?module';
    
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

## Contributing

We'd love to have your helping hand on create-lit-app! Feel free to create a pull request if you want to help out.

## Credits

### Credits & helpful links:

* The incredibly helpful web-padawan and his [polymer3-webpack-starter](https://github.com/web-padawan/polymer3-webpack-starter)
* These excellent [LitHTML examples](https://github.com/LarsDenBakker/lit-html-examples) by Lars den Bakker
* [litHTML](https://github.com/Polymer/lit-html)
* [Vaadin Router](https://github.com/vaadin/vaadin-router)
* [polymer PWA starter kit](https://github.com/Polymer/pwa-starter-kit)

## Further reading
* [Redux](https://redux.js.org/introduction)
* [Making a fullstack app with lit](https://medium.com/@pascalschilp/making-a-fullstack-crud-app-with-lithtml-redux-express-and-webpack-fe7e5cf8b3ef)
