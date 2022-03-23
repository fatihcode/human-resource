import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css'
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './store/reducer'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, promise, logger)))

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);