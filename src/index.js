import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './my-react-redux'
import thunk from './my-thunk'
import App from './App';
import { createStore ,applyMiddleware} from './my-redux'
import registerServiceWorker from './registerServiceWorker';
import { counter } from './app.redux';

const store = createStore(counter,applyMiddleware(thunk))

ReactDOM.render(
 ( <Provider store={store}>
  <App />
  </Provider>)
  , document.getElementById('root'));
registerServiceWorker();
