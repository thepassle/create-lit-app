import { html } from '@polymer/lit-element';

export const styles = html`
  .app {
    text-align: center;
    font-family: sans-serif;
  }

  .app-logo {
    animation: app-logo-spin infinite 20s linear;
    height: 80px;
    margin-top: 10px;
  }

  .app-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .app-gh {
    position: fixed;
    width: 25px;
    bottom: 25px;
    left: 25px;
  }

  @keyframes app-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  a {
    color: #fc4482;
  }
`;