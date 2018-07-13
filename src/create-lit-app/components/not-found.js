import { LitElement, html } from '@polymer/lit-element/';

class NotFound extends LitElement {
	_render() {
		return html`
			<h1>404</h1>
			<p class="app-intro">
				Page not found.
			</p>
		`;
	}
}

customElements.define('not-found', NotFound);
