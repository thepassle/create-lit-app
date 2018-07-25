import { LitElement, html } from '@polymer/lit-element/';

import { increment, decrement } from '../actions/count';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

class ReduxDemo extends connect(store)(LitElement) {
	static get properties() {
		return {
			count: Number
		};
	}

	_render({count}){
		return html`
			  <h1>Redux demo</h1>
			  <p>count: ${count}</p>
			  <button on-click="${() => store.dispatch(increment())}">inc</button>
			  <button on-click="${() => store.dispatch(decrement())}">dec</button>
		`;
	}

	_stateChanged(state){
		this.count = state.counter.count;
	}
}

customElements.define('redux-demo', ReduxDemo);
