import React , {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {logout}  from '../actions'
class TopNav extends Component{
  logout = ()=>{
    console.log("logging out")
    this.props.logout();
  }
  render(){
    return(
      <div className="header nav-bar bg-flat-blue color-white    ">
        <div>BookStore</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div onClick={this.logout}>LOGOUT</div>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    logout : logout
  },dispatch)
}



export default connect(null,mapDispatchToProps)(TopNav)
