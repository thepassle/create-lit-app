import { LitElement, html } from '@polymer/lit-element/';

class HomePage extends LitElement {
	_render() {
		return html`
			<h1>Welcome</h1>
			<p class="app-intro">
				To get started, edit <code>src/lit-app.js</code> and save to reload.
			</p>
		`;
	}
}

customElements.define('home-page', HomePage);
