import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import ReactGA from 'react-ga4';
import App from './App';
import store from './store';

async function enableMocking() {
  if (process.env.REACT_APP_MSW !== 'enabled') {
    return;
  }
  const { worker } = require('./mocks/browser');

  await worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
});
