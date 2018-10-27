import { LitElement, html, property, customElement, query } from '@polymer/lit-element/';

@customElement('hello-world' as any)
class HelloWorld extends LitElement {
  
  @property({type: Boolean})
  show = false;

  @property()
  greeting = 'hello world';

  @query('#content') 
  content;

  updated() {
    console.log(this.content);
  }

  render() {    
    return html`
      <h1>${this.greeting}</h1>

      <button @click=${() => this.show = !this.show}>click me</button>

      <div id="content">
        ${this.show 
          ? 'foo'
          : 'bar'
        }
      </div>
    `;
  }
}