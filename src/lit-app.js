import { LitElement, html } from '@polymer/lit-element/';
import { AppStyles } from './AppStyles';
import './hello-world.js';

class LitApp extends LitElement {
	render() {
		return html`
			${AppStyles}
			<div class="app">
				<header class="app-header">
					<img src="../assets/logo.svg" class="app-logo" alt="logo" />
					<h1 class="app-title">Welcome to LitHTML</h1>
				</header>

				<div class="app-main">
					<hello-world .greeting=${'Welcome'}></hello-world>
				</div>

				<a href="https://github.com/thepassle/create-lit-app">
					<img src="../assets/github.svg" class="app-gh" alt />
				</a>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
