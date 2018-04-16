import React from 'react';
import ReactDOM from 'react-dom';
import './style/granular.css';
import './style/index.css';

import BookApp from './BookApp';
import {Provider} from 'react-redux'
import {fetchBooks} from './actions'
import store from './store'
store.dispatch(fetchBooks())
ReactDOM.render(
  <Provider store={store}>
    <BookApp />
  </Provider>
  ,
  document.getElementById('root'));
