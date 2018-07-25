import { LitElement, html } from '@polymer/lit-element/';

class BooksDemo extends LitElement {
	static get properties() {
		return {
			books: Array
		};
	}

	constructor() {
		super();
		this.books = [];
	}

	_firstRendered(){
		fetch('/api/books')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.books = res;
			});
	}

	_render({books}) {
		return html`
			<h1>Books demo</h1>

			${
				books.map((book) => {
					return html`<h3>${book.title}</h3>
								<p>${book.author}</p>
								<br>`;
				})
			}
		`;
	}
}

customElements.define('books-demo', BooksDemo);
