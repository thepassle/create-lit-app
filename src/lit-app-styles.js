import { html } from '@polymer/lit-element';

const POLYMER_PINK = '#fc4482';
const SPACER = 5;

export const styles = html`
  <style>
    .app {
      text-align: center;
      font-family: sans-serif;
    }

    .app-logo {
      animation: app-logo-spin infinite 20s linear;
      height: 80px;
      margin-top: ${SPACER * 2}px;
    }

    .app-header {
      background-color: #222;
      height: 150px;
      padding: ${SPACER * 4}px;
      color: white;
    }

    .app-gh {
      position: fixed;
      width: ${SPACER * 5}px;
      bottom: ${SPACER * 5}px;
      left: ${SPACER * 5}px;
    }

    @keyframes app-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    a {
      color: ${POLYMER_PINK};
    }
  </style>
`;