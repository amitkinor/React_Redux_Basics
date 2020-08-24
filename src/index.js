import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './store/reducers/counterReducer';
import resultsReducer from './store/reducers/resultsReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
})

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
