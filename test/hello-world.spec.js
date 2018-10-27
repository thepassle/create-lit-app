import { html, render } from 'lit-html';
import { expect } from 'chai';

import '../src/hello-world';

describe('hello-world', () => {
  let element;

  const fixture = html`
    <hello-world .greeting=${'Welcome'}></hello-world>
  `;

  beforeEach(async () => {
    render(fixture, document.body);
    element = document.body.firstElementChild;
    await element.updateComplete;
  });

  afterEach(() => {
    element.remove();
  });

  it('should render a welcome message', () => {
    const title = element.shadowRoot.querySelector('h1');
    expect(title.innerText).to.equal('Welcome');
  });
});