import { LitElement, html } from '@polymer/lit-element/';
import { styles } from './lit-app-styles.js';
import './hello-world.js';

class LitApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>
			<div class="app">
				<header class="app-header">
					<img src="../assets/logo.svg" class="app-logo" alt="logo" />
					<h1 class="app-title">Welcome to LitHTML</h1>
				</header>

				<hello-world .greeting=${'Welcome'}></hello-world>
				
				<a aria-label="Create lit app on Github" href="https://github.com/thepassle/create-lit-app">
					<img src="../assets/github.svg" class="app-gh" alt />
				</a>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
