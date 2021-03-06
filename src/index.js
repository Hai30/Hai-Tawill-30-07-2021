import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

/* Normalize all document styles */
import 'normalize.css';
import './bootstrap.min.css'
import './index.css'

import './styles/index.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
     <App />
   </React.StrictMode>
  </Provider>,
 
  document.getElementById('root')
);

