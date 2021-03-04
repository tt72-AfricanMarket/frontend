//react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//component
import App from './App';

//reducer
import rootReducer from './store/reducers/'

//style
import './index.css';
import './fonts/JosefinSans-Regular.ttf';

//logger
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
