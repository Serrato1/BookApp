import React from 'react';
import ReactDOM from 'react-dom';
import './style/granular.css';
import './style/index.css';

import BookApp from './BookApp';
import Login from './components/Login';
import {Provider} from 'react-redux'
import {fetchBooks} from './actions'
import store from './store'

import { Router,Redirect } from 'react-router'
import {Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

store.dispatch(fetchBooks())
// let loggedIn = this.props.authState;
console.log('store ',store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {/* <Route exact path ='/' component={BookApp} /> */}
        <Route exact path="/" render={() => {
          let authenticated = store.getState().authState;
          return authenticated ? (
            <BookApp/>
          ) : (
            <Redirect to="/login"/>
          )
        }}/>
        <Route path ='/login' component={Login} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
