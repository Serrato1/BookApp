import React , {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookList from './BookList'
class Main extends Component{
  render(){
    return(
      <div className="main bg-white grid-col-8">
        <div></div>
        <BookList />
      </div>
    )
  }
}






export default Main
