import React, { Component } from 'react';
import './style/App.css';
import { Provider } from 'react-redux'
import {fetchBooks} from './actions'
import {connect} from 'react-redux'

import TopNav from './components/TopNav.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import SideBar from './components/SideBar.js'
class BookApp extends Component {
  render() {
    return (
      <div className="template-base">
        <TopNav />
        <SideBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default BookApp;
