import { LitElement, html } from '@polymer/lit-element/';

class HomePage extends LitElement {
	_render() {
		return html`
			<h1>Welcome</h1>
		`;
	}
}

customElements.define('home-page', HomePage);
