import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import configureStore from "./store/configureStore";      // import configure store to make store
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';


const store = configureStore()

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
