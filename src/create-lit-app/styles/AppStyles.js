import { html } from '@polymer/lit-element';
import { POLYMER_PINK } from './Colors';

const SPACER = 5;

export const AppStyles = html`
<style>
  .app {
    text-align: center;
    font-family: sans-serif;
  }

  .app-logo {
    animation: app-logo-spin infinite 20s linear;
    height: 80px;
    margin-top: ${ SPACER * 2 }px;
  }

  .app-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .app-title {
    font-size: 1.5em;
  }

  .app-intro {
    font-size: large;
  }

  @keyframes app-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  a {
    color: ${ POLYMER_PINK };
  }
</style>
`;