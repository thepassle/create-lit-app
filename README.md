> ## 🛠 Status: In Development
> LitElement is currently in development. As long as LitElement is, so is create-lit-app. This repo will be kept up to date with the latest version of LitElement, but there are things that haven't been finalized yet and you can expect some changes.

<br>

## Create-lit-app

[![Built with create-lit-app](https://img.shields.io/badge/built%20with-create--lit--app-blue.svg)](https://github.com/thepassle/create-lit-app) [![Build Status](https://travis-ci.org/thepassle/create-lit-app.svg?branch=master)](https://travis-ci.org/thepassle/create-lit-app) [![Mentioned in Awesome lit-html>](https://awesome.re/mentioned-badge.svg)](https://github.com/web-padawan/awesome-lit-html)

![Lit App Screenshot](https://i.imgur.com/CaDLkto.png)

Demo:
https://create-lit-app.herokuapp.com/

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

- [Quick start](#quick-start)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Usage](#usage)
	- [Passing props](#passing-props)
	- [Event handlers](#event-handlers)
	- [Conditional rendering](#conditional-rendering)
	- [Setting default values](#setting-default-values)
	- [Arrays](#arrays)
	- [Attributes](#attributes)
	- [Adding styles](#adding-styles)
	- [Using directives](#using-directives)
	- [Installing components](#installing-components)
	- [Upwards data flow](#upwards-data-flow)
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

## Start the development server

Start `webpack-dev-server` on localhost `http://127.0.0.1:3000`:

```sh
npm run start
```

## Run tests

Run tests:

```sh
npm run test
```

## Build with webpack

Run the production build:

```sh
npm run build
node server.js
```

As easy as that! Next you can upload it to heroku/digital ocean/whatever.

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


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles create-lit-app in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!


## Usage

## Passing props

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

## Event handlers


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

## Conditional rendering

```js
import { LitElement, html } from '@polymer/lit-element/';

class ConditionalDemo extends LitElement {
  static get properties() {
    return {
      myBool: Boolean
    };
  }

  render() {    
    const { myBool } = this;

    return html`
      <div>
        ${myBool ? 'foo' : 'bar'}
      </div>

      // or return some html
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

## Setting default values

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

## Arrays

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
    this.myArr = [{ id: 1 }, { id: 2}];
  }

  render() {
    const { myArr } = this;
    
    return html`
      <div>
        ${myArr.map((item) => {
            return html`<h1>${item.id}</h1>`;
          })
        }
      </div>
    `;
  }
}

customElements.define('array-demo', ArrayDemo);
```

## Attributes

```js
class AttributesDemo extends LitElement {
  static get properties() {
    return {
      color: String
    };
  }
    
  constructor() {
    super();
    this.color = "red";
  }

  render() {  
    const { color } = this;
    return html`
      <h1 class="${color}">
        Hello universe!
      </h1>
    `;
  }
}

customElements.define('attributes-demo', AttributesDemo);
```

## Adding styles

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

## Using directives


```js
import { LitElement, html } from '@polymer/lit-element/';
import { until } from 'lit-html';

class DirectivesDemo extends LitElement {
  render() {    
    return html`
        <p>
          ${until(
              fetch('content.txt').then((r) => r.text()),
              html`<span>Loading...</span>`)}
        </p>
      `;
  }
}

customElements.define('directives-demo', DirectivesDemo);
```

## Installing components

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

## Upwards data flow

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


`add-book.js`:

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


## Contributing

We'd love to have your helping hand on create-lit-app! Feel free to create a pull request if you want to help out.

## Credits/helpful links
* The incredibly helpful web-padawan and his [polymer3-webpack-starter](https://github.com/web-padawan/polymer3-webpack-starter)
* These excellent [LitHTML examples](https://github.com/LarsDenBakker/lit-html-examples) by Lars den Bakker
* [litHTML](https://github.com/Polymer/lit-html)
* [Vaadin Router](https://github.com/vaadin/vaadin-router)
* [polymer PWA starter kit](https://github.com/Polymer/pwa-starter-kit)
* [create-react-app](https://github.com/facebook/create-react-app)

## Further reading
* [Redux](https://redux.js.org/introduction)
* [Making a fullstack app with lit](https://medium.com/@pascalschilp/making-a-fullstack-crud-app-with-lithtml-redux-express-and-webpack-fe7e5cf8b3ef)
