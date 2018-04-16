import React , {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class TopNav extends Component{
  render(){
    return(
      <div className="header nav-bar bg-flat-blue color-white    ">
        <div>BookStore</div>
      </div>
    )
  }
}






export default TopNav
