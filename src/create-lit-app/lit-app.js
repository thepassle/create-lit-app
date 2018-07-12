import { LitElement, html } from '@polymer/lit-element/';

import { Router } from '@vaadin/router';

import '@polymer/paper-button/paper-button';

import './components/home-page.js';
import './components/books-demo.js';
import './components/redux-demo.js';

import { AppStyles } from './styles/AppStyles';

class LitApp extends LitElement {

	constructor() {
		super();
	}

	_firstRendered(){
		const router = new Router(this.shadowRoot.querySelector('#outlet'));

	    router.setRoutes([
	      {path: '/', component: 'home-page'},
	      {path: '/books', component: 'books-demo'},
	      {path: '/redux', component: 'redux-demo'},
	    ]);
	}

	_render() {
		return html`
			${AppStyles}
			<div class="app">
				<header class="app-header">
					<img src="../logo.svg" class="app-logo" alt="logo" />
					<h1 class="app-title">Welcome to LitHTML</h1>
				</header>
				<p class="app-intro">
					To get started, edit <code>src/create-lit-app/lit-app.js</code> and save to reload.
				</p>
				<a href="/">Home</a>
				<a href="/books">Books</a>
				<a href="/redux">Redux</a>
				<div id="outlet"/>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
